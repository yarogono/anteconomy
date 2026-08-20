import { useEffect, useRef, useState } from "react";

export default function AdsenseAd({ slot }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const adSlot = slot || "8256529460";
  const adRef = useRef(null);

  useEffect(() => {
    const adElement = adRef.current;
    if (!adElement) return undefined;

    const initializeAd = () => {
      if (!window.adsbygoogle || adElement.dataset.adsbygoogleInitialized) {
        return;
      }

      // data-ad-status가 있으면 AdSense가 이미 이 슬롯을 처리한 상태입니다.
      if (adElement.getAttribute("data-ad-status")) return;

      adElement.dataset.adsbygoogleInitialized = "true";
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense slot initialization error:", error);
      }
    };

    const handleAdLoad = () => {
      const status = adElement.getAttribute("data-ad-status");
      if (status === "filled") {
        setIsLoaded(true);
      } else if (status === "unfilled") {
        adElement.style.display = "none";
      }
    };

    // 외부 AdSense 스크립트가 먼저 로드되거나 늦게 로드되는 경우를 모두 처리합니다.
    initializeAd();
    window.addEventListener("load", initializeAd);
    window.addEventListener("load", handleAdLoad);
    const retryTimer = window.setTimeout(initializeAd, 800);

    return () => {
      window.clearTimeout(retryTimer);
      window.removeEventListener("load", initializeAd);
      window.removeEventListener("load", handleAdLoad);
    };
  }, [adSlot]);

  return (
    <div className="ad-container mx-auto flex w-full justify-center px-4 py-4" style={{ minHeight: isLoaded ? "auto" : "0" }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block", width: "100%", maxWidth: "728px", minHeight: isLoaded ? undefined : "90px" }}
        data-ad-client="ca-pub-1811427742724427"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
