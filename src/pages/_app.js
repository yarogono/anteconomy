import "../styles/globals.css";
import SeoDefaults from "../components/SeoDefaults";
import TrustFooter from "../components/TrustFooter";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SeoDefaults />
      <Component {...pageProps} />
      <TrustFooter />
    </>
  );
}

export default MyApp;
