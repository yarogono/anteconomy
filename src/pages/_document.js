import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="google-adsense-account" content="ca-pub-1811427742724427" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9KJ9PH17QW"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9KJ9PH17QW');
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
