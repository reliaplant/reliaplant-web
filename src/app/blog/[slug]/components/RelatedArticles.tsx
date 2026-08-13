import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

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

export default function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Artículos relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const postSlug = post.slug || post.id;
          return (
            <Link
              href={`/blog/${postSlug}`}
              key={post.id}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative h-36 w-full">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Sin imagen</span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                {post.summary && (
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">{post.summary}</p>
                )}
                <p className="text-xs text-gray-400">
                  {post.author} · {formatDate(post.publishDate)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
