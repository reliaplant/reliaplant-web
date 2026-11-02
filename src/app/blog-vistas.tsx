// Blog · índice y artículo (artículos de la colección "articulos"). La cabecera y el pie
// los pone SiteChrome. Hoy solo hay español; las vistas ya reciben el idioma.

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articuloPorSlug, articulosEn } from "@/lib/blog-datos";
import {
  RUTAS_BLOG,
  fechaLarga,
  minutosLectura,
  rutaArticulo,
  versiones,
  type Articulo,
} from "@/lib/blog";
import { IDIOMAS, TEXTOS, type Idioma } from "@/lib/i18n";
import Boton from "@/components/Boton";
import { ContenidoArticulo } from "./contenido-articulo";
import { postsAnteriores, type TarjetaBlog } from "./blog/anteriores";

const SITIO = "https://reliaplant.com";
const URL_APP = "https://app.reliaplant.com/?utm_source=blog&utm_medium=articulo";

const absoluta = (ruta: string) => (ruta.startsWith("http") ? ruta : `${SITIO}${ruta}`);

function tarjeta(articulo: Articulo, idioma: Idioma): TarjetaBlog {
  const texto = articulo.textos[idioma]!;
  return {
    id: articulo.id,
    href: rutaArticulo(idioma, texto.slug),
    titulo: texto.titulo,
    resumen: texto.resumen,
    imagen: articulo.imagen,
    imagenAlt: texto.imagenAlt,
    categoria: articulo.categoria,
    fecha: fechaLarga(articulo.fecha, idioma),
    minutos: minutosLectura(texto.contenido),
  };
}

// ---------- Índice ----------

export function metadataIndice(idioma: Idioma): Metadata {
  const t = TEXTOS[idioma];
  return {
    title: t.blog.titulo,
    description: t.blog.descripcion,
    alternates: {
      canonical: RUTAS_BLOG[idioma],
      languages: { ...RUTAS_BLOG, "x-default": RUTAS_BLOG.es },
    },
    openGraph: { siteName: "Reliaplant", locale: t.locale, type: "website", url: RUTAS_BLOG[idioma], title: t.blog.titulo, description: t.blog.descripcion },
  };
}

export async function Indice({ idioma }: { idioma: Idioma }) {
  const t = TEXTOS[idioma];
  // Los posts del blog anterior (colección "blogPosts") siguen apareciendo, después de los nuevos.
  const anteriores = idioma === "es" ? await postsAnteriores() : [];
  const [destacado, ...resto] = [...(await articulosEn(idioma)).map((a) => tarjeta(a, idioma)), ...anteriores];

  return (
    <div lang={t.lang} className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:pt-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">{t.blog.kicker}</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{t.blog.encabezado}</h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-600">{t.blog.descripcion}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {!destacado && <p className="py-16 text-center text-lg text-gray-400">{t.blog.vacio}</p>}
        {destacado && <Tarjeta datos={destacado} idioma={idioma} grande />}
        {resto.length > 0 && (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resto.map((a) => (
              <Tarjeta key={a.id} datos={a} idioma={idioma} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Tarjeta({ datos, idioma, grande = false }: { datos: TarjetaBlog; idioma: Idioma; grande?: boolean }) {
  const t = TEXTOS[idioma];
  return (
    <Link
      href={datos.href}
      className={`group block overflow-hidden border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${grande ? "md:grid md:grid-cols-2" : ""}`}
    >
      {datos.imagen ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={datos.imagen} alt={datos.imagenAlt ?? ""} loading={grande ? "eager" : "lazy"} className="aspect-[16/9] h-full w-full object-cover" />
      ) : (
        <div className="aspect-[16/9] h-full w-full bg-gradient-to-br from-gray-900 to-blue-900" />
      )}
      <div className={grande ? "p-8 md:p-10" : "p-6"}>
        <p className="text-xs text-gray-500">
          {datos.categoria && <span className="mr-2 font-semibold uppercase tracking-wide text-blue-600">{datos.categoria}</span>}
          {datos.fecha} · {datos.minutos} {t.blog.minutos}
        </p>
        <h2 className={`mt-2 font-bold text-gray-900 transition-colors group-hover:text-blue-600 ${grande ? "text-2xl md:text-3xl" : "text-lg"}`}>{datos.titulo}</h2>
        {datos.resumen && <p className="mt-3 line-clamp-3 text-sm text-gray-600">{datos.resumen}</p>}
        <span className="mt-4 inline-block text-sm font-semibold text-blue-600">{t.blog.leer} →</span>
      </div>
    </Link>
  );
}

// ---------- Artículo ----------

/** Al compilar se generan todos los artículos; si aún no hay, una ruta de respaldo que da 404. */
export async function paramsArticulos(idioma: Idioma) {
  const slugs = (await articulosEn(idioma)).map((a) => ({ slug: a.textos[idioma]!.slug }));
  return slugs.length ? slugs : [{ slug: "sin-articulos" }];
}

export async function metadataArticulo(idioma: Idioma, slug: string): Promise<Metadata> {
  const articulo = await articuloPorSlug(idioma, slug);
  if (!articulo) return {};
  const texto = articulo.textos[idioma]!;
  const rutas = versiones(articulo);
  return {
    title: texto.titulo,
    description: texto.resumen,
    keywords: articulo.etiquetas,
    authors: [{ name: articulo.autor }],
    alternates: { canonical: rutas[idioma], languages: { ...rutas, "x-default": rutas.es ?? rutas[idioma] } },
    openGraph: {
      type: "article",
      siteName: "Reliaplant",
      locale: TEXTOS[idioma].locale,
      url: rutas[idioma],
      title: texto.titulo,
      description: texto.resumen,
      publishedTime: articulo.fecha,
      modifiedTime: articulo.actualizado ?? articulo.fecha,
      authors: [articulo.autor],
      section: articulo.categoria,
      tags: articulo.etiquetas,
      images: articulo.imagen ? [{ url: absoluta(articulo.imagen), alt: texto.imagenAlt }] : undefined,
    },
    twitter: {
      card: articulo.imagen ? "summary_large_image" : "summary",
      title: texto.titulo,
      description: texto.resumen,
      images: articulo.imagen ? [absoluta(articulo.imagen)] : undefined,
    },
  };
}

export async function VistaArticulo({ idioma, slug }: { idioma: Idioma; slug: string }) {
  const t = TEXTOS[idioma];
  const articulo = await articuloPorSlug(idioma, slug);
  if (!articulo) notFound();
  const texto = articulo.textos[idioma]!;
  const rutas = versiones(articulo);
  const todos = (await articulosEn(idioma)).filter((a) => a.id !== articulo.id);
  // Relacionados: primero los de la misma categoría o con etiquetas en común.
  const afinidad = (a: Articulo) =>
    (a.categoria && a.categoria === articulo.categoria ? 2 : 0) + (a.etiquetas ?? []).filter((e) => articulo.etiquetas?.includes(e)).length;
  const otros = todos.map((a, i) => ({ a, i, p: afinidad(a) })).sort((x, y) => y.p - x.p || x.i - y.i).slice(0, 3).map((x) => x.a);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: texto.titulo,
    description: texto.resumen,
    inLanguage: t.lang,
    datePublished: articulo.fecha,
    dateModified: articulo.actualizado ?? articulo.fecha,
    author: { "@type": "Person", name: articulo.autor },
    publisher: { "@type": "Organization", name: "Reliaplant", url: SITIO, logo: { "@type": "ImageObject", url: `${SITIO}/assets/logo.webp` } },
    mainEntityOfPage: `${SITIO}${rutas[idioma]}`,
    image: articulo.imagen ? [absoluta(articulo.imagen)] : undefined,
    articleSection: articulo.categoria,
    keywords: articulo.etiquetas?.join(", "),
  };

  return (
    <div lang={t.lang} className="min-h-screen bg-gray-100 px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="mx-auto max-w-4xl">
        <Link href={RUTAS_BLOG[idioma]} className="mb-6 inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-800">
          ← {t.blog.volver}
        </Link>

        <div className="overflow-hidden bg-white shadow-2xl shadow-gray-300/70">
          {articulo.imagen && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={articulo.imagen} alt={texto.imagenAlt ?? ""} className="aspect-[16/9] max-h-[440px] w-full object-cover" />
          )}

          <article className="px-6 py-10 md:px-14">
            <p className="text-sm text-gray-500">
              {articulo.categoria && <span className="mr-2 font-semibold uppercase tracking-wide text-blue-600">{articulo.categoria}</span>}
              <time dateTime={articulo.fecha}>{fechaLarga(articulo.fecha, idioma)}</time> · {minutosLectura(texto.contenido)} {t.blog.minutos}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">{texto.titulo}</h1>
            <p className="mt-5 text-lg text-gray-600">{texto.resumen}</p>
            <div className="mb-10 mt-6 flex items-center gap-3 border-b border-gray-100 pb-8">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-50 font-semibold text-blue-600">{articulo.autor.charAt(0)}</div>
              <p className="text-sm font-semibold text-gray-900">{articulo.autor}</p>
            </div>

            <div className="prose prose-lg prose-gray max-w-none prose-headings:scroll-mt-24 prose-a:text-blue-600 prose-img:mx-auto prose-table:text-sm">
              <ContenidoArticulo texto={texto.contenido} idioma={idioma} />
            </div>

            {articulo.etiquetas && articulo.etiquetas.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {articulo.etiquetas.map((e) => (
                  <span key={e} className="bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {e}
                  </span>
                ))}
              </div>
            )}
          </article>
        </div>

        <div className="mt-8 bg-gray-900 px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold">{t.blog.cta}</h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-300">{t.blog.ctaTexto}</p>
          <div className="mt-6 flex justify-center">
            <Boton href={URL_APP} variant="primary">
              {t.blog.ctaBoton}
            </Boton>
          </div>
        </div>

        {otros.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-xl font-bold text-gray-900">{t.blog.relacionados}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otros.map((a) => (
                <Tarjeta key={a.id} datos={tarjeta(a, idioma)} idioma={idioma} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/** Para el sitemap: cada artículo en cada idioma, con sus versiones. */
export async function entradasSitemap() {
  const porId = new Map<string, Articulo>();
  for (const i of IDIOMAS) for (const a of await articulosEn(i)) porId.set(a.id, a);
  return [...porId.values()];
}
