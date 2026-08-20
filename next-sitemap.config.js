/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://anteconomy.co.kr",
  // robots.txt is served by src/pages/robots.txt.js so there is one source of truth.
  generateRobotsTxt: false,
  autoLastmod: true,
  generateIndexSitemap: false,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  // Non-finance experiments are excluded until they have complete SEO metadata.
  exclude: ["/api/*", "/drama/*"],
  // ...other options
};
