const fs = require("fs");
const path = require("path");
const RSS = require("rss");

const EXTERNAL_DATA_URL = "https://anteconomy.co.kr";

// RSS 피드 설정
const feed = new RSS({
  title: "안트이코노미 - 글로벌 금융 시장 분석",
  description: "실시간 금융 시장 분석과 투자 전략 정보를 제공합니다.",
  feed_url: `${EXTERNAL_DATA_URL}/rss.xml`,
  site_url: EXTERNAL_DATA_URL,
  image_url: `${EXTERNAL_DATA_URL}/logo.png`,
  language: "ko-KR",
  pubDate: new Date(),
  ttl: "60",
  copyright: "© 2024 anteconomy",
  author: "anteconomy",
});

// pages 디렉토리 스캔
const PAGES_DIR = path.join(process.cwd(), "src/pages");

function getPages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const pages = entries
    .filter((entry) => {
      // 제외할 파일/디렉토리
      const excludes = [
        "_app.js",
        "_document.js",
        "api",
        "sitemap.xml.js",
        "robots.txt.js",
        "index.js",
      ];
      return !excludes.includes(entry.name);
    })
    .map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return getPages(fullPath);
      }

      // .js, .jsx, .ts, .tsx 파일만 처리
      if (!/\.(js|jsx|ts|tsx)$/.test(entry.name)) {
        return null;
      }

      // 파일 내용 읽기
      const content = fs.readFileSync(fullPath, "utf-8");

      // 메타 데이터 추출 (예: 주석에서)
      const titleMatch = content.match(/title:\s*["'](.+?)["']/);
      const descriptionMatch = content.match(/description:\s*["'](.+?)["']/);

      const url = "/" + entry.name.replace(/\.(js|jsx|ts|tsx)$/, "");

      return {
        title: titleMatch
          ? titleMatch[1]
          : entry.name.replace(/\.(js|jsx|ts|tsx)$/, ""),
        description: descriptionMatch
          ? descriptionMatch[1]
          : "금융 시장 분석과 투자 정보",
        url: url === "/index" ? "" : url,
        date: fs.statSync(fullPath).mtime,
        author: "anteconomy",
        categories: ["금융", "투자", "경제"],
      };
    })
    .filter(Boolean)
    .flat();

  return pages;
}

// 페이지 목록 가져오기
const pages = getPages(PAGES_DIR);

// 각 페이지를 RSS 피드에 추가
pages.forEach((page) => {
  feed.item({
    title: page.title,
    description: page.description,
    url: `${EXTERNAL_DATA_URL}${page.url}`,
    guid: `${EXTERNAL_DATA_URL}${page.url}`,
    date: page.date,
    author: page.author,
    categories: page.categories,
  });
});

// public 폴더가 없으면 생성
const publicPath = path.join(process.cwd(), "public");
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

// RSS 피드를 XML 파일로 저장
const xml = feed.xml({ indent: true });
fs.writeFileSync(path.join(publicPath, "rss.xml"), xml);
console.log("RSS feed generated!");
