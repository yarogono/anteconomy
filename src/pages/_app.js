import "../styles/globals.css";
import SeoDefaults from "../components/SeoDefaults";
import TrustFooter from "../components/TrustFooter";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-MFS6DMRF45" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MFS6DMRF45');`}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5633731930294890"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <SeoDefaults />
      <Component {...pageProps} />
      <TrustFooter />
    </>
  );
}

export default MyApp;
