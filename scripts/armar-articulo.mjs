// Junta un artículo de contenido/articulos/<id>/ (meta.json + es.md) en el JSON que guarda Firestore.
// Uso: node scripts/armar-articulo.mjs <id> > articulo.json
// Cada .md empieza con líneas "campo: valor" (titulo, slug, resumen, imagenAlt), luego "---" y el texto.

import { existsSync, readFileSync } from "node:fs";

const id = process.argv[2];
if (!id) throw new Error("Falta el id del artículo");
const carpeta = new URL(`../contenido/articulos/${id}/`, import.meta.url);

const meta = JSON.parse(readFileSync(new URL("meta.json", carpeta), "utf8"));
const textos = {};
for (const idioma of ["es"]) {
  const archivo = new URL(`${idioma}.md`, carpeta);
  if (!existsSync(archivo)) continue;
  const [cabecera, ...cuerpo] = readFileSync(archivo, "utf8").split(/^---$/m);
  const campos = Object.fromEntries(
    cabecera.trim().split("\n").map((l) => [l.slice(0, l.indexOf(":")).trim(), l.slice(l.indexOf(":") + 1).trim()]),
  );
  textos[idioma] = { ...campos, contenido: cuerpo.join("---").trim() };
}

console.log(JSON.stringify({ publicado: true, ...meta, textos }, null, 2));
