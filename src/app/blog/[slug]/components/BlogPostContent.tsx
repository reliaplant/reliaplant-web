"use client";

import { BlogPost, BlogContributor } from "@/types/blog";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getContributor } from "@/lib/firebase/blog/contributor";
import { getAllBlogPosts } from "@/lib/firebase/blog/blog";

interface BlogPostContentProps {
  slug: string;
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [contributor, setContributor] = useState<BlogContributor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        if (!isMounted) return;
        setLoading(true);

        // Fetch post data
        const posts = await getAllBlogPosts();
        const foundPost = posts.find(
          (post) => post.published && (post.slug === slug || post.id === slug)
        );

        if (!foundPost) {
          throw new Error("Post not found");
        }

        if (isMounted) {
          setPost(foundPost);
        }

        // Get contributor data if available
        if (foundPost.contributorId) {
          try {
            const contributorData = await getContributor(
              foundPost.contributorId
            );
            if (isMounted && contributorData) {
              setContributor(contributorData);
            }
          } catch (contributorError) {
            console.error("Error fetching contributor:", contributorError);
          }
        }
      } catch (err) {
        if (!isMounted) return;
        setError(err instanceof Error ? err : new Error("An error occurred"));
        console.error("Error rendering blog post page:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    } catch (e) {
      console.error("Date formatting error:", e);
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 w-1/4 mb-4"></div>
          <div className="h-12 bg-gray-200 w-3/4 mb-6"></div>
          <div className="h-64 bg-gray-200 w-full mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 w-full"></div>
            <div className="h-4 bg-gray-200 w-full"></div>
            <div className="h-4 bg-gray-200 w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, el artículo que buscas no existe o ha sido eliminado.
        </p>
        <Link
          href="/blog"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Volver al blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-indigo-600 mb-6 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al blog
        </Link>

        {/* Article header */}
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          {/* Author and date */}
          <div className="flex items-center mb-6">
            {contributor?.photo ? (
              <img
                src={contributor.photo}
                alt={post.author}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  {post.author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-gray-500 text-sm">
                {formatDate(post.publishDate)}
              </p>
            </div>
          </div>

          {/* Cover image */}
          {post.coverImage && (
            <div className="mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto rounded-lg max-h-[500px] object-cover"
              />
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none tiptap-content mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author bio */}
          {contributor && contributor.bio && (
            <div className="bg-gray-50 p-6 rounded-lg mt-12">
              <div className="flex items-start">
                {contributor.photo && (
                  <img
                    src={contributor.photo}
                    alt={contributor.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Sobre {contributor.name}
                  </h3>
                  <p className="text-gray-700">{contributor.bio}</p>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
