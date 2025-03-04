import React from "react";
import Image from "next/image";

export default function CoupangBanner() {
  return (
    <div className="my-8 text-center">
      <a
        href="https://link.coupang.com/a/3KS6f"
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer-when-downgrade"
      >
        <img
          src="https://ads-partners.coupang.com/banners/43935?subId=anteconomy&traceId=V0-301-879dd1202e5c73b2-I43935&w=728&h=90"
          alt="쿠팡 배너"
          className="mx-auto"
        />
      </a>
    </div>
  );
}
