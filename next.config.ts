import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },

  images: {
    domains: [
      "sahyadale.com",
      "amwoodo.com",
      "silpakarman.com",
      "bamboobootcamp.org",
      "cdn.shopify.com",
      "lh3.googleusercontent.com",
      "www.kulturafilipino.com",
      "meticulousbplans.com",
    ],
  },
};

export default nextConfig;
