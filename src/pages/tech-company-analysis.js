import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const techData = {
    marketOverview: {
      sectors: {
        ai: "인공지능/머신러닝",
        cloud: "클라우드 컴퓨팅",
        semiconductor: "반도체",
        ev: "전기차/자율주행",
      },
      majorCompanies: {
        us: ["Apple", "Microsoft", "Google", "NVIDIA"],
        asia: ["삼성전자", "TSMC", "알리바바"],
        eu: ["ASML", "SAP"],
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "테크기업분석팀",
    category: "기업분석",
  };

  return {
    props: {
      techData,
    },
  };
}

export default function TechCompanyAnalysis({ techData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 글로벌 테크기업 분석: AI, 반도체, 클라우드 산업 전망</title>
        <meta
          name="description"
          content="2024년 주요 테크기업들의 사업 전략과 성장성을 분석합니다. AI, 반도체, 클라우드 등 핵심 기술 산업의 트렌드와 투자 기회를 제시합니다."
        />
        <meta
          name="keywords"
          content="테크기업, AI기업, 반도체기업, 클라우드기업, 기업분석, 실적전망, 투자전략"
        />
        <meta name="author" content="테크기업분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 글로벌 테크기업 분석: AI, 반도체, 클라우드 산업 전망"
        />
        <meta
          property="og:description"
          content="2024년 주요 테크기업들의 사업 전략과 성장성을 분석합니다. AI, 반도체, 클라우드 등 핵심 기술 산업의 트렌드와 투자 기회를 제시합니다."
        />
        <meta
          property="og:image"
          content="https://your-domain.com/images/tech-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://your-domain.com/tech-company-analysis"
        />
        <meta property="og:site_name" content="테크기업 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 글로벌 테크기업 분석" />
        <meta
          name="twitter:description"
          content="2024년 테크기업 동향과 투자 전망"
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/tech-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 글로벌 테크기업 분석
            </h1>
            <p className="text-lg text-gray-600">
              AI, 반도체, 클라우드 산업을 이끄는 기업들
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 테크 산업 트렌드
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 테크 산업은 AI 혁신과 디지털 전환 가속화를 주도하며,
                새로운 성장 기회를 창출할 전망입니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 기술 트렌드
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>생성형 AI 발전</li>
                <li>엣지 컴퓨팅 확산</li>
                <li>양자 컴퓨팅 연구</li>
                <li>메타버스 생태계</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. AI/소프트웨어 기업 분석
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 빅테크 기업
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>마이크로소프트: AI 통합 전략</li>
                <li>구글: AI 연구 개발 현황</li>
                <li>메타: 메타버스 투자</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ AI 전문기업
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>엔비디아: AI 칩 전략</li>
                <li>OpenAI: 기술 혁신</li>
                <li>Anthropic: AI 안전성</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 반도체 기업 분석
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 팹리스 기업
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>AMD: 서버 시장 전략</li>
                <li>퀄컴: 모바일 AP 전망</li>
                <li>애플: 자체 칩 개발</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 종합반도체 기업
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>삼성전자: 파운드리 전략</li>
                <li>TSMC: 공정 기술 개발</li>
                <li>인텔: IDM 2.0 전략</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 클라우드/인터넷 기업
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>아마존: AWS 성장성</li>
                <li>알리바바: 클라우드 전략</li>
                <li>세일즈포스: SaaS 시장</li>
                <li>쇼피파이: 이커머스 플랫폼</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 투자 포인트
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>실적 전망 분석</li>
                <li>기술 경쟁력 평가</li>
                <li>성장 동력 분석</li>
                <li>밸류에이션 검토</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 리스크 요인
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>기술 규제 강화</li>
                <li>경쟁 심화</li>
                <li>거시경제 영향</li>
                <li>지정학적 리스크</li>
                <li>사이버보안 위험</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              💻 더 자세한 테크기업 분석이 필요하신가요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                테크기업 분석 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(techData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
