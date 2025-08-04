import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/landingteamgc' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/landingteamgc/' : '',
  trailingSlash: true,
  // Redireccionar URLs con espacios a URLs con guiones
  async redirects() {
    return [
      {
        source: '/:path*/%20:slug*',
        destination: '/:path*/-:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
