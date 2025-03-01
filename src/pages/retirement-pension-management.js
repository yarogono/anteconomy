import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const pensionData = {
    marketOverview: {
      pensionFunds: {
        totalAum: "1,000조원",
        yearToDateReturn: "+8%",
      },
      assetAllocation: {
        stocks: "40%",
        bonds: "45%",
        alternatives: "15%",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "연금자산관리팀",
    category: "연금투자",
  };

  return {
    props: {
      pensionData,
    },
  };
}

export default function RetirementPensionManagement({ pensionData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          2024 퇴직연금 자산관리 가이드: 안정적인 노후 준비를 위한 전략
        </title>
        <meta
          name="description"
          content="2024년 퇴직연금 운용 전략과 자산배분 방안을 제시합니다. 연령대별, 위험성향별 포트폴리오 구성과 연금자산 관리 방법을 안내합니다."
        />
        <meta
          name="keywords"
          content="퇴직연금, 연금운용, 자산배분, 포트폴리오, IRP, DB형, DC형, 노후준비"
        />
        <meta name="author" content="연금자산관리팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 퇴직연금 자산관리 가이드: 안정적인 노후 준비를 위한 전략"
        />
        <meta
          property="og:description"
          content="2024년 퇴직연금 운용 전략과 자산배분 방안을 제시합니다. 연령대별, 위험성향별 포트폴리오 구성과 연금자산 관리 방법을 안내합니다."
        />
        <meta
          property="og:image"
          content="https://your-domain.com/images/pension-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://your-domain.com/retirement-pension-management"
        />
        <meta property="og:site_name" content="연금자산관리센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 퇴직연금 자산관리 가이드" />
        <meta
          name="twitter:description"
          content="2024년 퇴직연금 운용 전략과 자산배분 방안"
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/pension-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 퇴직연금 자산관리 가이드
            </h1>
            <p className="text-lg text-gray-600">
              안정적인 노후 준비를 위한 최적의 전략
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 퇴직연금 제도의 이해
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                퇴직연금은 근로자의 노후 생활 보장을 위한 중요한 제도입니다.
                DB형, DC형, IRP 등 다양한 형태의 퇴직연금 특징과 장단점을
                이해하는 것이 중요합니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 퇴직연금 유형별 특징
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>DB형(확정급여형) 특징</li>
                <li>DC형(확정기여형) 특징</li>
                <li>IRP(개인형퇴직연금) 활용</li>
                <li>제도별 투자 제한사항</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 연금자산 운용 전략
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 연령대별 운용 전략
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>20-30대: 성장형 포트폴리오</li>
                <li>40-50대: 밸런스형 포트폴리오</li>
                <li>60대 이상: 안정형 포트폴리오</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 위험성향별 자산배분
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>공격형 투자자 전략</li>
                <li>중립형 투자자 전략</li>
                <li>안정형 투자자 전략</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 포트폴리오 구성 전략
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 자산군별 배분
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>주식형 자산 비중</li>
                <li>채권형 자산 비중</li>
                <li>대체투자 활용</li>
                <li>현금성 자산 관리</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 연금자산 관리 방법
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>정기적인 포트폴리오 리밸런싱</li>
                <li>수익률 모니터링</li>
                <li>위험관리 전략</li>
                <li>세제혜택 활용</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 연금 수령 전략
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>일시금 vs 연금 수령</li>
                <li>연금 수령 시기 선택</li>
                <li>과세 효과 분석</li>
                <li>물가상승 대비 전략</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 주의사항 및 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>시장 리스크 관리</li>
                <li>수수료 구조 이해</li>
                <li>제도 변경 리스크</li>
                <li>장수 리스크 대비</li>
                <li>인플레이션 리스크</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              💰 더 자세한 연금자산 관리 상담이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                전문가 상담 신청하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(pensionData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
