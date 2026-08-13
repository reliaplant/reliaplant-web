import { BlogPost, BlogContributor } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import AbrirFormContacto from "@/components/AbrirFormContacto";
import { Headset } from "@carbon/icons-react";
import { processContentHeadings, styleCallouts, estimateReadingTime } from "@/lib/utils/blogContent";
import BlogToc from "./BlogToc";

interface BlogPostContentProps {
  post: BlogPost;
  contributor: BlogContributor | null;
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch (e) {
    return dateString;
  }
}

export default function BlogPostContent({ post, contributor }: BlogPostContentProps) {
  const { html: htmlWithIds, toc } = processContentHeadings(post.content);
  const processedContent = styleCallouts(htmlWithIds);
  const readingTime = estimateReadingTime(post.content);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto flex gap-10 xl:gap-14 justify-center">
      <div className="w-full max-w-4xl">

        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-6 text-sm transition-colors"
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

        {/* Paper sheet */}
        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300/70 overflow-hidden">

          {/* Cover image */}
          {post.coverImage && (
            <div className="relative w-full h-[300px] md:h-[420px]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          <article className="px-8 md:px-14 py-10">

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author and date */}
            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-gray-100">
              {contributor?.photo ? (
                <Image
                  src={contributor.photo}
                  alt={post.author}
                  width={44}
                  height={44}
                  className="rounded-full object-cover ring-2 ring-gray-100"
                />
              ) : (
                <div className="w-11 h-11 bg-indigo-100 rounded-full flex items-center justify-center ring-2 ring-gray-100">
                  <span className="text-indigo-600 font-semibold">
                    {post.author.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                <p className="text-gray-400 text-xs">
                  {formatDate(post.publishDate)} · {readingTime} min de lectura
                </p>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg prose-gray max-w-none tiptap-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* Author bio */}
            {contributor && contributor.bio && (
              <div className="mt-14 pt-8 border-t border-gray-100">
                <div className="flex items-start gap-4">
                  {contributor.photo && (
                    <Image
                      src={contributor.photo}
                      alt={contributor.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover ring-2 ring-gray-100 flex-shrink-0"
                    />
                  )}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Sobre el autor</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {contributor.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{contributor.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl shadow-gray-300/50 px-8 py-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ¿Quieres llevar esto a tu planta?
          </h3>
          <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            Habla con un especialista de Reliaplant sobre cómo aplicar esto en tu operación.
          </p>
          <div className="flex justify-center">
            <AbrirFormContacto
              buttonText="Habla con un especialista"
              icon={<Headset size={20} className="text-white" />}
              variant="primary"
              especial={`Blog post: ${post.title}`}
            />
          </div>
        </div>

        {/* Bottom back link */}
        <div className="mt-8 mb-4 text-center">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Ver todos los artículos
          </Link>
        </div>

      </div>

      <BlogToc toc={toc} />
      </div>
    </div>
  );
}
