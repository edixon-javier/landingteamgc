import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Configuración para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/landingteamgc' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/landingteamgc/' : '',
  // Asegurar que las URLs terminen con barra para mejor compatibilidad
  trailingSlash: true,
  // Configuración para mejorar el rendimiento y optimización
  reactStrictMode: true,
};

export default nextConfig;
