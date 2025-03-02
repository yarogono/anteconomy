import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const esgData = {
    marketOverview: {
      globalEsgAum: "$35조",
      yearToDateGrowth: "+15%",
      topSectors: ["재생에너지", "전기차", "친환경기술"],
    },
    lastUpdated: new Date().toISOString(),
    author: "ESG투자분석팀",
    category: "투자전략",
  };

  return {
    props: {
      esgData,
    },
  };
}

export default function ESGInvestmentStrategies({ esgData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 ESG 투자 전략: 지속가능한 수익을 위한 완벽 가이드</title>
        <meta
          name="description"
          content="2024년 ESG 투자 트렌드와 전략을 분석합니다. 환경, 사회, 지배구조를 고려한 투자 방법론과 주요 섹터별 투자 기회를 제시합니다."
        />
        <meta
          name="keywords"
          content="ESG투자, 지속가능투자, 사회책임투자, 환경투자, 친환경기업, 기업지배구조"
        />
        <meta name="author" content="ESG투자분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 ESG 투자 전략: 지속가능한 수익을 위한 완벽 가이드"
        />
        <meta
          property="og:description"
          content="2024년 ESG 투자 트렌드와 전략을 분석합니다. 환경, 사회, 지배구조를 고려한 투자 방법론과 주요 섹터별 투자 기회를 제시합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/esg-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/esg-investment-strategies"
        />
        <meta property="og:site_name" content="ESG 투자 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 ESG 투자 전략" />
        <meta
          name="twitter:description"
          content="2024년 ESG 투자 트렌드와 전략 분석"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/esg-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 ESG 투자 전략
            </h1>
            <p className="text-lg text-gray-600">
              지속가능한 수익을 위한 ESG 투자 가이드
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. ESG 투자의 이해
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                ESG 투자는 환경(Environmental), 사회(Social),
                지배구조(Governance)를 고려한 투자 방식으로, 지속가능한 수익과
                사회적 가치를 동시에 추구합니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ ESG 투자의 핵심 요소
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>환경 요소: 기후변화, 자원효율성, 오염</li>
                <li>사회 요소: 인권, 노동권, 데이터 보안</li>
                <li>지배구조 요소: 이사회 구성, 주주권리, 기업윤리</li>
                <li>ESG 평가 지표와 방법론</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 2024년 ESG 투자 트렌드
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 투자 테마
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>기후변화 대응 기술</li>
                <li>순환경제와 자원효율성</li>
                <li>사회적 책임 경영</li>
                <li>지속가능한 공급망</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 규제 환경 변화
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>글로벌 ESG 공시 의무화</li>
                <li>탄소배출권 거래제 확대</li>
                <li>기업 지속가능성 보고서 강화</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. ESG 투자 전략
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 포트폴리오 구성 전략
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>ESG 통합 접근법</li>
                <li>테마 투자</li>
                <li>임팩트 투자</li>
                <li>배제/선별 전략</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 주요 투자 섹터
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>재생에너지</li>
                <li>전기차 및 배터리</li>
                <li>순환경제</li>
                <li>친환경 건설</li>
                <li>지속가능한 농업</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. ESG 투자 성과 측정
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>재무적 성과 지표</li>
                <li>비재무적 성과 지표</li>
                <li>임팩트 측정 방법론</li>
                <li>ESG 등급 평가</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>그린워싱 리스크</li>
                <li>규제 변화 리스크</li>
                <li>평가 기준의 불확실성</li>
                <li>시장 변동성</li>
                <li>정책 리스크</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              �� 더 자세한 ESG 투자 분석과 전략이 궁금하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                ESG 투자 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(esgData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
