/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // rss.xml 생성
      require("./scripts/generate-rss");
    }
    return config;
  },
};

module.exports = nextConfig;
