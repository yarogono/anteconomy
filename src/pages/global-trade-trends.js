import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const tradeData = {
    marketOverview: {
      globalTrade: {
        volume: "$25조",
        growth: "+4.2%",
      },
      majorRegions: {
        asia: "45%",
        europe: "25%",
        northAmerica: "20%",
        others: "10%",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "글로벌무역분석팀",
    category: "무역동향",
  };

  return {
    props: {
      tradeData,
    },
  };
}

export default function GlobalTradeTrends({ tradeData }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          글로벌 무역 트렌드 - 국제 무역 동향과 투자 전략 | 안트이코노미
        </title>
        <meta
          name="description"
          content="글로벌 무역 환경의 변화와 주요 트렌드를 분석합니다. 무역 정책, 공급망 재편, 디지털 무역 등 핵심 이슈를 살펴보고 대응 전략을 제시합니다."
        />
        <meta
          name="keywords"
          content="글로벌 무역, 국제 무역, 무역 동향, 무역 정책, 공급망, 디지털 무역, 무역 전망, 무역 투자"
        />
        <meta name="author" content="글로벌무역분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="글로벌 무역 트렌드 - 국제 무역 동향과 투자 전략 | 안트이코노미"
        />
        <meta
          property="og:description"
          content="글로벌 무역 환경의 변화와 주요 트렌드를 분석합니다. 무역 정책, 공급망 재편, 디지털 무역 등 핵심 이슈를 살펴보고 대응 전략을 제시합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/trade-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/global-trade-trends"
        />
        <meta property="og:site_name" content="글로벌 무역 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="글로벌 무역 트렌드" />
        <meta
          name="twitter:description"
          content="글로벌 무역 환경의 변화와 주요 트렌드를 분석합니다. 무역 정책, 공급망 재편, 디지털 무역 등 핵심 이슈를 살펴보고 대응 전략을 제시합니다."
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/trade-2024.jpg"
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/global-trade-trends"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            글로벌 무역 트렌드: 변화하는 국제 무역의 새로운 패러다임
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 글로벌 무역 환경 변화
            </h2>
            <p className="mb-6">
              글로벌 무역 환경은 지정학적 긴장, 기술 혁신, 환경 문제 등 다양한
              요인의 영향으로 급격한 변화를 겪고 있습니다. 이러한 변화는 새로운
              무역 질서와 기회를 창출하고 있습니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 변화 요인
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>지정학적 갈등과 보호무역</li>
              <li>디지털 전환과 전자상거래</li>
              <li>친환경 무역 규제</li>
              <li>공급망 재편</li>
              <li>무역 협정 변화</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 핵심 무역 트렌드
            </h2>
            <p className="mb-6">
              글로벌 무역의 주요 트렌드를 이해하고 대응하는 것이 중요합니다. 각
              트렌드는 기업과 투자자들에게 새로운 도전과 기회를 제시합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              디지털 무역
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>전자상거래 성장</li>
              <li>디지털 플랫폼 확대</li>
              <li>데이터 무역 증가</li>
              <li>디지털 결제 혁신</li>
              <li>사이버 보안 중요성</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              지속가능 무역
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>탄소국경조정제도</li>
              <li>순환경제 무역</li>
              <li>ESG 기준 강화</li>
              <li>친환경 물류</li>
              <li>공정무역 확대</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 지역별 무역 동향
            </h2>
            <p className="mb-6">
              각 지역의 무역 환경과 정책 변화를 파악하여 효과적인 무역 전략을
              수립해야 합니다. 지역별 특성과 기회 요인을 분석하는 것이
              중요합니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                주요 지역 분석
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>북미: USMCA 영향과 통상정책</li>
                <li>유럽: EU 그린딜과 디지털 전환</li>
                <li>아시아: RCEP과 공급망 재편</li>
                <li>신흥국: 무역 다변화 전략</li>
                <li>아프리카: AfCFTA 진전</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 무역 리스크 관리
            </h2>
            <p className="mb-6">
              글로벌 무역에는 다양한 리스크가 존재합니다. 이러한 리스크를
              효과적으로 관리하는 것이 성공적인 무역 활동의 핵심입니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 리스크
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>무역 분쟁 리스크</li>
              <li>환율 변동성</li>
              <li>공급망 중단</li>
              <li>규제 변화</li>
              <li>지정학적 리스크</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 무역 전략 수립
            </h2>
            <p className="mb-6">
              변화하는 무역 환경에 대응하기 위해서는 체계적인 전략 수립이
              필요합니다. 기업과 투자자들은 새로운 기회를 포착하고 리스크를
              관리해야 합니다.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                결론: 무역의 미래
              </h2>
              <p className="mb-4">
                글로벌 무역은 디지털화, 지속가능성, 지역화 등 다양한 변화를 겪고
                있습니다. 이러한 변화는 새로운 무역 패러다임을 형성하고 있으며,
                이에 대한 적절한 대응이 필요합니다.
              </p>
              <p>
                성공적인 무역 활동을 위해서는 변화하는 환경을 지속적으로
                모니터링하고, 유연한 전략을 수립하여 대응해야 합니다. 장기적
                관점에서 경쟁력을 강화하고 지속가능한 성장을 추구하는 것이
                중요합니다.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
