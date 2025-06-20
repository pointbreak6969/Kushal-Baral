import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com', // or use your specific bucket domain
      },
    ],
  },
};

export default nextConfig;
