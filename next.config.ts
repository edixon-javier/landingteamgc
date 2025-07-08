import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/landingteamgc',
  assetPrefix: '/landingteamgc',
};

export default nextConfig;
