import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function LTVDTICalculator() {
  const [housePrice, setHousePrice] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyDebt, setMonthlyDebt] = useState("");
  const [results, setResults] = useState(null);

  // 구조화된 데이터 생성
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "LTV/DTI 계산기 - 주택담보대출 한도 계산",
    description:
      "주택가격, 대출금액, 소득, 부채를 고려하여 LTV와 DTI를 계산하는 온라인 계산기입니다.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    featureList: [
      "주택가격 입력",
      "대출금액 입력",
      "연소득/월소득 입력",
      "월 부채상환액 입력",
      "LTV 계산",
      "DTI 계산",
      "상세 분석 제공",
    ],
  };

  const calculateRatios = () => {
    const house = parseFloat(housePrice.replace(/,/g, "")) || 0;
    const loan = parseFloat(loanAmount.replace(/,/g, "")) || 0;
    const annual = parseFloat(annualIncome.replace(/,/g, "")) || 0;
    const monthly = parseFloat(monthlyIncome.replace(/,/g, "")) || 0;
    const debt = parseFloat(monthlyDebt.replace(/,/g, "")) || 0;

    if (!house || !loan || (!annual && !monthly)) return;

    const monthlyIncomeForDTI = monthly || annual / 12;
    const ltv = (loan / house) * 100;
    const dti = (debt / monthlyIncomeForDTI) * 100;

    setResults({
      housePrice: house,
      loanAmount: loan,
      monthlyIncome: monthlyIncomeForDTI,
      monthlyDebt: debt,
      ltv,
      dti,
    });
  };

  const formatNumber = (num) => {
    return num.toLocaleString("ko-KR", {
      maximumFractionDigits: 0,
    });
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>LTV/DTI 계산기 - 주택담보대출 한도 계산</title>
        <meta
          name="description"
          content="주택가격, 대출금액, 소득, 부채를 고려하여 LTV와 DTI를 계산해보세요. 주택담보대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="LTV 계산기, DTI 계산기, 주택담보대출, 대출한도, 부채상환비율, 주택가격"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/ltv-dti-calculator"
        />
        <meta
          property="og:title"
          content="LTV/DTI 계산기 - 주택담보대출 한도 계산"
        />
        <meta
          property="og:description"
          content="주택가격, 대출금액, 소득, 부채를 고려하여 LTV와 DTI를 계산해보세요. 주택담보대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/ltv-dti-calculator"
        />
        <meta
          property="twitter:title"
          content="LTV/DTI 계산기 - 주택담보대출 한도 계산"
        />
        <meta
          property="twitter:description"
          content="주택가격, 대출금액, 소득, 부채를 고려하여 LTV와 DTI를 계산해보세요. 주택담보대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
        />
        <meta
          property="twitter:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="anteconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/ltv-dti-calculator"
        />

        {/* 구조화된 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </nav>

          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">LTV/DTI 계산기</h1>
            <p className="text-lg text-gray-300">
              주택가격, 대출금액, 소득, 부채를 고려하여 LTV와 DTI를
              계산해보세요.
            </p>
          </header>

          <AdsenseAd slot="ltv-dti-calculator-top" />

          <main>
            <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-xl font-bold mb-6">주택 정보 입력</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    주택가격
                  </label>
                  <input
                    type="text"
                    value={housePrice}
                    onChange={(e) =>
                      setHousePrice(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 500,000,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    대출금액
                  </label>
                  <input
                    type="text"
                    value={loanAmount}
                    onChange={(e) =>
                      setLoanAmount(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 400,000,000"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-6">소득 정보 입력</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    연소득
                  </label>
                  <input
                    type="text"
                    value={annualIncome}
                    onChange={(e) =>
                      setAnnualIncome(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 50,000,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    월소득
                  </label>
                  <input
                    type="text"
                    value={monthlyIncome}
                    onChange={(e) =>
                      setMonthlyIncome(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 4,000,000"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-6">부채 정보 입력</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    월 부채상환액
                  </label>
                  <input
                    type="text"
                    value={monthlyDebt}
                    onChange={(e) =>
                      setMonthlyDebt(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 1,500,000"
                  />
                </div>
              </div>

              <button
                onClick={calculateRatios}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition-colors"
                aria-label="LTV/DTI 계산하기"
              >
                계산하기
              </button>
            </section>

            {results && (
              <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold mb-4">계산 결과</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">
                      LTV (Loan to Value)
                    </div>
                    <div className="text-xl font-bold">
                      {results.ltv.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">
                      DTI (Debt to Income)
                    </div>
                    <div className="text-xl font-bold">
                      {results.dti.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">주택가격</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.housePrice)}원
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">대출금액</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.loanAmount)}원
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">월 소득</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.monthlyIncome)}원
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">월 부채상환액</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.monthlyDebt)}원
                    </div>
                  </div>
                </div>
              </section>
            )}

            <AdsenseAd slot="ltv-dti-calculator-bottom" />

            <section className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">LTV/DTI 계산기 안내</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="font-bold text-green-300">LTV란?</h3>
                  <p className="text-sm">
                    Loan to Value ratio는 주택가격 대비 대출금액의 비율을
                    나타내는 지표입니다. 주택담보대출의 위험도를 평가하는 중요한
                    지표로 사용됩니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">DTI란?</h3>
                  <p className="text-sm">
                    Debt to Income ratio는 월 소득 대비 부채상환액의 비율을
                    나타내는 지표입니다. 가계의 부채상환능력을 평가하는 중요한
                    지표로 사용됩니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">계산 방법</h3>
                  <p className="text-sm">
                    LTV = (대출금액 / 주택가격) × 100
                    <br />
                    DTI = (월 부채상환액 / 월 소득) × 100
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">기준</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>LTV 기준</li>
                    <ul className="list-disc list-inside ml-4">
                      <li>일반: 40% 이하</li>
                      <li>청년: 50% 이하</li>
                      <li>신혼: 60% 이하</li>
                    </ul>
                    <li>DTI 기준</li>
                    <ul className="list-disc list-inside ml-4">
                      <li>일반: 40% 이하</li>
                      <li>청년: 50% 이하</li>
                      <li>신혼: 60% 이하</li>
                    </ul>
                  </ul>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">주의사항</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>
                      실제 대출 시에는 추가적인 소득과 지출이 고려될 수
                      있습니다.
                    </li>
                    <li>
                      은행별로 LTV/DTI 기준이 다를 수 있으므로, 실제 대출 시에는
                      해당 은행의 기준을 확인하세요.
                    </li>
                    <li>
                      계산 결과는 참고용이며, 실제 대출 심사 결과와 다를 수
                      있습니다.
                    </li>
                  </ul>
                </article>
              </div>
            </section>
          </main>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
