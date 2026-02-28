import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY no está configurada en el servidor." },
      { status: 500 }
    );
  }

  const { title, content, field } = await req.json();

  if (!title && !content) {
    return NextResponse.json(
      { error: "Se necesita al menos el título o contenido del artículo." },
      { status: 400 }
    );
  }

  const contentSnippet = content
    ? content.replace(/<[^>]+>/g, " ").slice(0, 1500)
    : "";

  const prompts: Record<string, string> = {
    seoTitle: `Eres un experto en SEO para industria de mantenimiento y confiabilidad industrial en Latinoamérica.
Dado el siguiente artículo, genera UN título SEO optimizado en español.
- Entre 55 y 65 caracteres
- Incluye la keyword principal al inicio
- Atractivo para hacer clic
- Termina con "| Reliaplant" si cabe

Título del artículo: "${title}"
Contenido (extracto): "${contentSnippet}"

Responde SOLO con el título, sin comillas ni explicaciones.`,

    slug: `Dado el siguiente artículo, genera un slug SEO en español.
- Solo minúsculas, sin tildes, sin caracteres especiales
- Palabras separadas por guiones
- Máximo 60 caracteres
- Incluye las keywords principales
- Sin prefijo /blog/

Título: "${title}"

Responde SOLO con el slug, sin comillas ni explicaciones.`,

    summary: `Eres un experto en contenido para industria de mantenimiento y confiabilidad en Latinoamérica.
Dado el siguiente artículo, escribe un resumen en español.
- 1-2 frases, máximo 160 caracteres
- Explica qué aprenderá el lector
- Lenguaje profesional pero directo

Título: "${title}"
Contenido (extracto): "${contentSnippet}"

Responde SOLO con el resumen, sin comillas ni explicaciones.`,

    metaDescription: `Eres un experto en SEO para industria de mantenimiento y confiabilidad industrial en Latinoamérica.
Dado el siguiente artículo, escribe una meta descripción para Google en español.
- Entre 145 y 160 caracteres exactamente
- Incluye la keyword principal
- Llama a la acción implícita
- No empieces con "Descubre" o "Aprende"

Título: "${title}"
Contenido (extracto): "${contentSnippet}"

Responde SOLO con la meta descripción, sin comillas ni explicaciones.`,

    keyPhrases: `Eres un experto en SEO para industria de mantenimiento y confiabilidad en Latinoamérica.
Dado el siguiente artículo, genera 5 frases clave para posicionar en Google en español.
- Frases de 2-4 palabras que buscaría un profesional de mantenimiento
- Relacionadas con el contenido del artículo
- Ordenadas de mayor a menor volumen de búsqueda estimado

Título: "${title}"
Contenido (extracto): "${contentSnippet}"

Responde SOLO con las 5 frases separadas por comas, sin numeración ni explicaciones.`,
  };

  const prompt = prompts[field];
  if (!prompt) {
    return NextResponse.json({ error: "Campo no válido." }, { status: 400 });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 200,
    });

    const suggestion = completion.choices[0]?.message?.content?.trim() || "";
    return NextResponse.json({ suggestion });
  } catch (error: any) {
    console.error("OpenAI error:", error);
    return NextResponse.json(
      { error: error?.message || "Error al generar la sugerencia." },
      { status: 500 }
    );
  }
}
