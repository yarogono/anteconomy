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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 글로벌 산업 전망: 주요 산업별 성장 동력과 투자 기회</title>
        <meta
          name="description"
          content="2024년 글로벌 주요 산업의 전망과 투자 기회를 분석합니다. 기술, 헬스케어, 에너지, 소비재, 산업재 등 핵심 섹터의 트렌드와 성장 동력을 전망합니다."
        />
        <meta
          name="keywords"
          content="산업전망, 산업분석, 기술산업, 헬스케어, 에너지산업, 소비재산업, 산업재"
        />
        <meta name="author" content="산업분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 글로벌 산업 전망: 주요 산업별 성장 동력과 투자 기회"
        />
        <meta
          property="og:description"
          content="2024년 글로벌 주요 산업의 전망과 투자 기회를 분석합니다. 기술, 헬스케어, 에너지, 소비재, 산업재 등 핵심 섹터의 트렌드와 성장 동력을 전망합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/industry-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/global-industry-outlook"
        />
        <meta property="og:site_name" content="글로벌 산업 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 글로벌 산업 전망" />
        <meta
          name="twitter:description"
          content="2024년 글로벌 산업 동향과 전망"
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/industry-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 글로벌 산업 전망
            </h1>
            <p className="text-lg text-gray-600">
              주요 산업별 성장 동력과 투자 기회
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 글로벌 산업 환경
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 글로벌 산업은 디지털 전환, 지속가능성, 공급망 재편 등
                구조적 변화가 가속화될 전망입니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 트렌드
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>디지털 혁신</li>
                <li>친환경 전환</li>
                <li>공급망 재구성</li>
                <li>산업 융합</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 기술/IT 산업
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 성장 동력
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>AI/머신러닝</li>
                <li>클라우드 컴퓨팅</li>
                <li>5G/6G 네트워크</li>
                <li>사이버보안</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 기업 동향
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>빅테크 기업 전략</li>
                <li>신규 기술 투자</li>
                <li>규제 대응</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 헬스케어 산업
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 혁신 분야
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>디지털 헬스케어</li>
                <li>바이오테크</li>
                <li>원격의료</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 시장 기회
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>개인맞춤의료</li>
                <li>예방의료</li>
                <li>의료데이터</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 에너지/소재 산업
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>친환경 에너지</li>
                <li>배터리 기술</li>
                <li>수소 경제</li>
                <li>신소재 개발</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 소비재/유통 산업
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>온라인 커머스</li>
                <li>구독경제</li>
                <li>지속가능 소비</li>
                <li>옴니채널</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 투자 포인트
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>산업별 성장성</li>
                <li>경쟁력 분석</li>
                <li>규제 영향</li>
                <li>투자 타이밍</li>
                <li>리스크 요인</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              🏭 더 자세한 산업 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                산업 분석 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(industryData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
