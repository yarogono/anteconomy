import { useEffect } from "react";

export default function AdsenseInit() {
  useEffect(() => {
    try {
      // 광고가 이미 로드된 요소를 제외하고 초기화
      const ads = document.querySelectorAll(
        "ins.adsbygoogle:not([data-ad-status='filled'])"
      );
      if (ads.length > 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("AdSense initialization error:", error);
    }
  }, []);

  return null;
}
