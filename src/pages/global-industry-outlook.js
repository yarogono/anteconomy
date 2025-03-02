import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const industryData = {
    marketOverview: {
      sectors: {
        tech: "기술/IT",
        healthcare: "헬스케어",
        energy: "에너지",
        consumer: "소비재",
        industrial: "산업재",
      },
      growth: {
        tech: "+15%",
        healthcare: "+8%",
        energy: "+5%",
        consumer: "+4%",
        industrial: "+6%",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "산업분석팀",
    category: "산업전망",
  };

  return {
    props: {
      industryData,
    },
  };
}

export default function GlobalIndustryOutlook({ industryData }) {
  return (
    <>
      <Head>
        <title>
          글로벌 산업 전망 - 주요 산업별 성장성과 투자 기회 | 안트이코노미
        </title>
        <meta
          name="description"
          content="글로벌 주요 산업의 성장 동력과 전망을 분석합니다. 산업별 트렌드와 기회 요인을 파악하고 효과적인 투자 전략을 제시합니다."
        />
        <meta
          name="keywords"
          content="산업 전망, 산업 분석, 성장 산업, 유망 산업, 산업 트렌드, 투자 기회, 산업 동향, 미래 산업"
        />
        <meta
          property="og:title"
          content="글로벌 산업 전망 - 주요 산업별 성장성과 투자 기회 | 안트이코노미"
        />
        <meta
          property="og:description"
          content="글로벌 주요 산업의 성장 동력과 전망을 분석합니다. 산업별 트렌드와 기회 요인을 파악하고 효과적인 투자 전략을 제시합니다."
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/global-industry-outlook"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            글로벌 산업 전망: 변화와 기회의 시대
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 글로벌 산업 환경 변화
            </h2>
            <p className="mb-6">
              글로벌 산업 구조는 기술 혁신, 소비자 선호도 변화, 지정학적 요인 등
              다양한 변수의 영향을 받으며 빠르게 진화하고 있습니다. 이러한
              변화는 새로운 기회와 도전과제를 동시에 제시합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 변화 동인
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>디지털 전환 가속화</li>
              <li>지속가능성 중시</li>
              <li>공급망 재편</li>
              <li>소비 패턴 변화</li>
              <li>규제 환경 변화</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 주요 산업별 전망
            </h2>
            <p className="mb-6">
              각 산업은 고유한 성장 동력과 도전과제를 가지고 있습니다. 산업별
              특성을 이해하고 변화 방향을 파악하는 것이 중요합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              기술/IT 산업
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>AI/빅데이터 활용 확대</li>
              <li>클라우드 서비스 성장</li>
              <li>사이버보안 중요성 증가</li>
              <li>메타버스/Web3.0 발전</li>
              <li>반도체 산업 동향</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              친환경/에너지 산업
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>신재생에너지 확대</li>
              <li>전기차/배터리 시장</li>
              <li>수소경제 발전</li>
              <li>탄소중립 기술</li>
              <li>순환경제 솔루션</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              바이오/헬스케어
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>디지털 헬스케어</li>
              <li>바이오신약 개발</li>
              <li>원격의료 서비스</li>
              <li>개인맞춤형 의료</li>
              <li>고령화 관련 산업</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 산업별 투자 기회
            </h2>
            <p className="mb-6">
              산업 변화는 다양한 투자 기회를 창출합니다. 각 산업의 성장 단계와
              리스크 요인을 고려한 전략적 접근이 필요합니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                투자 고려사항
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>성장성과 수익성</li>
                <li>기술 경쟁력</li>
                <li>시장 지배력</li>
                <li>규제 리스크</li>
                <li>ESG 요소</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 리스크 요인 분석
            </h2>
            <p className="mb-6">
              산업 투자에는 다양한 리스크 요인이 존재합니다. 이러한 리스크를
              사전에 파악하고 대비하는 것이 중요합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 리스크
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>기술 변화 리스크</li>
              <li>경쟁 심화</li>
              <li>규제 강화</li>
              <li>원자재 가격 변동</li>
              <li>지정학적 리스크</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 투자 전략 수립
            </h2>
            <p className="mb-6">
              성공적인 산업 투자를 위해서는 체계적인 분석과 전략 수립이
              필요합니다. 산업별 특성과 투자자의 목표를 고려한 맞춤형 전략이
              중요합니다.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                결론: 산업 투자의 미래
              </h2>
              <p className="mb-4">
                글로벌 산업 구조는 지속적인 변화를 겪고 있으며, 이는 새로운 투자
                기회를 창출합니다. 성공적인 산업 투자를 위해서는 변화의 방향성을
                정확히 파악하고 체계적인 접근이 필요합니다.
              </p>
              <p>
                장기적 관점에서 산업의 구조적 변화를 이해하고, 적절한 리스크
                관리와 함께 기회를 포착하는 것이 중요합니다. 지속적인 모니터링과
                전략 조정을 통해 변화하는 환경에 대응해야 합니다.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
