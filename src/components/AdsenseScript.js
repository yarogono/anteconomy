import Script from "next/script";

export default function AdsenseScript() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1811427742724427"
      crossOrigin="anonymous"
    />
  );
}
