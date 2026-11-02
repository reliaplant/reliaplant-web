// Blog anterior: posts de la colección "blogPosts" (HTML de Tiptap, escritos desde /admin/blog-editor).
// Se conservan para no romper sus URLs: salen en el índice después de los artículos nuevos y
// /blog/[slug] los muestra si el slug no es de un artículo nuevo. Si algo falla al leerlos
// (p. ej. faltan las variables NEXT_PUBLIC_FIREBASE_*), el blog sigue funcionando sin ellos.

import type { Metadata } from "next";
import type { BlogPost } from "@/types/blog";
import BlogPostContent from "./[slug]/components/BlogPostContent";
import { estimateReadingTime } from "@/lib/utils/blogContent";

const BASE_URL = process.env.HOST_URL || "https://reliaplant.com";

export type TarjetaBlog = {
  id: string;
  href: string;
  titulo: string;
  resumen?: string;
  imagen?: string;
  imagenAlt?: string;
  categoria?: string;
  fecha: string;
  minutos: number;
};

async function publicados(): Promise<BlogPost[]> {
  try {
    const { getPublishedBlogPosts } = await import("@/lib/firebase/blog/blog");
    return await getPublishedBlogPosts();
  } catch (error) {
    console.error("Blog anterior: no se pudieron leer los posts", error);
    return [];
  }
}

function formatDate(dateString: string): string {
  try {
    return new Intl.DateTimeFormat("es-MX", { year: "numeric", month: "long", day: "numeric" }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

export async function postsAnteriores(): Promise<TarjetaBlog[]> {
  return (await publicados()).map((post) => ({
    id: `anterior-${post.id}`,
    href: `/blog/${post.slug || post.id}`,
    titulo: post.title,
    resumen: post.summary,
    imagen: post.coverImage || undefined,
    imagenAlt: post.title,
    categoria: post.tags?.[0],
    fecha: formatDate(post.publishDate),
    minutos: estimateReadingTime(post.content),
  }));
}

export async function postAnterior(slug: string) {
  const posts = await publicados();
  const post = posts.find((p) => p.slug === slug || p.id === slug);
  return post ? { post, posts } : null;
}

export async function metadataAnterior(slug: string): Promise<Metadata> {
  const encontrado = await postAnterior(slug);
  if (!encontrado) return {};
  const { post } = encontrado;
  const description = post.metaDescription || post.summary || `${post.title} - Artículo por ${post.author}`;
  return {
    title: post.seoTitle || post.title,
    description,
    keywords: post.keyPhrases?.join(", ") || post.tags.join(", "),
    alternates: { canonical: `${BASE_URL}/blog/${post.slug || post.id}` },
    openGraph: {
      title: post.seoTitle || post.title,
      description,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.updatedAt || post.publishDate,
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export async function VistaAnterior({ post, posts }: { post: BlogPost; posts: BlogPost[] }) {
  const { getContributor } = await import("@/lib/firebase/blog/contributor");
  const contributor = post.contributorId ? await getContributor(post.contributorId).catch(() => null) : null;

  const relatedPosts = posts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      const aShared = a.tags?.some((t) => post.tags?.includes(t)) ? 1 : 0;
      const bShared = b.tags?.some((t) => post.tags?.includes(t)) ? 1 : 0;
      if (aShared !== bShared) return bShared - aShared;
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    })
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.metaDescription || post.summary || "",
    inLanguage: "es",
    ...(post.coverImage && { image: post.coverImage }),
    datePublished: post.publishDate,
    dateModified: post.updatedAt || post.publishDate,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Reliaplant", url: BASE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug || post.id}` },
    ...(post.keyPhrases?.length && { keywords: post.keyPhrases.join(", ") }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <BlogPostContent post={post} contributor={contributor} relatedPosts={relatedPosts} />
    </>
  );
}
