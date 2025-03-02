import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const pensionData = {
    marketOverview: {
      pensionFunds: {
        totalAum: "1,000조원",
        yearToDateReturn: "+8%",
      },
      assetAllocation: {
        stocks: "40%",
        bonds: "45%",
        alternatives: "15%",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "연금자산관리팀",
    category: "연금투자",
  };

  return {
    props: {
      pensionData,
    },
  };
}

export default function RetirementPensionManagement({ pensionData }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          퇴직연금 관리 - 효율적인 연금자산 운용 전략 | 안트이코노미
        </title>
        <meta
          name="description"
          content="퇴직연금 자산의 효율적인 운용 방안과 전략을 제시합니다. 연금 제도, 자산 배분, 리스크 관리 등 체계적인 연금 자산 관리 방안을 안내합니다."
        />
        <meta
          name="keywords"
          content="퇴직연금, 연금관리, 연금투자, 자산배분, 연금제도, 노후준비, 연금운용, 연금전략"
        />
        <meta name="author" content="연금자산관리팀" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="퇴직연금 관리 - 효율적인 연금자산 운용 전략 | 안트이코노미"
        />
        <meta
          property="og:description"
          content="퇴직연금 자산의 효율적인 운용 방안과 전략을 제시합니다. 연금 제도, 자산 배분, 리스크 관리 등 체계적인 연금 자산 관리 방안을 안내합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/pension-2024.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/retirement-pension-management"
        />
        <meta property="og:site_name" content="연금자산관리센터" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="퇴직연금 관리" />
        <meta
          name="twitter:description"
          content="퇴직연금 자산의 효율적인 운용 방안과 전략을 제시합니다."
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/pension-2024.jpg"
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/retirement-pension-management"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            퇴직연금 관리: 안정적인 노후를 위한 효율적 자산 운용
          </h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 퇴직연금 제도의 이해
            </h2>
            <p className="mb-6">
              퇴직연금은 근로자의 안정적인 노후 생활을 보장하기 위한 중요한
              제도입니다. 제도의 특성과 운용 방식을 이해하는 것이 효율적인 자산
              관리의 첫걸음입니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 제도 유형
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>확정급여형(DB)</li>
              <li>확정기여형(DC)</li>
              <li>개인형 퇴직연금(IRP)</li>
              <li>중소기업퇴직연금기금제도</li>
              <li>혼합형 퇴직연금제도</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 연금자산 운용 전략
            </h2>
            <p className="mb-6">
              퇴직연금 자산의 효율적인 운용을 위해서는 체계적인 전략 수립이
              필요합니다. 개인의 상황과 목표에 맞는 맞춤형 전략을 구축해야
              합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              자산배분 전략
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>연령별 포트폴리오 구성</li>
              <li>위험 성향별 자산 배분</li>
              <li>시장 상황별 대응 전략</li>
              <li>장기 투자 원칙</li>
              <li>정기적인 리밸런싱</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              투자 상품 선택
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>원리금보장상품</li>
              <li>채권형 펀드</li>
              <li>주식형 펀드</li>
              <li>혼합형 펀드</li>
              <li>ETF 활용</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 리스크 관리
            </h2>
            <p className="mb-6">
              퇴직연금 자산 운용에는 다양한 리스크가 존재합니다. 이러한 리스크를
              적절히 관리하는 것이 안정적인 수익률 달성의 핵심입니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                주요 리스크 요인
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>시장 리스크: 자산가치 변동</li>
                <li>금리 리스크: 이자율 변화</li>
                <li>인플레이션 리스크</li>
                <li>유동성 리스크</li>
                <li>장수 리스크</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 연금자산 모니터링
            </h2>
            <p className="mb-6">
              퇴직연금 자산의 효율적인 관리를 위해서는 정기적인 모니터링과
              조정이 필요합니다. 시장 상황과 개인의 상황 변화에 맞춰 전략을
              조정해야 합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              모니터링 항목
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>포트폴리오 성과</li>
              <li>자산배분 비율</li>
              <li>수익률 분석</li>
              <li>비용 효율성</li>
              <li>리스크 수준</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 세제 혜택 활용
            </h2>
            <p className="mb-6">
              퇴직연금은 다양한 세제 혜택을 제공합니다. 이러한 혜택을 최대한
              활용하여 실질적인 수익률을 높이는 것이 중요합니다.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                결론: 효율적인 연금자산 관리
              </h2>
              <p className="mb-4">
                퇴직연금은 노후 생활을 위한 중요한 자산입니다. 체계적인 운용
                전략과 리스크 관리를 통해 안정적인 수익을 추구하는 것이
                중요합니다.
              </p>
              <p>
                장기적 관점에서 개인의 상황과 목표에 맞는 전략을 수립하고,
                정기적인 모니터링과 조정을 통해 효율적인 자산 관리를 실현해야
                합니다. 세제 혜택을 최대한 활용하여 실질적인 수익률을 높이는
                것도 중요한 전략입니다.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
