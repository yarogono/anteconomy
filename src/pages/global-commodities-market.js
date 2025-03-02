import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const commoditiesData = {
    marketOverview: {
      energyPrices: {
        oil: "$80/배럴",
        naturalGas: "$3.5/MMBtu",
      },
      metals: {
        gold: "$2,000/온스",
        copper: "$8,500/톤",
      },
      agriculture: {
        wheat: "$6.5/부셸",
        corn: "$4.8/부셸",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "원자재시장분석팀",
    category: "시장분석",
  };

  return {
    props: {
      commoditiesData,
    },
  };
}

export default function GlobalCommoditiesMarket({ commoditiesData }) {
  return (
    <>
      <Head>
        <title>
          글로벌 원자재 시장 - 국제 상품 시장 동향과 투자 전략 | 안트이코노미
        </title>
        <meta
          name="description"
          content="에너지, 금속, 농산물 등 주요 원자재 시장의 동향과 투자 기회를 분석합니다. 글로벌 공급망 변화와 지정학적 요인이 원자재 시장에 미치는 영향을 심층적으로 살펴봅니다."
        />
        <meta
          name="keywords"
          content="원자재 시장, 상품 시장, 에너지 시장, 귀금속, 산업용 금속, 농산물, 원자재 투자, 상품 선물"
        />
        <meta
          property="og:title"
          content="글로벌 원자재 시장 - 국제 상품 시장 동향과 투자 전략 | 안트이코노미"
        />
        <meta
          property="og:description"
          content="에너지, 금속, 농산물 등 주요 원자재 시장의 동향과 투자 기회를 분석합니다. 글로벌 공급망 변화와 지정학적 요인이 원자재 시장에 미치는 영향을 심층적으로 살펴봅니다."
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/global-commodities-market"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            글로벌 원자재 시장: 국제 상품 시장의 동향과 전망
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 원자재 시장 개요
            </h2>
            <p className="mb-6">
              글로벌 원자재 시장은 세계 경제의 기초를 형성하는 핵심 시장입니다.
              에너지, 금속, 농산물 등 다양한 상품들의 수급 동향과 가격 변동은
              글로벌 경제 전반에 중요한 영향을 미치고 있습니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 원자재 분류
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>에너지: 원유, 천연가스, 석탄</li>
              <li>귀금속: 금, 은, 백금</li>
              <li>산업용 금속: 구리, 알루미늄, 철광석</li>
              <li>농산물: 곡물, 연질상품, 축산물</li>
              <li>신소재: 리튬, 코발트, 희토류</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 시장 동향 분석
            </h2>
            <p className="mb-6">
              원자재 시장은 글로벌 경제 상황, 지정학적 요인, 기후 변화, 기술
              혁신 등 다양한 요인의 영향을 받습니다. 각 부문별 수급 상황과 가격
              동향을 면밀히 분석하는 것이 중요합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 시장 동향
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>에너지 전환과 신재생 에너지 수요 증가</li>
              <li>글로벌 공급망 재편과 원자재 수급 변화</li>
              <li>기후변화와 농산물 생산 영향</li>
              <li>신기술 발전과 신소재 수요</li>
              <li>지정학적 리스크와 공급 안정성</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 부문별 시장 분석
            </h2>
            <p className="mb-6">
              각 원자재 부문은 고유한 시장 특성과 가격 결정 요인을 가지고
              있습니다. 부문별 심층 분석을 통해 투자 기회와 리스크를 파악할 수
              있습니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              부문별 특성
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>에너지: 계절성, 지정학적 요인</li>
              <li>귀금속: 안전자산 특성, 산업 수요</li>
              <li>산업금속: 경기 민감도, 재고 수준</li>
              <li>농산물: 기후 영향, 수확 주기</li>
              <li>신소재: 기술 발전, 공급 제약</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 투자 전략
            </h2>
            <p className="mb-6">
              원자재 투자는 포트폴리오 다각화와 인플레이션 헤지 수단으로서
              중요한 역할을 합니다. 다양한 투자 방법과 전략을 활용하여 효과적인
              투자를 실행할 수 있습니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              투자 접근 방법
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>직접 투자: 현물, 선물 계약</li>
              <li>간접 투자: ETF, 뮤추얼 펀드</li>
              <li>관련 기업 투자: 생산, 가공, 유통 기업</li>
              <li>구조화 상품: ETP, 인덱스 상품</li>
              <li>헤지 전략: 스프레드 거래, 옵션 활용</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 리스크 관리
            </h2>
            <p className="mb-6">
              원자재 투자에는 다양한 리스크가 수반됩니다. 효과적인 리스크 관리를
              통해 안정적인 투자 성과를 달성할 수 있습니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                주요 리스크 요인
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>가격 변동성 리스크</li>
                <li>지정학적 리스크</li>
                <li>기후 리스크</li>
                <li>유동성 리스크</li>
                <li>규제 리스크</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                결론: 원자재 시장의 미래
              </h2>
              <p className="mb-4">
                글로벌 원자재 시장은 에너지 전환, 기술 혁신, 기후 변화 등의
                영향으로 큰 변화를 겪고 있습니다. 이러한 변화는 새로운 투자
                기회를 창출하는 동시에 리스크 요인으로 작용할 수 있습니다.
              </p>
              <p>
                성공적인 원자재 투자를 위해서는 시장 동향에 대한 깊은 이해와
                체계적인 리스크 관리가 필수적입니다. 장기적 관점에서 시장 변화를
                분석하고 적절한 투자 전략을 수립하는 것이 중요합니다.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
