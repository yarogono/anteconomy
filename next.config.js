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
      { source: "/%EA%B2%9C%EC%8A%A4%EA%B3%A0-%ED%95%A0%EC%9D%B8-%EC%BD%94%EB%93%9C-%EC%BF%A0%ED%8F%B0-gamsgo-%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98", destination: "/gamsgo-discount-code" },
      { source: "/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EA%B2%9C%EC%8A%A4%EA%B3%A0-70-%ED%95%A0%EC%9D%B8-%EC%BD%94%EB%93%9C-%EC%8B%B8%EA%B2%8C-%EA%B5%AC%EB%8F%85-%EA%B2%B0%EC%A0%9C-%EC%BF%A0%ED%8F%B0", destination: "/youtube-premium-gamsgo-discount" },
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
