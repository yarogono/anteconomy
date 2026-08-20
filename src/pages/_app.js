import "../styles/globals.css";
import AdsenseScript from "../components/AdsenseScript";
import SeoDefaults from "../components/SeoDefaults";
import TrustFooter from "../components/TrustFooter";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SeoDefaults />
      <AdsenseScript />
      <Component {...pageProps} />
      <TrustFooter />
    </>
  );
}

export default MyApp;
