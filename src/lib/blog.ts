// Artículos del blog, guardados en Firestore (colección "articulos"). Tipos y utilidades;
// la lectura está en blog-datos.ts.

import { IDIOMAS, type Idioma } from "./i18n";

/** Texto de un artículo en un idioma. `contenido` va en Markdown. */
export type TextoArticulo = {
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  imagenAlt?: string;
};

export type Articulo = {
  id: string;
  publicado: boolean;
  /** Fecha de publicación, "AAAA-MM-DD". */
  fecha: string;
  actualizado?: string;
  autor: string;
  categoria?: string;
  etiquetas?: string[];
  /** URL de la imagen de portada (Firebase Storage o /public). */
  imagen?: string;
  textos: Partial<Record<Idioma, TextoArticulo>>;
};

export const COLECCION = "articulos";

/** Prefijo de las rutas del blog en cada idioma. */
export const RUTAS_BLOG: Record<Idioma, string> = { es: "/blog" };

export const rutaArticulo = (idioma: Idioma, slug: string) => `${RUTAS_BLOG[idioma]}/${slug}`;

/** Rutas del mismo artículo en cada idioma disponible (para hreflang y el selector de idioma). */
export function versiones(articulo: Articulo): Partial<Record<Idioma, string>> {
  return Object.fromEntries(
    IDIOMAS.filter((i) => articulo.textos[i]).map((i) => [i, rutaArticulo(i, articulo.textos[i]!.slug)]),
  );
}

/** Minutos de lectura aproximados (220 palabras por minuto). */
export const minutosLectura = (texto: string) => Math.max(1, Math.round(texto.split(/\s+/).length / 220));

export function fechaLarga(fecha: string, idioma: Idioma) {
  return new Date(`${fecha}T12:00:00Z`).toLocaleDateString(idioma, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

/** Preguntas de la sección "## Preguntas frecuentes" (cada una un "### ..."), para el JSON-LD FAQPage. */
export function preguntasFrecuentes(contenido: string) {
  const seccion = contenido.split(/^## +Preguntas frecuentes\s*$/im)[1]?.split(/^## /m)[0];
  if (!seccion) return [];
  const plano = (md: string) =>
    md
      .replace(/<[^>]+>/g, "")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`>]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  return seccion
    .split(/^### +/m)
    .slice(1)
    .map((bloque) => {
      const [pregunta, ...resto] = bloque.split("\n");
      return { pregunta: plano(pregunta), respuesta: plano(resto.join("\n")) };
    })
    .filter((p) => p.pregunta && p.respuesta);
}
