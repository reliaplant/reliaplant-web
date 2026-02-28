import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllBlogPosts } from "@/lib/firebase/blog/blog";
import { getContributor } from "@/lib/firebase/blog/contributor";
import BlogPostContent from "./components/BlogPostContent";

const BASE_URL = process.env.HOST_URL || "https://reliaplant.com";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const posts = await getAllBlogPosts();
    const post = posts.find(
      (p) => p.published && (p.slug === slug || p.id === slug)
    );

    if (!post) {
      return {
        title: "Artículo no encontrado",
        description: "El artículo que buscas no existe o ha sido eliminado.",
      };
    }

    const description =
      post.metaDescription ||
      post.summary ||
      `${post.title} - Artículo por ${post.author}`;
    const canonicalSlug = post.slug || post.id;

    return {
      title: post.seoTitle || post.title,
      description,
      keywords: post.keyPhrases?.join(", ") || post.tags.join(", "),
      alternates: {
        canonical: `${BASE_URL}/blog/${canonicalSlug}`,
      },
      openGraph: {
        title: post.seoTitle || post.title,
        description,
        type: "article",
        publishedTime: post.publishDate,
        modifiedTime: post.updatedAt || post.publishDate,
        authors: [post.author],
        images: post.coverImage
          ? [{ url: post.coverImage, alt: post.title }]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.seoTitle || post.title,
        description,
        images: post.coverImage ? [post.coverImage] : [],
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
  const { slug } = await params;
  const posts = await getAllBlogPosts();
  const post = posts.find(
    (p) => p.published && (p.slug === slug || p.id === slug)
  );

  if (!post) notFound();

  const contributor = post.contributorId
    ? await getContributor(post.contributorId).catch(() => null)
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description: post.metaDescription || post.summary || "",
    ...(post.coverImage && { image: post.coverImage }),
    datePublished: post.publishDate,
    dateModified: post.updatedAt || post.publishDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Reliaplant",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug || post.id}`,
    },
    ...(post.keyPhrases?.length && { keywords: post.keyPhrases.join(", ") }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent post={post} contributor={contributor} />
    </>
  );
}
