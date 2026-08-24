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
      <SeoDefaults />
      <Component {...pageProps} />
      <TrustFooter />
    </>
  );
}

export default MyApp;
