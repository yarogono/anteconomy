import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const cryptoData = {
    marketOverview: {
      bitcoin: {
        currentPrice: "$52,000",
        yearToDateChange: "+25%",
        marketDominance: "45%",
      },
      ethereum: {
        currentPrice: "$2,800",
        yearToDateChange: "+20%",
        marketDominance: "18%",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "암호화폐분석팀",
    category: "시장전망",
  };

  return {
    props: {
      cryptoData,
    },
    revalidate: 43200, // 12시간
  };
}

export default function CryptoMarketOutlook({ cryptoData }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2024 암호화폐 시장 전망: 비트코인과 주요 알트코인 분석</title>
        <meta
          name="description"
          content="2024년 암호화폐 시장 동향과 투자 전망을 분석합니다. 비트코인, 이더리움 등 주요 코인의 기술적 발전과 제도적 변화를 심층 분석합니다."
        />
        <meta
          name="keywords"
          content="암호화폐, 비트코인, 이더리움, 블록체인, 가상자산, 디지털자산, 암호화폐투자"
        />
        <meta name="author" content="암호화폐분석팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2024 암호화폐 시장 전망: 비트코인과 주요 알트코인 분석"
        />
        <meta
          property="og:description"
          content="2024년 암호화폐 시장 동향과 투자 전망을 분석합니다. 비트코인, 이더리움 등 주요 코인의 기술적 발전과 제도적 변화를 심층 분석합니다."
        />
        <meta
          property="og:image"
          content="https://your-domain.com/images/crypto-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://your-domain.com/crypto-market-outlook"
        />
        <meta property="og:site_name" content="암호화폐 시장 분석 센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2024 암호화폐 시장 전망" />
        <meta
          name="twitter:description"
          content="2024년 암호화폐 시장 동향과 투자 전망 분석"
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/images/crypto-2024.jpg"
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white shadow-lg rounded-lg p-6">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              2024 암호화폐 시장 전망
            </h1>
            <p className="text-lg text-gray-600">
              비트코인과 주요 알트코인의 미래를 전망합니다
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 2024년 암호화폐 시장 개관
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 암호화폐 시장은 제도화와 기술 혁신이 가속화되는 한 해가
                될 것으로 전망됩니다. 특히 비트코인 ETF 승인과 이더리움의 기술적
                발전이 시장의 주요 변곡점이 될 것으로 예상됩니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 시장 동향
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>기관 투자자들의 참여 확대</li>
                <li>규제 프레임워크 구체화</li>
                <li>DeFi 생태계 성장</li>
                <li>Web3 기술 발전</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 주요 코인별 전망
            </h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 비트코인 (Bitcoin)
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>ETF 상품 출시에 따른 수요 증가</li>
                <li>기관 투자자들의 자산 배분 확대</li>
                <li>반감기 이벤트 영향</li>
                <li>글로벌 경제 불확실성에 따른 안전자산 역할</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 이더리움 (Ethereum)
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Layer 2 솔루션 발전</li>
                <li>DeFi 생태계 확장</li>
                <li>지분증명(PoS) 안정화</li>
                <li>기업용 블록체인 도입 확대</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 기술적 발전 동향
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                블록체인 기술의 발전과 실용적 응용 사례가 증가하고 있습니다.
              </p>
              <h3 className="text-xl font-medium text-gray-800 mt-4 mb-2">
                ▶ 주요 기술 트렌드
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>확장성 솔루션 발전</li>
                <li>상호운용성 향상</li>
                <li>프라이버시 기술 개선</li>
                <li>스마트 컨트랙트 고도화</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 규제 환경 변화
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                글로벌 규제 환경이 점차 명확해지면서 시장의 제도화가 가속화될
                전망입니다.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>미국 SEC의 규제 방향</li>
                <li>각국의 CBDC 개발 현황</li>
                <li>글로벌 자금세탁방지 규제</li>
                <li>기관 투자자 진입 장벽 완화</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 투자 전략 제안
            </h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                2024년 암호화폐 시장 환경을 고려한 투자 전략을 제시합니다.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>포트폴리오 분산 전략</li>
                <li>DCA(Dollar Cost Averaging) 접근</li>
                <li>기술적 가치 중심의 코인 선별</li>
                <li>리스크 관리의 중요성</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. 주의해야 할 리스크
            </h2>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 mb-4">
                <li>규제 리스크</li>
                <li>시장 변동성</li>
                <li>기술적 취약점</li>
                <li>사기/해킹 위험</li>
                <li>거시경제 영향</li>
              </ul>
            </div>
          </section>

          <footer className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              💰 더 자세한 암호화폐 시장 분석과 투자 정보를 원하시나요?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                암호화폐 리포트 구독하기
              </a>
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              마지막 업데이트:{" "}
              {new Date(cryptoData.lastUpdated).toLocaleDateString()}
            </p>
          </footer>
        </article>
      </main>
    </div>
  );
}
