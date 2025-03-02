import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const riskData = {
    marketOverview: {
      riskTypes: {
        market: "시장리스크",
        credit: "신용리스크",
        liquidity: "유동성리스크",
        operational: "운영리스크",
      },
      volatilityIndex: {
        vix: "18.5",
        trend: "하락",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "리스크관리팀",
    category: "리스크관리",
  };

  return {
    props: {
      riskData,
    },
  };
}

export default function FinancialRiskManagement({ riskData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 금융 리스크 관리: 효과적인 위험 관리 전략</title>
        <meta
          name="description"
          content="2024년 금융 시장의 주요 리스크 요인과 관리 전략을 분석합니다. 시장, 신용, 유동성, 운영 리스크 등 다양한 위험 요소에 대한 대응 방안을 제시합니다."
        />
        <meta
          name="keywords"
          content="리스크관리, 금융리스크, 시장리스크, 신용리스크, 유동성리스크, 운영리스크, 헤지전략"
        />
        <meta name="author" content="리스크관리팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 금융 리스크 관리: 효과적인 위험 관리 전략"
        />
        <meta
          property="og:description"
          content="2024년 금융 시장의 주요 리스크 요인과 관리 전략을 분석합니다. 시장, 신용, 유동성, 운영 리스크 등 다양한 위험 요소에 대한 대응 방안을 제시합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/risk-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/financial-risk-management"
        />
        <meta property="og:site_name" content="금융 리스크 관리 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 금융 리스크 관리" />
        <meta
          name="twitter:description"
          content="2024년 금융 리스크 관리 전략"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/risk-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 금융 리스크 관리
            </h1>
            <p className="text-lg text-gray-600">
              효과적인 위험 관리를 위한 전략
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 금융 리스크 환경
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 금융 시장은 다양한 불확실성 요인으로 인해 리스크 관리의
                중요성이 더욱 부각되고 있습니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 리스크 요인
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>금리 변동성</li>
                <li>지정학적 리스크</li>
                <li>규제 환경 변화</li>
                <li>기술 리스크</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 시장 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 리스크 측정
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>VaR 분석</li>
                <li>스트레스 테스트</li>
                <li>민감도 분석</li>
                <li>시나리오 분석</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 헤지 전략
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>파생상품 활용</li>
                <li>자산배분 조정</li>
                <li>포지션 제한</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 신용 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 신용평가
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>내부 신용등급</li>
                <li>부도율 분석</li>
                <li>회수율 추정</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 리스크 완화
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>담보 관리</li>
                <li>신용파생상품</li>
                <li>익스포저 관리</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 유동성 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>유동성 비율 관리</li>
                <li>만기 구조 분석</li>
                <li>스트레스 테스트</li>
                <li>비상계획 수립</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 운영 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>내부통제 시스템</li>
                <li>프로세스 개선</li>
                <li>IT 리스크 관리</li>
                <li>인적 리스크 관리</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 리스크 관리 체계
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>거버넌스 구조</li>
                <li>리스크 한도 설정</li>
                <li>모니터링 체계</li>
                <li>보고 체계</li>
                <li>성과 평가</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              🛡️ 더 자세한 리스크 관리 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                리스크 관리 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(riskData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
