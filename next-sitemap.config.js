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
  additionalPaths: async (config) => [
    await config.transform(config, "/겜스고-할인-코드-쿠폰-gamsgo-프로모션"),
    await config.transform(config, "/유튜브-프리미엄-겜스고-70-할인-코드-싸게-구독-결제-쿠폰"),
    await config.transform(config, "/겜스고-할인-코드-적용-안됨"),
    await config.transform(config, "/넷플릭스-겜스고-할인-코드"),
    await config.transform(config, "/넷플릭스-요금제-할인-가격-겜스고-쿠폰-코드"),
  ],
  // Non-finance experiments are excluded until they have complete SEO metadata.
  exclude: ["/api/*", "/drama/*", "/gamsgo-discount-code", "/youtube-premium-gamsgo-discount"],
  // ...other options
};
