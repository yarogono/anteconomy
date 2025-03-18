import "../styles/globals.css";
import AdsenseScript from "../components/AdsenseScript";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AdsenseScript />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
