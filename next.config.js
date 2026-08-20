const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"], // .mdx 확장자 추가
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "antblog-images-bucket.s3.ap-northeast-2.amazonaws.com",
      },
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Keep legacy social/RSS image URLs working while all pages migrate to the shared asset.
      { source: "/og-image.jpg", destination: "/og-image.svg" },
      { source: "/logo.png", destination: "/og-image.svg" },
      { source: "/images/:path*.jpg", destination: "/og-image.svg" },
    ];
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
