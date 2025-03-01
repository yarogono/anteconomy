import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const investmentGuideData = {
    basics: [
      {
        title: "주식 투자의 기본 원칙",
        points: [
          "분산 투자로 리스크 관리",
          "장기 투자 지향",
          "기업의 기본적 분석 중요성",
          "시장 타이밍보다 정기적 투자",
        ],
      },
      {
        title: "투자 전 필수 지식",
        points: [
          "재무제표 읽는 법",
          "기업가치 평가 방법",
          "시장 동향 분석",
          "투자 위험 관리",
        ],
      },
    ],
    lastUpdated: new Date().toISOString(),
    author: "투자전문가팀",
    category: "투자교육",
  };

  return {
    props: {
      investmentGuideData,
    },
    revalidate: 43200, // 12시간
  };
}

export default function StockInvestmentGuide({ investmentGuideData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>초보자를 위한 주식투자 완벽 가이드 2024</title>
        <meta
          name="description"
          content="주식 투자를 시작하는 초보자를 위한 완벽 가이드. 기본 개념부터 실전 투자 전략까지 상세히 설명합니다."
        />
        <meta
          name="keywords"
          content="주식투자, 주식초보, 투자가이드, 주식공부, 주식투자전략, 투자원칙, 분산투자"
        />
        <meta name="author" content="투자전문가팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="초보자를 위한 주식투자 완벽 가이드 2024"
        />
        <meta
          property="og:description"
          content="주식 투자를 시작하는 초보자를 위한 완벽 가이드. 기본 개념부터 실전 투자 전략까지 상세히 설명합니다."
        />
        <meta
          property="og:image"
          content="https://your-domain.com/images/stock-guide.jpg"
        />
        <meta
          property="og:url"
          content="https://your-domain.com/stock-investment-guide"
        />
        <meta property="og:site_name" content="투자 교육 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="초보자를 위한 주식투자 완벽 가이드 2024"
        />
        <meta
          name="twitter:description"
          content="주식 투자를 시작하는 초보자를 위한 완벽 가이드"
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/stock-guide.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              초보자를 위한 주식투자 완벽 가이드 2024
            </h1>
            <p className="text-lg text-gray-600">
              처음 시작하는 투자, 올바른 방법으로 시작하세요
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 주식투자 시작하기 전에
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                주식투자를 시작하기 전에 반드시 알아야 할 기본적인 내용들을
                살펴보겠습니다. 성공적인 투자를 위해서는 충분한 사전 지식과
                준비가 필요합니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 투자 전 필수 체크리스트
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>투자 가능한 자금 확인 (생활자금과 분리)</li>
                <li>투자 목표 설정 (수익률, 기간)</li>
                <li>기본적인 재무지식 습득</li>
                <li>증권사 계좌 개설</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 주식시장의 기본 이해
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                주식시장은 기업의 가치와 미래 전망이 거래되는 곳입니다. 기본적인
                시장 메커니즘을 이해하는 것이 중요합니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주식시장의 작동 원리
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>주식이란? (기업 소유권의 개념)</li>
                <li>주가 결정 요인</li>
                <li>매수/매도 원리</li>
                <li>시장 참여자들의 역할</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 기본적 분석과 기술적 분석
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                주식 투자에는 크게 두 가지 분석 방법이 있습니다. 각각의 장단점을
                이해하고 적절히 활용하는 것이 중요합니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 기본적 분석 (Fundamental Analysis)
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>재무제표 분석</li>
                <li>산업 분석</li>
                <li>경영진 평가</li>
                <li>실적 전망</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 기술적 분석 (Technical Analysis)
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>차트 패턴</li>
                <li>이동평균선</li>
                <li>거래량 분석</li>
                <li>보조지표 활용</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 실전 투자 전략
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                성공적인 투자를 위한 실전 전략과 주의사항을 알아보겠습니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 투자 전략 수립
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>포트폴리오 구성 전략</li>
                <li>매수/매도 타이밍</li>
                <li>손절과 익절 기준</li>
                <li>리스크 관리 방법</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 주의해야 할 투자 함정
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                초보 투자자들이 자주 빠지는 함정들과 이를 피하는 방법을
                살펴보겠습니다.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>과도한 레버리지 사용</li>
                <li>군중심리에 휘둘림</li>
                <li>검증되지 않은 정보 맹신</li>
                <li>감정적 투자 결정</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 투자 성공을 위한 마인드셋
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                성공적인 투자자가 되기 위해 필요한 마음가짐과 습관을
                알아보겠습니다.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>장기적 관점 유지</li>
                <li>감정 컨트롤의 중요성</li>
                <li>지속적인 공부와 시장 분석</li>
                <li>실수를 통한 학습</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              📈 더 자세한 투자 정보와 실시간 시장 분석을 원하시나요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                투자 뉴스레터 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(investmentGuideData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
