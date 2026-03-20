import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.iuemag.com',
      },
      {
        protocol: 'https',
        hostname: 'gegok12.com',
      },
      {
        protocol: 'https',
        hostname: 'www.revechat.com',
      },
      {
        protocol: 'https',
        hostname: 'www.britannica.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.cubed.run',
      },
    ],
  },
};

export default nextConfig;
