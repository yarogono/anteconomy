import Head from "next/head";
import { useRouter } from "next/router";

const SITE_URL = "https://anteconomy.co.kr";
const SITE_NAME = "안트이코노미";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;
const PAGES_WITHOUT_LOCAL_CANONICAL = new Set([
  "/after-tax-calculator",
  "/annual-leave-calculator",
  "/annual-salary-calculator",
  "/annual-salary-table",
  "/date-calculator",
  "/deposit-calculator",
  "/exchange-rate",
  "/gold-price",
  "/layoff-allowance-calculator",
  "/leave-allowance-calculator",
  "/loan-interest-calculator",
  "/parental-leave-calculator",
  "/percent-calculator",
  "/prepayment-calculator",
  "/salary-table-2025",
  "/savings-calculator",
  "/severance-calculator",
  "/unemployment-calculator",
]);

export default function SeoDefaults() {
  const router = useRouter();
  const pathname = router.asPath.split("?")[0].split("#")[0] || "/";
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const isCalculator = canonicalPath.includes("calculator");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: DEFAULT_IMAGE },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "ko-KR",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      ...(isCalculator
        ? [
            {
              "@type": "WebApplication",
              "@id": `${canonicalUrl}#application`,
              name: "온라인 금융 계산기",
              url: canonicalUrl,
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web Browser",
              isAccessibleForFree: true,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: SITE_URL,
          },
          ...(canonicalPath !== "/"
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "계산기 및 금융 정보",
                  item: canonicalUrl,
                },
              ]
            : []),
        ],
      },
    ],
  };

  return (
    <Head>
      <meta name="theme-color" content="#14532d" />
      <meta name="format-detection" content="telephone=no" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:alt" content={`${SITE_NAME} 금융 계산기`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      {PAGES_WITHOUT_LOCAL_CANONICAL.has(router.pathname) && (
        <link rel="canonical" href={canonicalUrl} />
      )}
      <link rel="alternate" type="application/rss+xml" title={`${SITE_NAME} RSS`} href={`${SITE_URL}/rss.xml`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
