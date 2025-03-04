import Image from "next/image";

const CoupangBanner = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <a
        href="https://link.coupang.com/a/chs3IA"
        target="_blank"
        referrerpolicy="unsafe-url"
        className="block w-full"
      >
        <img
          src="https://ads-partners.coupang.com/banners/43935?subId=&traceId=V0-301-879dd1202e5c73b2-I43935&w=728&h=90"
          alt="쿠팡 파트너스 배너"
          className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </a>
    </div>
  );
};

export default CoupangBanner;
