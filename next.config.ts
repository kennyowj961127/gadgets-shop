import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uawisadaqaeljdumcykq.supabase.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    }
  },
  eslint: {
    dirs: [],
  },
  
};

export default nextConfig;
