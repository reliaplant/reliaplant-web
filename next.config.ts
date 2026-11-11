import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Configuración de imágenes del archivo JS
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,

  // Configuración para Firebase Hosting con renderizado dinámico
  output: "standalone",

  webpack: (config) => {
    config.ignoreWarnings = [{ message: /moment-locales/ }];
    return config;
  },

  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  async redirects() {
    return [
      {
        source: "/pricing/compare",
        destination: "/pricing",
        permanent: true,
      },
      // Páginas de módulo viejas → páginas de producto nuevas (conservan el SEO ganado).
      { source: "/modulos/registro-activos", destination: "/producto/taxonomia", permanent: true },
      { source: "/modulos/rcm", destination: "/producto/rcm", permanent: true },
      { source: "/modulos/rca", destination: "/producto/rca", permanent: true },
      { source: "/consultoria/registro-activos", destination: "/servicios/levantamiento-de-activos", permanent: true },
    ];
  },

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
