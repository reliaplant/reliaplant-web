import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.HOST_URL || 'https://reliaplant.com';

  // Rutas de consultoría
  const consultoriaRoutes = [
    '/consultoria',
    '/consultoria/registro-activos',
    '/consultoria/sistema-indicadores',
    '/consultoria/diagnostico-gestion',
    '/consultoria/estrategia-gestion-activos',
    '/consultoria/manuales-corporativos',
    '/consultoria/analisis-ram',
    '/consultoria/analisis-lcc',
    '/consultoria/analisis-obsolescencia',
    '/consultoria/asesoria-continua',
    '/consultoria/capacitacion',
    '/consultoria/mantenibilidad',
    '/consultoria/matriz-responsabilidades',
    '/consultoria/optimizacion-mro',

    '/consultoria/rcm',
    '/consultoria/rca',
  ];

  const consultoriaEntries = consultoriaRoutes.map((route): MetadataRoute.Sitemap[0] => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return consultoriaEntries;
}