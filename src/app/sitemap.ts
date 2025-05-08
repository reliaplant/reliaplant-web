import { MetadataRoute } from "next";

// Esta línea es necesaria para exportación estática
export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.HOST_URL || "https://reliaplant.com";

  // Rutas principales
  const mainRoutes = ["/", "/nosotros", "/contacto", "/blog"].map(
    (route): MetadataRoute.Sitemap[0] => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
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

  // Rutas de artículos/posts
  const articleRoutes = [
    "/posts/1-pasos-hacer-analisis-causa-raiz",
    "/posts/2-fundamentos-analisis-causa-raiz",
    "/posts/3-ejemplo-porques-mantenimiento",
    "/posts/4-elaboracion-catalogo-fallas-industria",
    "/posts/5-norma-bs-en-62740",
    "/posts/7-glosario-abreviaciones-rca",
    "/posts/8-iso-55000-analisis-causa-raiz",
  ].map((route): MetadataRoute.Sitemap[0] => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Combinamos todas las rutas
  return [...mainRoutes, ...consultoriaRoutes, ...articleRoutes];
}
