/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static exports
  output: "export",
  // Configure static generation
  experimental: {
    // Enable static generation of API routes
    staticPageGenerationTimeout: 1000,
  },
};

module.exports = nextConfig;
