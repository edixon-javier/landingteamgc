import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/landingteamgc' : '';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
    path: `${basePath}/_next/image`,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
  // Configuración para GitHub Pages
  basePath: basePath,
  assetPrefix: isProd ? `${basePath}/` : '',
  // Asegurar que las URLs terminen con barra para mejor compatibilidad
  trailingSlash: true,
  // Configuración para mejorar el rendimiento y optimización
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  // Configuración adicional para manejo de assets
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: `${basePath}/_next`,
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
