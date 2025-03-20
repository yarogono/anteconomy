import { useEffect, useState } from "react";

export default function AdsenseAd({ slot }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 광고가 로드되면 상태 업데이트
    const handleAdLoad = () => {
      const adElement = document.querySelector(`ins[data-ad-slot="${slot}"]`);
      if (adElement) {
        const status = adElement.getAttribute("data-ad-status");
        if (status === "filled") {
          setIsLoaded(true);
        } else {
          // 광고가 로드되지 않은 경우 요소 제거
          adElement.style.display = "none";
        }
      }
    };

    // 광고 로드 이벤트 리스너 추가
    window.addEventListener("load", handleAdLoad);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("load", handleAdLoad);
    };
  }, [slot]);

  return (
    <div
      className="ad-container"
      style={{ minHeight: isLoaded ? "auto" : "0" }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1811427742724427"
        data-ad-slot={slot || "8256529460"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
