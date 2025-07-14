import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/landingteamgc' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/landingteamgc' : '',
  trailingSlash: true,
};

export default nextConfig;
