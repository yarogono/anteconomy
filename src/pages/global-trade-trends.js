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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 글로벌 무역 동향: 국제 무역의 변화와 전망</title>
        <meta
          name="description"
          content="2024년 글로벌 무역 동향과 주요 이슈를 분석합니다. 무역 구조의 변화, 공급망 재편, 보호무역주의 등 핵심 트렌드를 전망합니다."
        />
        <meta
          name="keywords"
          content="글로벌무역, 국제무역, 무역동향, 공급망, 보호무역, 자유무역, 무역협정"
        />
        <meta name="author" content="글로벌무역분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 글로벌 무역 동향: 국제 무역의 변화와 전망"
        />
        <meta
          property="og:description"
          content="2024년 글로벌 무역 동향과 주요 이슈를 분석합니다. 무역 구조의 변화, 공급망 재편, 보호무역주의 등 핵심 트렌드를 전망합니다."
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
        <meta name="twitter:title" content="2024 글로벌 무역 동향" />
        <meta
          name="twitter:description"
          content="2024년 글로벌 무역 동향과 전망"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/trade-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 글로벌 무역 동향
            </h1>
            <p className="text-lg text-gray-600">
              국제 무역의 변화와 새로운 트렌드
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 글로벌 무역 환경
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 글로벌 무역은 지정학적 긴장, 공급망 재편, 디지털 전환 등
                다양한 변화 요인에 직면해 있습니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 트렌드
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>공급망 다변화</li>
                <li>디지털 무역 확대</li>
                <li>친환경 무역 규제</li>
                <li>보호무역주의 강화</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 지역별 무역 동향
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 아시아
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>RCEP 영향</li>
                <li>중국 무역 정책</li>
                <li>ASEAN 교역 확대</li>
                <li>인도의 부상</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 북미/유럽
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>USMCA 이행</li>
                <li>EU 무역 정책</li>
                <li>대서양 협력</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 산업별 무역 동향
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 제조업
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>반도체 공급망</li>
                <li>자동차 산업</li>
                <li>친환경 제품</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 서비스 무역
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>디지털 서비스</li>
                <li>금융 서비스</li>
                <li>문화 콘텐츠</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 무역 정책 변화
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>무역협정 동향</li>
                <li>관세 정책</li>
                <li>비관세 장벽</li>
                <li>환경 규제</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 무역 리스크
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>지정학적 갈등</li>
                <li>공급망 불안</li>
                <li>보호무역주의</li>
                <li>환율 변동성</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 대응 전략
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>공급망 다변화</li>
                <li>디지털 전환</li>
                <li>친환경 대응</li>
                <li>리스크 관리</li>
                <li>신시장 개척</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              🌐 더 자세한 글로벌 무역 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                무역 동향 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(tradeData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
