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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          2024 글로벌 원자재 시장 전망: 에너지, 금속, 농산물 시장 분석
        </title>
        <meta
          name="description"
          content="2024년 글로벌 원자재 시장의 주요 동향과 투자 기회를 분석합니다. 에너지, 귀금속, 산업용 금속, 농산물 시장의 심층 분석과 전망을 제공합니다."
        />
        <meta
          name="keywords"
          content="원자재시장, commodities, 에너지시장, 금속시장, 농산물시장, 원유, 금, 구리, 곡물"
        />
        <meta name="author" content="원자재시장분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 글로벌 원자재 시장 전망: 에너지, 금속, 농산물 시장 분석"
        />
        <meta
          property="og:description"
          content="2024년 글로벌 원자재 시장의 주요 동향과 투자 기회를 분석합니다. 에너지, 귀금속, 산업용 금속, 농산물 시장의 심층 분석과 전망을 제공합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/commodities-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/global-commodities-market"
        />
        <meta property="og:site_name" content="글로벌 원자재 시장 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 글로벌 원자재 시장 전망" />
        <meta
          name="twitter:description"
          content="2024년 글로벌 원자재 시장 동향과 전망 분석"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/commodities-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 글로벌 원자재 시장 전망
            </h1>
            <p className="text-lg text-gray-600">
              에너지, 금속, 농산물 시장의 종합 분석
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 글로벌 원자재 시장 개관
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 글로벌 원자재 시장은 지정학적 리스크, 기후변화, 에너지
                전환 정책의 영향으로 변동성이 확대될 전망입니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 시장 동향
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>에너지 전환 가속화</li>
                <li>공급망 재편</li>
                <li>인플레이션 영향</li>
                <li>지정학적 리스크</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 에너지 시장 분석
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 원유 시장
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>OPEC+ 감산 정책</li>
                <li>셰일오일 생산 동향</li>
                <li>전기차 보급 영향</li>
                <li>지정학적 리스크</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 천연가스 시장
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>LNG 수급 동향</li>
                <li>유럽 에너지 위기</li>
                <li>신규 인프라 투자</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 금속 시장 전망
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 귀금속
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>금 가격 전망</li>
                <li>은 산업 수요</li>
                <li>중앙은행 매입 동향</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 산업용 금속
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>구리 수급 전망</li>
                <li>리튬, 니켈 배터리 수요</li>
                <li>알루미늄 시장 동향</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 농산물 시장 분석
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>곡물 시장 전망</li>
                <li>기후변화 영향</li>
                <li>식량 안보 이슈</li>
                <li>바이오연료 수요</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 투자 전략
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>섹터별 투자 전략</li>
                <li>ETF 활용 방안</li>
                <li>선물 시장 전략</li>
                <li>리스크 관리</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 주요 리스크 요인
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>지정학적 리스크</li>
                <li>기후변화 영향</li>
                <li>규제 리스크</li>
                <li>수급 불균형</li>
                <li>가격 변동성</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              📊 더 자세한 원자재 시장 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                원자재 시장 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(commoditiesData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
