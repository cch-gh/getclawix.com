import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/getclawix.com" : "/v2",
  assetPrefix: isProd ? "/getclawix.com" : "/v2",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
