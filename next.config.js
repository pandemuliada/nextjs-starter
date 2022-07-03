/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
  },
  // Add your image storage here when using next/image
  images: {
    domains: ["your.external-image-storage.com"],
  },
};

module.exports = nextConfig;
