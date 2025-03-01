import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const realEstateData = {
    marketTrends: [
      {
        region: "수도권",
        trends: {
          price: "전년 대비 2% 하락",
          transaction: "거래량 30% 감소",
          forecast: "2024년 하반기 반등 예상",
        },
      },
      {
        region: "지방광역시",
        trends: {
          price: "전년 대비 1.5% 하락",
          transaction: "거래량 25% 감소",
          forecast: "2024년 보합세 전망",
        },
      },
    ],
    lastUpdated: new Date().toISOString(),
    author: "부동산분석팀",
    category: "시장분석",
  };

  return {
    props: {
      realEstateData,
    },
    revalidate: 43200, // 12시간
  };
}

export default function RealEstateAnalysis({ realEstateData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          2024 부동산 시장 분석 및 전망: 지역별 시장 동향과 투자 전략
        </title>
        <meta
          name="description"
          content="2024년 부동산 시장 동향과 투자 전망을 분석합니다. 지역별 시장 상황, 정책 변화, 투자 기회 등 심층 분석 제공."
        />
        <meta
          name="keywords"
          content="부동산시장, 부동산전망, 부동산분석, 부동산투자, 아파트시장, 주택시장, 부동산정책"
        />
        <meta name="author" content="부동산분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 부동산 시장 분석 및 전망: 지역별 시장 동향과 투자 전략"
        />
        <meta
          property="og:description"
          content="2024년 부동산 시장 동향과 투자 전망을 분석합니다. 지역별 시장 상황, 정책 변화, 투자 기회 등 심층 분석 제공."
        />
        <meta
          property="og:image"
          content="https://your-domain.com/images/real-estate-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://your-domain.com/real-estate-analysis"
        />
        <meta property="og:site_name" content="부동산 시장 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 부동산 시장 분석 및 전망" />
        <meta
          name="twitter:description"
          content="2024년 부동산 시장 동향과 투자 전망 분석"
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/real-estate-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 부동산 시장 분석 및 전망
            </h1>
            <p className="text-lg text-gray-600">
              지역별 시장 동향과 투자 전략 가이드
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 2024년 부동산 시장 개관
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 부동산 시장은 금리 정책 변화와 정부의 규제 완화 기조
                속에서 점진적인 회복세를 보일 것으로 전망됩니다. 다만, 지역별로
                차별화된 양상이 나타날 것으로 예상됩니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 시장 특징
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>금리 상승기 마무리와 시장 안정화</li>
                <li>매수심리 점진적 회복</li>
                <li>지역별 양극화 심화</li>
                <li>정비사업 활성화 기대</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 지역별 시장 동향
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 수도권 시장
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>서울: 재건축/재개발 기대감으로 일부 지역 상승</li>
                <li>경기: 교통호재 지역 중심 수요 증가</li>
                <li>인천: 개발 호재 지역 선별적 관심</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 지방 광역시
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>부산: 광역교통망 확충 효과 기대</li>
                <li>대구: 도심 재개발 사업 진행</li>
                <li>기타 광역시: 지역 경제 여건에 따른 차별화</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 부동산 정책 분석
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                정부의 부동산 정책 기조 변화와 주요 제도 개편 내용을 분석합니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 정책 변화
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>대출규제 완화 정책</li>
                <li>재건축/재개발 규제 정비</li>
                <li>세제 개편 방향</li>
                <li>임대차 제도 변화</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 유형별 시장 전망
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주거용 부동산
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>아파트: 입지/품질에 따른 양극화 심화</li>
                <li>빌라/연립: 실수요 중심 거래 예상</li>
                <li>오피스텔: 임대수익률 중심 투자 지속</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 상업용 부동산
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>오피스: 프라임급 중심 수요 유지</li>
                <li>상가: 상권별 차별화 뚜렷</li>
                <li>물류센터: 이커머스 성장에 따른 수요 지속</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 투자 전략 제안
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 부동산 시장 환경을 고려한 투자 전략을 제시합니다.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>입지가 검증된 역세권 물건 선별</li>
                <li>임대수익률 중심의 투자 접근</li>
                <li>개발 호재 지역 중장기 투자</li>
                <li>정비사업 진행 단지 기회 모색</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 리스크 요인 점검
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>금리 변동성에 따른 시장 영향</li>
                <li>정책 변화 가능성</li>
                <li>경기 침체 위험</li>
                <li>인구구조 변화 영향</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              🏘️ 더 자세한 부동산 시장 분석과 투자 정보를 원하시나요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                부동산 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(realEstateData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
