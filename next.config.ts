import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.istockphoto.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
