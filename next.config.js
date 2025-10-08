const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'], // .mdx 확장자 추가
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "antblog-images-bucket.s3.ap-northeast-2.amazonaws.com",
      },
    ],
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

module.exports = withMDX(nextConfig);