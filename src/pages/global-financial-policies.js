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
    <>
      <Head>
        <title>
          글로벌 금융 정책 - 세계 주요국 통화/금융 정책 분석 | 안트이코노미
        </title>
        <meta
          name="description"
          content="주요국 중앙은행의 통화정책과 금융 규제 동향을 분석합니다. 글로벌 금융시장에 영향을 미치는 정책 변화와 그 영향을 심층적으로 살펴보고 대응 전략을 모색합니다."
        />
        <meta
          name="keywords"
          content="금융 정책, 통화 정책, 중앙은행, 금리 정책, 금융 규제, 금융 안정, 정책 분석, 경제 정책"
        />
        <meta
          property="og:title"
          content="글로벌 금융 정책 - 세계 주요국 통화/금융 정책 분석 | 안트이코노미"
        />
        <meta
          property="og:description"
          content="주요국 중앙은행의 통화정책과 금융 규제 동향을 분석합니다. 글로벌 금융시장에 영향을 미치는 정책 변화와 그 영향을 심층적으로 살펴보고 대응 전략을 모색합니다."
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/global-financial-policies"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            글로벌 금융 정책: 세계 경제의 방향을 결정하는 핵심 동력
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 글로벌 금융 정책 환경
            </h2>
            <p className="mb-6">
              글로벌 금융 정책은 세계 경제의 안정성과 성장에 핵심적인 영향을
              미칩니다. 주요국 중앙은행의 정책 결정과 금융 규제 변화는 시장
              참여자들의 의사결정에 중요한 지표가 됩니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 정책 요소
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>통화정책: 금리, 유동성 관리</li>
              <li>금융규제: 건전성 규제, 소비자 보호</li>
              <li>시장안정: 시스템 리스크 관리</li>
              <li>국제협력: 정책 공조, 금융 안전망</li>
              <li>디지털금융: 핀테크, CBDC 정책</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 주요국 통화정책 분석
            </h2>
            <p className="mb-6">
              각국 중앙은행은 경제 상황과 정책 목표에 따라 다양한 통화정책을
              실행하고 있습니다. 이러한 정책 결정은 글로벌 금융시장에 직접적인
              영향을 미칩니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요국 정책 동향
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>미국: Fed의 금리 정책과 양적 긴축</li>
              <li>유럽: ECB의 통화정책 정상화</li>
              <li>일본: BOJ의 수익률 곡선 관리</li>
              <li>중국: PBOC의 유동성 관리</li>
              <li>신흥국: 정책 대응과 과제</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 금융 규제 트렌드
            </h2>
            <p className="mb-6">
              금융 규제는 시장의 안정성과 투명성을 제고하기 위해 지속적으로
              발전하고 있습니다. 새로운 금융 환경에 대응하기 위한 규제 체계가
              확립되고 있습니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 규제 동향
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>건전성 규제 강화</li>
              <li>디지털 금융 규제</li>
              <li>ESG 관련 규제</li>
              <li>소비자 보호 정책</li>
              <li>시스템 리스크 관리</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 정책 영향 분석
            </h2>
            <p className="mb-6">
              금융 정책의 변화는 다양한 경로를 통해 시장과 경제에 영향을
              미칩니다. 정책 효과를 정확히 이해하고 대응하는 것이 중요합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 영향 분야
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>금융시장: 자산가격, 변동성</li>
              <li>실물경제: 성장, 물가, 고용</li>
              <li>금융기관: 수익성, 리스크</li>
              <li>기업활동: 자금조달, 투자</li>
              <li>가계: 대출, 자산운용</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 대응 전략
            </h2>
            <p className="mb-6">
              금융 정책 변화에 대한 효과적인 대응을 위해서는 체계적인 분석과
              전략 수립이 필요합니다. 시장 참여자별로 적절한 대응 방안을
              마련해야 합니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                전략적 고려사항
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>정책 모니터링 체계 구축</li>
                <li>리스크 관리 강화</li>
                <li>포트폴리오 조정</li>
                <li>헤지 전략 수립</li>
                <li>유동성 관리</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                결론: 금융 정책의 미래
              </h2>
              <p className="mb-4">
                글로벌 금융 정책은 경제 환경 변화에 따라 지속적으로 진화하고
                있습니다. 디지털화, 기후변화, 인구구조 변화 등 새로운 도전
                요인에 대응하기 위한 정책적 혁신이 이루어지고 있습니다.
              </p>
              <p>
                성공적인 시장 참여를 위해서는 정책 동향에 대한 지속적인
                모니터링과 분석, 그리고 효과적인 대응 전략 수립이 필수적입니다.
                장기적 관점에서 정책 변화의 방향성을 이해하고 준비하는 것이
                중요합니다.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
