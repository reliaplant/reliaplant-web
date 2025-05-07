import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Cambiamos de "export" a una build dinámica (eliminando la línea output)

  // Ignoramos las rutas problemáticas en la exportación estática
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,

  // Excluir rutas del build estático
  distDir: process.env.NODE_ENV === "production" ? ".next" : ".next-dev",

  // Configurar paths excluidos
  webpack: (config) => {
    // Excluir locales de moment.js
    config.ignoreWarnings = [{ message: /moment-locales/ }];
    return config;
  },

  // Ignorar errores específicos durante la exportación
  onDemandEntries: {
    // Período en ms donde las páginas se mantienen en el buffer
    maxInactiveAge: 25 * 1000,
    // Número de páginas que se mantienen en memoria
    pagesBufferLength: 2,
  },

  // Configuración de headers de seguridad
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
