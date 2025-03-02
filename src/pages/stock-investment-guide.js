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
  };
}

export default function StockInvestmentGuide({ investmentGuideData }) {
  return (
    <>
      <Head>
        <title>
          주식 투자 가이드 - 초보자를 위한 단계별 투자 전략 | 안트이코노미
        </title>
        <meta
          name="description"
          content="주식 투자 초보자를 위한 종합 가이드. 기초 개념부터 실전 투자 전략, 리스크 관리까지 상세히 설명합니다. 성공적인 주식 투자를 위한 모든 정보를 제공합니다."
        />
        <meta
          name="keywords"
          content="주식투자, 주식투자 가이드, 주식 초보, 주식 투자 전략, 주식 분석, 투자 위험관리, 포트폴리오 구성"
        />
        <meta
          property="og:title"
          content="주식 투자 가이드 - 초보자를 위한 단계별 투자 전략 | 안트이코노미"
        />
        <meta
          property="og:description"
          content="주식 투자 초보자를 위한 종합 가이드. 기초 개념부터 실전 투자 전략, 리스크 관리까지 상세히 설명합니다."
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/stock-investment-guide"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            주식 투자 가이드: 초보자를 위한 단계별 투자 전략
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 주식 투자의 기초 이해하기
            </h2>
            <p className="mb-6">
              주식 투자를 시작하기 전에 기본적인 개념을 이해하는 것이
              중요합니다. 주식은 기업의 소유권을 나타내는 증권으로, 주주는
              기업의 성과에 따라 이익을 공유할 수 있습니다. 주식 시장은 이러한
              주식이 거래되는 장소로, 수많은 투자자들의 매수와 매도 주문이 만나
              가격이 결정됩니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주식 투자의 장점
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>장기적인 자산 가치 상승 기대</li>
              <li>배당금을 통한 정기적인 수익</li>
              <li>인플레이션 헤지 효과</li>
              <li>높은 유동성</li>
              <li>다양한 산업과 기업에 투자 가능</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 투자 전 필수 준비사항
            </h2>
            <p className="mb-6">
              성공적인 주식 투자를 위해서는 철저한 준비가 필요합니다. 먼저, 투자
              가능한 자금을 파악하고 비상금을 제외한 여유자금으로 투자를
              시작해야 합니다. 또한, 자신의 투자 성향과 위험 감수 능력을 정확히
              파악하는 것이 중요합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              투자 전 체크리스트
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>충분한 비상금 확보 (최소 6개월치 생활비)</li>
              <li>투자 목표 설정 (수익률, 투자 기간)</li>
              <li>리스크 감수 능력 평가</li>
              <li>증권사 계좌 개설</li>
              <li>기본적인 투자 지식 학습</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 기업 분석 방법
            </h2>
            <p className="mb-6">
              주식 투자에서 가장 중요한 것은 기업 분석입니다. 기업 분석은 크게
              기본적 분석과 기술적 분석으로 나눌 수 있습니다. 기본적 분석은
              기업의 재무제표, 사업 모델, 경쟁력, 산업 환경 등을 분석하는
              것이고, 기술적 분석은 주가 차트와 각종 지표를 통해 매수/매도
              시점을 찾는 것입니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 재무비율 분석
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>PER (주가수익비율): 주가/주당순이익</li>
              <li>PBR (주가순자산비율): 주가/주당순자산</li>
              <li>ROE (자기자본이익률): 순이익/자기자본</li>
              <li>부채비율: 부채/자기자본</li>
              <li>배당수익률: 주당배당금/주가</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 포트폴리오 구성 전략
            </h2>
            <p className="mb-6">
              분산 투자는 리스크를 줄이는 가장 효과적인 방법입니다. 포트폴리오를
              구성할 때는 산업별, 국가별, 기업 규모별로 적절히 분산하는 것이
              중요합니다. 또한, 자신의 투자 성향에 맞춰 성장주와 가치주,
              배당주의 비중을 조절해야 합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              효과적인 포트폴리오 구성 방법
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>산업별 분산: 특정 산업에 치중하지 않기</li>
              <li>시가총액별 분산: 대형주, 중형주, 소형주 적절히 배분</li>
              <li>국가별 분산: 국내외 주식 비중 조절</li>
              <li>투자 스타일별 분산: 가치주, 성장주, 배당주 조합</li>
              <li>정기적인 포트폴리오 리밸런싱</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 리스크 관리와 손실 방지
            </h2>
            <p className="mb-6">
              주식 투자에서 리스크 관리는 성공의 핵심입니다. 투자금 관리, 손절매
              기준 설정, 분할 매수/매도 전략 등을 통해 리스크를 효과적으로
              관리할 수 있습니다. 또한, 시장 상황에 따라 현금 비중을 조절하는
              것도 중요한 전략입니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 리스크 관리 전략
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>투자금 분할 매수</li>
              <li>손절매 기준 설정</li>
              <li>목표 수익률 설정</li>
              <li>레버리지 사용 자제</li>
              <li>시장 상황에 따른 현금 비중 조절</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 장기 투자의 중요성
            </h2>
            <p className="mb-6">
              성공적인 주식 투자의 핵심은 장기 투자입니다. 단기 매매는 높은
              수수료와 세금, 그리고 감정적 의사결정으로 인한 손실 위험이 큽니다.
              반면, 장기 투자는 복리 효과를 통해 안정적인 수익을 얻을 수 있으며,
              시장의 단기적 변동성에 덜 영향을 받습니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                투자 성공을 위한 핵심 포인트
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>충분한 사전 학습과 준비</li>
                <li>분산 투자를 통한 리스크 관리</li>
                <li>감정적 투자 결정 피하기</li>
                <li>장기적 관점 유지</li>
                <li>정기적인 포트폴리오 점검과 조정</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
