import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getPublishedBlogPosts } from "@/lib/firebase/blog/blog";
import { getAllContributors } from "@/lib/firebase/blog/contributor";
import { BlogPost, BlogContributor } from "@/types/blog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog de Confiabilidad Industrial | Reliaplant",
  description:
    "Artículos especializados sobre confiabilidad, RCM, RCA, gestión de activos y mantenimiento industrial en Latinoamérica.",
  alternates: {
    canonical: "https://reliaplant.com/blog",
  },
  openGraph: {
    title: "Blog de Confiabilidad Industrial | Reliaplant",
    description:
      "Artículos especializados sobre confiabilidad, RCM, RCA, gestión de activos y mantenimiento industrial.",
    type: "website",
  },
};

async function getBlogData() {
  try {
    console.log("Iniciando carga de datos del blog...");
    const posts = await getPublishedBlogPosts();
    console.log(`Posts cargados: ${posts.length}`);

    const contributors = await getAllContributors();
    console.log(`Contributors cargados: ${contributors.length}`);

    const contributorsMap = contributors.reduce((map, contributor) => {
      if (contributor?.active && contributor?.name) {
        map[contributor.name] = contributor;
      }
      return map;
    }, {} as Record<string, BlogContributor>);

    console.log(
      "Mapa de contributors creado:",
      Object.keys(contributorsMap).length
    );

    return {
      posts: posts || [],
      contributorsMap,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Error detallado al cargar datos del blog:", error);
    return {
      posts: [],
      contributorsMap: {},
      timestamp: Date.now(),
    };
  }
}

// Usamos any para resolver el problema de tipo con los parámetros
export default async function BlogPage({ params }: any) {
  try {
    const { posts, contributorsMap } = await getBlogData();

    const formatDate = (dateString: string) => {
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
    };

    return (
      <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Blog</h1>
          <p className="text-gray-500 text-lg">Artículos sobre confiabilidad, mantenimiento y gestión de activos</p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No hay publicaciones disponibles.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => {
              const contributor = contributorsMap[post.author];
              const postSlug = post.slug || post.id;
              const aboveTheFold = index < 3;

              return (
                <Link
                  href={`/blog/${postSlug}`}
                  key={post.id}
                  className="bg-white border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative h-48 w-full">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        priority={aboveTheFold}
                        loading={aboveTheFold ? undefined : "lazy"}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Sin imagen</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-semibold mb-3 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <div className="flex items-center mb-3">
                      {contributor?.photo ? (
                        <Image
                          src={contributor.photo}
                          alt={contributor.name}
                          width={32}
                          height={32}
                          loading="lazy"
                          className="mr-2 object-cover w-8 h-8"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-200 mr-2 flex items-center justify-center">
                          <span className="text-gray-500 font-medium text-xs">
                            {post.author.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">
                          {formatDate(post.publishDate)}
                        </p>
                      </div>
                    </div>

                    {post.summary && (
                      <p className="text-gray-600 mb-3 line-clamp-3">
                        {post.summary}
                      </p>
                    )}

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-gray-500 text-xs">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error rendering blog page:", error);
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Error al cargar el blog</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, ha ocurrido un error al intentar cargar el blog.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }
}
