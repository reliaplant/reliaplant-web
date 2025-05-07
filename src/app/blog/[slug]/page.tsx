import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/firebase/blog/blog";
import { BlogPost } from "@/types/blog";
import BlogPostContent from "./components/BlogPostContent";
import { Metadata } from "next";

// Datos de muestra para uso en desarrollo y build
const MOCK_SLUGS = [
  "bienvenido-al-blog",
  "mantenimiento-predictivo",
  "estrategias-de-mantenimiento",
  "analisis-de-vibracion",
  "gestion-de-activos",
];

// Función mejorada para generar rutas estáticas durante el build
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return MOCK_SLUGS.map((slug) => ({
    slug,
  }));
}

// Helper function to get blog post by slug
async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!slug) return null;

  try {
    const posts = await getAllBlogPosts();
    if (!Array.isArray(posts)) return null;

    // First, try to find by slug
    const postBySlug = posts.find(
      (post) => post?.published && post?.slug === slug
    );
    if (postBySlug) return postBySlug;

    // If not found, try to find by ID (fallback)
    const postById = posts.find((post) => post?.published && post?.id === slug);
    return postById || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Necesitamos usar dynamic = 'force-dynamic' para evitar errores en Next.js 15
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  try {
    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return {
        title: "Artículo no encontrado",
        description: "El artículo que buscas no existe o ha sido eliminado.",
      };
    }

    const title = post.seoTitle || post.title || "Blog Post";
    const description = post.metaDescription || post.summary || title;
    const keywords = post.keyPhrases?.join(", ") || post.tags?.join(", ") || "";

    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        images: post.coverImage ? [{ url: post.coverImage }] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "Ha ocurrido un error al cargar el artículo.",
    };
  }
}

// TEMPORARY: Use any for props to test if type error goes away
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
