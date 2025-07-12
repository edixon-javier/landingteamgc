import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/landingteamgc',
    assetPrefix: '/landingteamgc',
  } : {
    basePath: '',
    assetPrefix: '',
  }),
};

export default nextConfig;
