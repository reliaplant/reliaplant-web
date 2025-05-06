import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Exportación estática para el despliegue
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
};

export default nextConfig;
