const fs = require("fs");
const path = require("path");

const EXTERNAL_DATA_URL = "https://anteconomy.co.kr";

const pages = [
  "",
  "/stock-investment-guide",
  "/real-estate-analysis",
  "/crypto-market-outlook",
  "/esg-investment-strategies",
  "/global-commodities-market",
  "/retirement-pension-management",
  "/global-financial-policies",
  "/tech-company-analysis",
  "/emerging-markets-strategy",
  "/bond-investment-guide",
  "/global-trade-trends",
  "/alternative-investment-strategies",
  "/financial-risk-management",
  "/global-industry-outlook",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const url = `${EXTERNAL_DATA_URL}${page}`;
      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>
  `;
    })
    .join("")}
</urlset>`;

// public 폴더가 없으면 생성
const publicPath = path.join(process.cwd(), "public");
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

// sitemap.xml 파일 생성
fs.writeFileSync(path.join(publicPath, "sitemap.xml"), sitemap);
console.log("Sitemap generated!");
