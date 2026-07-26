// Migra los posts markdown de src/posts/ a la colección Firestore "blogPosts"
// que ya usa el CMS real del blog (/admin/blog-editor, /admin/blog-manager).
//
// Uso:
//   node scripts/migrate-posts-to-blog.mjs            -> dry run (no escribe nada,
//                                                        genera scripts/migration-preview.json)
//   node scripts/migrate-posts-to-blog.mjs --commit    -> escribe de verdad en Firestore
//                                                        (todos como borrador, published:false)
//
// Requiere que exista .env.local con las variables NEXT_PUBLIC_FIREBASE_* (las mismas
// que ya usa la app) para el modo --commit. El dry run no las necesita.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const POSTS_DIR = path.join(ROOT, "src", "posts");
const COMMIT = process.argv.includes("--commit");

// Valores placeholder detectados en el contenido viejo — si el frontmatter
// trae exactamente esto, lo tratamos como "no hay dato real" y lo dejamos vacío
// en vez de migrar basura.
const JUNK_VALUES = new Set([
  "esta es la descripcion del articulo de causa raiz",
  "análisis de causa raíz",
]);

function isJunk(value) {
  if (!value) return true;
  return JUNK_VALUES.has(String(value).trim().toLowerCase());
}

function slugify(title) {
  return title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // quita acentos
    .toLowerCase()
    .replace(/[:/,._]/g, " ") // separa en vez de pegar palabras/números
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function cleanMarkdownBody(raw) {
  return raw
    .split("\n")
    .filter((line) => !/^\s*(IMAGEN AQUI\s*)+$/i.test(line.trim()))
    .join("\n")
    .trim();
}

function readPosts() {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  return files.map((fileName) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
    const { data, content } = matter(raw);

    const title = data.title || fileName.replace(/\.md$/, "");
    const cleanedBody = cleanMarkdownBody(content);
    const contentHtml = marked.parse(cleanedBody);

    const tagsRaw = data.tags;
    const tags = tagsRaw
      ? String(tagsRaw)
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

    const author = data.Author || data.author || "";
    const summary = isJunk(data.Description || data.description) ? "" : (data.Description || data.description);
    const keyPhrases = isJunk(data.keywords) ? [] : [String(data.keywords)];

    const publishDate = data.date
      ? new Date(data.date).toISOString()
      : new Date().toISOString();

    const needsReview = [];
    if (!author) needsReview.push("falta autor");
    if (!summary) needsReview.push("falta resumen (usar \"Sugerir con IA\" en el editor)");
    if (!keyPhrases.length) needsReview.push("faltan frases clave (usar \"Sugerir con IA\")");
    needsReview.push("falta imagen de portada");
    needsReview.push("falta título SEO y meta descripción (usar \"Sugerir con IA\")");

    return {
      sourceFile: fileName,
      title,
      slug: slugify(title),
      author,
      tags,
      summary,
      keyPhrases,
      publishDate,
      content: contentHtml,
      coverImage: "",
      seoTitle: "",
      metaDescription: "",
      published: false, // todo entra como borrador, sin excepción
      needsReview,
    };
  });
}

async function main() {
  const posts = readPosts();

  console.log(`\nEncontrados ${posts.length} posts en src/posts/\n`);
  posts.forEach((p) => {
    console.log(`- ${p.sourceFile}`);
    console.log(`    título: ${p.title}`);
    console.log(`    slug:   /blog/${p.slug}`);
    console.log(`    pendiente: ${p.needsReview.join(" · ")}`);
  });

  const previewPath = path.join(__dirname, "migration-preview.json");
  fs.writeFileSync(previewPath, JSON.stringify(posts, null, 2), "utf8");
  console.log(`\nVista previa completa escrita en: ${previewPath}`);

  if (!COMMIT) {
    console.log(
      "\nEsto fue un dry run — no se escribió nada en Firestore. Revisa el JSON de vista previa y vuelve a correr con --commit para migrar de verdad.\n"
    );
    return;
  }

  console.log("\n--commit detectado: escribiendo en Firestore (colección blogPosts) como borradores...\n");

  const { initializeApp } = await import("firebase/app");
  const { getFirestore, collection, addDoc } = await import("firebase/firestore");
  const dotenv = await import("dotenv");
  dotenv.config({ path: path.join(ROOT, ".env.local") });

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  if (!firebaseConfig.projectId) {
    console.error("No se encontraron las variables NEXT_PUBLIC_FIREBASE_* en .env.local. Abortando.");
    process.exit(1);
  }

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  for (const p of posts) {
    const { sourceFile, needsReview, ...blogPost } = p;
    const docRef = await addDoc(collection(db, "blogPosts"), {
      ...blogPost,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    console.log(`Creado: ${sourceFile} -> blogPosts/${docRef.id} (borrador)`);
  }

  console.log("\nListo. Todos los posts quedaron como borrador en /admin/blog-manager para completarlos antes de publicar.\n");
}

main().catch((err) => {
  console.error("Error en la migración:", err);
  process.exit(1);
});
