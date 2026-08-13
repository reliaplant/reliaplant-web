import { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/firebase/blog/blog";

export const revalidate = 3600; // Regenerar el sitemap cada hora

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.HOST_URL || "https://reliaplant.com";

  // Rutas principales
  const mainRoutes = ["/", "/about", "/blog", "/como-funciona", "/roi", "/industrias"].map(
    (route): MetadataRoute.Sitemap[0] => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    })
  );

  // Rutas de módulos / producto
  const moduloRoutes = [
    "/modulos/rca",
    "/modulos/rcm",
    "/modulos/registro-activos",
    "/pricing",
  ].map(
    (route): MetadataRoute.Sitemap[0] => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  // Rutas de consultoría
  const consultoriaRoutes = [
    "/consultoria",
    "/consultoria/registro-activos",
    "/consultoria/sistema-indicadores",
    "/consultoria/diagnostico-gestion",
    "/consultoria/estrategia-gestion-activos",
    "/consultoria/manuales-corporativos",
    "/consultoria/analisis-ram",
    "/consultoria/analisis-lcc",
    "/consultoria/analisis-obsolescencia",
    "/consultoria/asesoria-continua",
    "/consultoria/capacitacion",
    "/consultoria/mantenibilidad",
    "/consultoria/matriz-responsabilidades",
    "/consultoria/optimizacion-mro",
    "/consultoria/rcm",
    "/consultoria/rca",
  ].map((route): MetadataRoute.Sitemap[0] => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Rutas de artículos/posts desde Firebase
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPublishedBlogPosts();
    blogRoutes = posts
      .filter((post) => post.slug || post.id)
      .map((post) => ({
        url: `${baseUrl}/blog/${post.slug || post.id}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  // Rutas legales
  const legalRoutes = ["/terminos-de-uso", "/legal/privacidad", "/legal/cookies"].map(
    (route): MetadataRoute.Sitemap[0] => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    })
  );

  // Combinamos todas las rutas
  return [...mainRoutes, ...moduloRoutes, ...consultoriaRoutes, ...blogRoutes, ...legalRoutes];
}
