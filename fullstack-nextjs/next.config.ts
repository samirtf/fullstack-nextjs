import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "64.media.tumblr.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static0.colliderimages.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "movies948.wordpress.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "variety.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static0.srcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
