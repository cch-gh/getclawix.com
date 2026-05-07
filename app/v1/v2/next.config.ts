import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/getclawix.com",
  assetPrefix: "/getclawix.com",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
