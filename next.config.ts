import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración para build estático (compatible con Plesk)
  output: 'export',
  trailingSlash: true,
  
  // Configuración de imágenes para build estático
  images: {
    unoptimized: true, // Necesario para exportación estática
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Configuración de rendimiento
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Configuración de webpack optimizada
  webpack: (config, { isServer }) => {
    // Configuración para el cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Manejo de archivos multimedia
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    
    return config;
  },
};

export default nextConfig;
