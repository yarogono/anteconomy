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
    <>
      <Head>
        <title>
          ESG 투자 전략 - 지속가능한 성장을 위한 투자 가이드 | 안트이코노미
        </title>
        <meta
          name="description"
          content="환경(E), 사회(S), 지배구조(G)를 고려한 ESG 투자 전략과 방법론을 제시합니다. 지속가능한 투자로 장기적 가치 창출과 사회적 책임을 실현하는 방안을 모색합니다."
        />
        <meta
          name="keywords"
          content="ESG 투자, 지속가능 투자, 사회책임투자, 환경투자, 기업지배구조, 임팩트 투자, ESG 평가, 그린펀드"
        />
        <meta
          property="og:title"
          content="ESG 투자 전략 - 지속가능한 성장을 위한 투자 가이드 | 안트이코노미"
        />
        <meta
          property="og:description"
          content="환경(E), 사회(S), 지배구조(G)를 고려한 ESG 투자 전략과 방법론을 제시합니다. 지속가능한 투자로 장기적 가치 창출과 사회적 책임을 실현하는 방안을 모색합니다."
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/esg-investment-strategies"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            ESG 투자 전략: 지속가능한 미래를 위한 가치 투자
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. ESG 투자의 이해
            </h2>
            <p className="mb-6">
              ESG 투자는 기업의 재무적 성과뿐만 아니라 환경(Environmental),
              사회(Social), 지배구조(Governance) 요소를 종합적으로 고려하는 투자
              방식입니다. 지속가능한 성장과 사회적 책임을 추구하며, 장기적
              관점에서 안정적인 수익을 창출하는 것을 목표로 합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              ESG 투자의 핵심 요소
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>환경(E): 기후변화 대응, 자원 효율성, 환경 영향</li>
              <li>사회(S): 인권, 노동권, 지역사회 관계, 다양성</li>
              <li>지배구조(G): 이사회 구성, 주주권리, 윤리경영</li>
              <li>지속가능성: 장기적 가치 창출과 리스크 관리</li>
              <li>투명성: ESG 성과 공시와 이해관계자 소통</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. ESG 투자 트렌드
            </h2>
            <p className="mb-6">
              ESG 투자는 글로벌 금융시장에서 빠르게 성장하고 있으며,
              기관투자자와 개인투자자 모두에게 주목받고 있습니다. 규제 강화와
              사회적 인식 변화는 ESG 투자의 중요성을 더욱 부각시키고 있습니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 시장 동향
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>ESG 펀드 규모 확대</li>
              <li>기업의 ESG 정보공시 강화</li>
              <li>ESG 평가 체계 고도화</li>
              <li>임팩트 투자 증가</li>
              <li>그린본드 시장 성장</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. ESG 투자 전략
            </h2>
            <p className="mb-6">
              성공적인 ESG 투자를 위해서는 체계적인 접근 방식과 명확한 투자
              전략이 필요합니다. 기업의 ESG 성과를 평가하고 포트폴리오를
              구성하는 방법은 다양합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              투자 접근 방식
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>네거티브 스크리닝: 특정 산업/기업 배제</li>
              <li>포지티브 스크리닝: ESG 우수기업 선별</li>
              <li>테마 투자: 특정 ESG 테마 중심 투자</li>
              <li>통합적 접근: ESG 요소를 투자 분석에 통합</li>
              <li>임팩트 투자: 측정 가능한 사회적 영향 추구</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. ESG 평가와 분석
            </h2>
            <p className="mb-6">
              ESG 투자의 핵심은 기업의 ESG 성과를 객관적으로 평가하고 분석하는
              것입니다. 다양한 평가 지표와 방법론을 활용하여 기업의 지속가능성을
              종합적으로 판단합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              평가 프레임워크
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>ESG 평가 지표 체계</li>
              <li>산업별 중요도 분석</li>
              <li>데이터 수집과 검증</li>
              <li>정성적/정량적 평가</li>
              <li>ESG 리스크 평가</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 포트폴리오 구성
            </h2>
            <p className="mb-6">
              ESG 투자 포트폴리오는 재무적 수익과 ESG 성과를 균형있게 고려하여
              구성해야 합니다. 리스크 관리와 장기적 가치 창출을 위한 전략적
              접근이 중요합니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                포트폴리오 전략
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>ESG 요소별 가중치 설정</li>
                <li>산업별 분산 투자</li>
                <li>ESG 리스크 관리</li>
                <li>장기 보유 전략</li>
                <li>정기적 포트폴리오 리밸런싱</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                결론: ESG 투자의 미래
              </h2>
              <p className="mb-4">
                ESG 투자는 지속가능한 미래를 위한 핵심 전략으로 자리잡고
                있습니다. 기업의 ESG 성과와 재무적 성과는 점차 더 밀접하게
                연관되어 가고 있으며, 이는 장기적 관점에서 투자 수익의 질적
                향상을 가져올 것으로 기대됩니다.
              </p>
              <p>
                성공적인 ESG 투자를 위해서는 체계적인 분석과 평가, 그리고 장기적
                관점의 포트폴리오 운용이 필요합니다. ESG 투자는 단순한 트렌드가
                아닌, 미래 투자의 새로운 패러다임으로 발전해 나갈 것입니다.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
