import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const bondData = {
    marketOverview: {
      treasuryYield: {
        tenYear: "4.2%",
        twoYear: "4.8%",
      },
      creditSpread: {
        investment: "120bp",
        highYield: "380bp",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "채권분석팀",
    category: "채권투자",
  };

  return {
    props: {
      bondData,
    },
  };
}

export default function BondInvestmentGuide({ bondData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 채권 투자 가이드: 안정적 수익을 위한 전략</title>
        <meta
          name="description"
          content="2024년 채권 시장 전망과 투자 전략을 제시합니다. 국채, 회사채, 하이일드 채권 등 다양한 채권 상품의 투자 기회와 리스크를 분석합니다."
        />
        <meta
          name="keywords"
          content="채권투자, 국채, 회사채, 하이일드채권, 금리전망, 채권수익률, 듀레이션전략"
        />
        <meta name="author" content="채권분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 채권 투자 가이드: 안정적 수익을 위한 전략"
        />
        <meta
          property="og:description"
          content="2024년 채권 시장 전망과 투자 전략을 제시합니다. 국채, 회사채, 하이일드 채권 등 다양한 채권 상품의 투자 기회와 리스크를 분석합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/bond-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/bond-investment-guide"
        />
        <meta property="og:site_name" content="채권 투자 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 채권 투자 가이드" />
        <meta
          name="twitter:description"
          content="2024년 채권 시장 전망과 투자 전략"
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/bond-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 채권 투자 가이드
            </h1>
            <p className="text-lg text-gray-600">
              안정적 수익을 위한 채권 투자 전략
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 채권 시장 개관
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 채권 시장은 통화정책 변화와 경기 전망에 따라 변동성이
                예상되며, 섹터별 차별화가 중요해질 전망입니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 시장 동향
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>금리 정책 방향</li>
                <li>수익률 곡선 변화</li>
                <li>신용 스프레드</li>
                <li>발행 시장 동향</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 채권 유형별 분석
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 국채
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>수익률 곡선 분석</li>
                <li>듀레이션 전략</li>
                <li>안전자산 수요</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 회사채
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>신용등급별 전망</li>
                <li>섹터별 기회</li>
                <li>부도율 전망</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 하이일드 채권
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>위험 프리미엄</li>
                <li>부도위험 분석</li>
                <li>섹터별 선별</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 투자 전략
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 듀레이션 전략
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>금리 전망 기반</li>
                <li>수익률 곡선 포지션</li>
                <li>섹터 로테이션</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 크레딧 전략
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>등급별 배분</li>
                <li>섹터별 선호도</li>
                <li>개별 종목 선택</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 포트폴리오 구성
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>자산배분 전략</li>
                <li>만기 구조 전략</li>
                <li>신용등급 배분</li>
                <li>섹터 다각화</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>금리 리스크</li>
                <li>신용 리스크</li>
                <li>유동성 리스크</li>
                <li>인플레이션 리스크</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 투자 실행 방법
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>직접 투자 vs 간접 투자</li>
                <li>채권형 펀드 선택</li>
                <li>ETF 활용 방안</li>
                <li>리밸런싱 전략</li>
                <li>세금 고려사항</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              📈 더 자세한 채권 투자 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                채권 투자 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(bondData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
