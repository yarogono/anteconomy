/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // sitemap.xml 생성을 위한 설정
      require("./scripts/generate-sitemap");
    }
    return config;
  },
};

module.exports = nextConfig;
