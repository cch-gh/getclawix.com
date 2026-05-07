import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/getclawix.com/v1",
  assetPrefix: "/getclawix.com/v1",
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
