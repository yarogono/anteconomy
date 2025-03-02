import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const emergingData = {
    marketOverview: {
      regions: {
        asia: ["중국", "인도", "인도네시아", "베트남"],
        latinAmerica: ["브라질", "멕시코", "칠레"],
        europe: ["폴란드", "터키", "헝가리"],
      },
      keyMetrics: {
        gdpGrowth: "4.5%",
        marketCap: "$25조",
        peRatio: "12.5배",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "신흥국시장분석팀",
    category: "해외투자",
  };

  return {
    props: {
      emergingData,
    },
  };
}

export default function EmergingMarketsStrategy({ emergingData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 신흥국 투자 전략: 고성장 시장의 기회와 리스크</title>
        <meta
          name="description"
          content="2024년 신흥국 시장의 투자 기회와 리스크를 분석합니다. 중국, 인도, 브라질 등 주요 신흥국의 경제 전망과 투자 전략을 제시합니다."
        />
        <meta
          name="keywords"
          content="신흥국투자, 이머징마켓, 해외투자, 중국주식, 인도주식, 브라질주식, 신흥국펀드"
        />
        <meta name="author" content="신흥국시장분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 신흥국 투자 전략: 고성장 시장의 기회와 리스크"
        />
        <meta
          property="og:description"
          content="2024년 신흥국 시장의 투자 기회와 리스크를 분석합니다. 중국, 인도, 브라질 등 주요 신흥국의 경제 전망과 투자 전략을 제시합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/emerging-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/emerging-markets-strategy"
        />
        <meta property="og:site_name" content="신흥국 투자 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 신흥국 투자 전략" />
        <meta
          name="twitter:description"
          content="2024년 신흥국 시장 동향과 투자 전망"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/emerging-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 신흥국 투자 전략
            </h1>
            <p className="text-lg text-gray-600">
              고성장 시장의 투자 기회와 리스크 분석
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 신흥국 시장 개관
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 신흥국 시장은 글로벌 경기 회복과 함께 차별화된 성장이
                예상되며, 선별적 투자 기회가 부각될 전망입니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 투자 테마
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>디지털 경제 성장</li>
                <li>소비시장 확대</li>
                <li>인프라 투자</li>
                <li>제조업 경쟁력</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 아시아 신흥국 분석
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 중국
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>경제 전환 정책</li>
                <li>소비 회복 전망</li>
                <li>기술 혁신 전략</li>
                <li>규제 리스크</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 인도
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>디지털 인프라</li>
                <li>제조업 육성</li>
                <li>소비시장 성장</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 아세안
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>베트남 성장 동력</li>
                <li>인도네시아 자원</li>
                <li>태국 관광 회복</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 중남미 시장 분석
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 브라질
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>통화정책 방향</li>
                <li>원자재 수출</li>
                <li>정치적 안정성</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 멕시코
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>미국 경제 연계성</li>
                <li>제조업 경쟁력</li>
                <li>에너지 정책</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 유럽 신흥국
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>EU 경제 연계성</li>
                <li>에너지 전환</li>
                <li>디지털 전환</li>
                <li>지정학적 리스크</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 투자 전략
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>국가별 투자 비중</li>
                <li>섹터별 접근 전략</li>
                <li>ETF vs 개별주식</li>
                <li>환율 리스크 관리</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 주요 리스크
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>정치적 불확실성</li>
                <li>통화가치 변동</li>
                <li>규제 리스크</li>
                <li>유동성 리스크</li>
                <li>지정학적 갈등</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              🌏 더 자세한 신흥국 시장 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                신흥국 투자 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(emergingData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
