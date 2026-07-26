import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function slugify(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[:/,._]/g, " ")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY no está configurada en el servidor." },
      { status: 500 }
    );
  }

  const { topic, keyword, notes } = await req.json();

  if (!topic || !String(topic).trim()) {
    return NextResponse.json(
      { error: "Describe el tema del artículo antes de generar." },
      { status: 400 }
    );
  }

  const prompt = `Eres un ingeniero de confiabilidad senior que escribe artículos técnicos para el blog de Reliaplant, una plataforma B2B de confiabilidad industrial para Latinoamérica (oil & gas, energía, manufactura, minería). La audiencia son ingenieros de confiabilidad y gerentes de mantenimiento. Tono profesional y técnico, no promocional.

Escribe un artículo completo en español sobre: "${topic}"
${keyword ? `Palabra clave objetivo para SEO: "${keyword}"` : ""}
${notes ? `Notas adicionales del editor: "${notes}"` : ""}

Responde ÚNICAMENTE con un objeto JSON válido (sin markdown, sin \`\`\`), con esta forma exacta:
{
  "title": "título del artículo, claro y directo",
  "contentHtml": "cuerpo del artículo en HTML semántico simple (usa <h2>, <h3>, <p>, <ul>/<li>, <ol>/<li>, <blockquote>, <strong>, <em> y <a href> si aplica; NO uses <html>, <head> ni <body>; NO uses markdown; al menos 600 palabras, estructurado con introducción, 3-5 secciones con subtítulos <h2>, y una conclusión práctica)",
  "summary": "1-2 frases, máximo 160 caracteres, qué aprenderá el lector",
  "tags": ["2 a 4 etiquetas cortas relacionadas al tema"],
  "seoTitle": "título SEO de 55-65 caracteres con la keyword principal al inicio, terminando en | Reliaplant si cabe",
  "metaDescription": "meta descripción de 145-160 caracteres con la keyword principal",
  "keyPhrases": ["5 frases clave de 2-4 palabras que buscaría un profesional de mantenimiento, de mayor a menor volumen estimado"]
}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 3000,
      response_format: { type: "json_object" },
    });

    const raw = completion.choices[0]?.message?.content?.trim() || "{}";
    const parsed = JSON.parse(raw);

    if (!parsed.title || !parsed.contentHtml) {
      throw new Error("La IA no devolvió título o contenido.");
    }

    return NextResponse.json({
      title: parsed.title,
      content: parsed.contentHtml,
      summary: parsed.summary || "",
      tags: Array.isArray(parsed.tags) ? parsed.tags : [],
      seoTitle: parsed.seoTitle || "",
      slug: slugify(parsed.title),
      metaDescription: parsed.metaDescription || "",
      keyPhrases: Array.isArray(parsed.keyPhrases) ? parsed.keyPhrases : [],
    });
  } catch (error: any) {
    console.error("OpenAI error (generate-post):", error);
    return NextResponse.json(
      { error: error?.message || "Error al generar el artículo." },
      { status: 500 }
    );
  }
}
