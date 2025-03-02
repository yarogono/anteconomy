import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const policyData = {
    marketOverview: {
      majorEconomies: {
        us: {
          interestRate: "5.50%",
          monetaryPolicy: "긴축 기조",
        },
        eu: {
          interestRate: "4.50%",
          monetaryPolicy: "긴축 유지",
        },
        japan: {
          interestRate: "0.10%",
          monetaryPolicy: "완화 정책",
        },
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "글로벌정책분석팀",
    category: "금융정책",
  };

  return {
    props: {
      policyData,
    },
  };
}

export default function GlobalFinancialPolicies({ policyData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          2024 글로벌 금융정책 분석: 주요국 통화정책과 금융시장 영향
        </title>
        <meta
          name="description"
          content="2024년 주요국의 금융정책과 통화정책 방향을 분석합니다. 미국, 유럽, 일본 등 주요 경제권의 정책 변화와 글로벌 금융시장 영향을 전망합니다."
        />
        <meta
          name="keywords"
          content="금융정책, 통화정책, 중앙은행, 기준금리, 양적완화, 금융규제, 환율정책"
        />
        <meta name="author" content="글로벌정책분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 글로벌 금융정책 분석: 주요국 통화정책과 금융시장 영향"
        />
        <meta
          property="og:description"
          content="2024년 주요국의 금융정책과 통화정책 방향을 분석합니다. 미국, 유럽, 일본 등 주요 경제권의 정책 변화와 글로벌 금융시장 영향을 전망합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/financial-policy-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/global-financial-policies"
        />
        <meta property="og:site_name" content="글로벌 금융정책 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 글로벌 금융정책 분석" />
        <meta
          name="twitter:description"
          content="2024년 주요국 금융정책 동향과 전망"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/financial-policy-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 글로벌 금융정책 분석
            </h1>
            <p className="text-lg text-gray-600">
              주요국 통화정책과 금융시장 영향
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 글로벌 금융정책 환경
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 글로벌 금융정책은 인플레이션 대응과 경제성장 균형을
                추구하는 방향으로 전개될 전망입니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 정책 이슈
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>인플레이션 통제</li>
                <li>경제성장 지원</li>
                <li>금융안정성 유지</li>
                <li>디지털화폐 정책</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 주요국 통화정책 분석
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 미국 연방준비제도
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>기준금리 정책</li>
                <li>양적긴축 진행상황</li>
                <li>경제전망 시나리오</li>
                <li>통화정책 방향성</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 유럽중앙은행
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>물가안정 정책</li>
                <li>경제회복 지원책</li>
                <li>그린딜 정책연계</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 일본은행
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>수익률곡선 통제</li>
                <li>엔화 약세 대응</li>
                <li>디플레이션 탈피</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 신흥국 금융정책
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>중국의 통화정책</li>
                <li>신흥국 금리정책</li>
                <li>환율관리 정책</li>
                <li>자본통제 조치</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 금융시장 영향 분석
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>글로벌 금리 전망</li>
                <li>환율 변동성</li>
                <li>자산가격 영향</li>
                <li>신용시장 동향</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 규제정책 변화
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>금융안정성 규제</li>
                <li>디지털자산 규제</li>
                <li>ESG 관련 정책</li>
                <li>국제금융협력</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 투자 전략 제시
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>정책 변화별 대응전략</li>
                <li>자산배분 조정방안</li>
                <li>위험관리 방안</li>
                <li>투자기회 분석</li>
                <li>헤지전략 수립</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              📈 더 자세한 금융정책 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                글로벌 금융정책 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(policyData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
