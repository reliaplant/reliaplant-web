import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/firebase/blog/blog";
import BlogPostContent from "./components/BlogPostContent";

// Add this function to generate static paths for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllBlogPosts();
    return posts
      .filter((post) => post.published)
      .map((post) => ({
        slug: post.slug || post.id,
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const awaitedParams = await params;
    const posts = await getAllBlogPosts();
    const slug = awaitedParams.slug;
    const post = posts.find(
      (post) => post.published && (post.slug === slug || post.id === slug)
    );

    if (!post) {
      return {
        title: "Artículo no encontrado",
        description: "El artículo que buscas no existe o ha sido eliminado.",
      };
    }

    return {
      title: post.seoTitle || post.title,
      description:
        post.metaDescription ||
        post.summary ||
        `${post.title} - Artículo por ${post.author}`,
      keywords: post.keyPhrases?.join(", ") || post.tags.join(", "),
      openGraph: {
        title: post.seoTitle || post.title,
        description:
          post.metaDescription ||
          post.summary ||
          `${post.title} - Artículo por ${post.author}`,
        images: post.coverImage ? [{ url: post.coverImage }] : [],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error",
      description: "Hubo un error al cargar este artículo",
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  return <BlogPostContent slug={resolvedParams.slug} />;
}
