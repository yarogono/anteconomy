import { useEffect } from "react";

export default function AdsenseAd({ slot }) {
  useEffect(() => {
    // 광고가 로드되면 상태 업데이트
    const handleAdLoad = () => {
      const adElement = document.querySelector(`ins[data-ad-slot="${slot}"]`);
      if (adElement) {
        adElement.setAttribute("data-ads-status", "loaded");
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
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1811427742724427"
      data-ad-slot={slot || "8256529460"}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
