import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/**",
      },
      {
        protocol: "https",
        hostname: "w7.pngwing.com",
        port: "",
        pathname: "/pngs/**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
