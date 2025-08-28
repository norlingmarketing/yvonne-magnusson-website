import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'sv'],
    defaultLocale: 'sv',
    localeDetection: true,
  },
};

export default nextConfig;
