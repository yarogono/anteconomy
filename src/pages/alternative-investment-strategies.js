import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const alternativeData = {
    marketOverview: {
      sectors: {
        privateEquity: "사모펀드",
        realEstate: "부동산",
        infrastructure: "인프라",
        hedge: "헤지펀드",
      },
      marketSize: {
        total: "$15조",
        growth: "+12%",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "대체투자분석팀",
    category: "대체투자",
  };

  return {
    props: {
      alternativeData,
    },
  };
}

export default function AlternativeInvestmentStrategies({ alternativeData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          2024 대체투자 전략: 새로운 수익원 발굴과 포트폴리오 다각화
        </title>
        <meta
          name="description"
          content="2024년 대체투자 시장의 기회와 전략을 분석합니다. 사모펀드, 부동산, 인프라, 헤지펀드 등 다양한 대체투자 상품의 특징과 투자 방안을 제시합니다."
        />
        <meta
          name="keywords"
          content="대체투자, 사모펀드, 부동산투자, 인프라투자, 헤지펀드, 벤처투자, 실물자산"
        />
        <meta name="author" content="대체투자분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 대체투자 전략: 새로운 수익원 발굴과 포트폴리오 다각화"
        />
        <meta
          property="og:description"
          content="2024년 대체투자 시장의 기회와 전략을 분석합니다. 사모펀드, 부동산, 인프라, 헤지펀드 등 다양한 대체투자 상품의 특징과 투자 방안을 제시합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/alternative-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/alternative-investment-strategies"
        />
        <meta property="og:site_name" content="대체투자 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 대체투자 전략" />
        <meta
          name="twitter:description"
          content="2024년 대체투자 시장 동향과 전략"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/alternative-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 대체투자 전략
            </h1>
            <p className="text-lg text-gray-600">
              새로운 수익원 발굴과 포트폴리오 다각화
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 대체투자 시장 개관
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 대체투자 시장은 저금리 환경과 전통자산의 높은
                밸류에이션으로 인해 투자자들의 관심이 높아지고 있습니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 투자 테마
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>디지털 자산</li>
                <li>지속가능 인프라</li>
                <li>혁신 기술</li>
                <li>실물자산</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 사모펀드 투자
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ PE/VC
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>성장 기업 투자</li>
                <li>바이아웃 전략</li>
                <li>벤처캐피탈 투자</li>
                <li>세컨더리 시장</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 사모대출
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>직접대출</li>
                <li>메자닌</li>
                <li>부실채권</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 실물자산 투자
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 부동산
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>오피스/물류</li>
                <li>데이터센터</li>
                <li>임대주택</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 인프라
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>재생에너지</li>
                <li>디지털 인프라</li>
                <li>교통/물류</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 헤지펀드 전략
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>롱/숏 전략</li>
                <li>글로벌 매크로</li>
                <li>이벤트 드리븐</li>
                <li>멀티 스트래티지</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 포트폴리오 구성
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>자산배분 전략</li>
                <li>상관관계 분석</li>
                <li>유동성 관리</li>
                <li>위험 분산</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 리스크 관리
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>유동성 리스크</li>
                <li>운용사 리스크</li>
                <li>레버리지 리스크</li>
                <li>규제 리스크</li>
                <li>가치평가 리스크</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              💎 더 자세한 대체투자 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                대체투자 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(alternativeData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
