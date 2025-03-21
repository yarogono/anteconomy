import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function DSRCalculator() {
  const [annualIncome, setAnnualIncome] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [housingLoan, setHousingLoan] = useState("");
  const [creditLoan, setCreditLoan] = useState("");
  const [otherLoan, setOtherLoan] = useState("");
  const [results, setResults] = useState(null);

  // 구조화된 데이터 생성
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "DSR(총부채원리금상환비율) 계산기",
    description:
      "주택담보대출, 신용대출, 기타대출의 원리금상환액을 고려하여 DSR을 계산하는 온라인 계산기입니다.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    featureList: [
      "연소득 입력",
      "월소득 입력",
      "주택담보대출 상환액 입력",
      "신용대출 상환액 입력",
      "기타대출 상환액 입력",
      "DSR 계산",
      "상세 분석 제공",
    ],
  };

  const calculateDSR = () => {
    const annual = parseFloat(annualIncome.replace(/,/g, "")) || 0;
    const monthly = parseFloat(monthlyIncome.replace(/,/g, "")) || 0;
    const housing = parseFloat(housingLoan.replace(/,/g, "")) || 0;
    const credit = parseFloat(creditLoan.replace(/,/g, "")) || 0;
    const other = parseFloat(otherLoan.replace(/,/g, "")) || 0;

    if (!annual && !monthly) return;

    const monthlyIncomeForDSR = monthly || annual / 12;
    const totalMonthlyPayment = housing + credit + other;
    const dsr = (totalMonthlyPayment / monthlyIncomeForDSR) * 100;

    setResults({
      monthlyIncome: monthlyIncomeForDSR,
      totalMonthlyPayment,
      dsr,
      housing,
      credit,
      other,
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
        <title>DSR(총부채원리금상환비율) 계산기 - 대출 상환능력 분석</title>
        <meta
          name="description"
          content="주택담보대출, 신용대출, 기타대출의 원리금상환액을 고려하여 DSR을 계산해보세요. 연소득, 월소득, 각종 대출의 월 상환액을 입력하여 총부채원리금상환비율을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="DSR 계산기, 총부채원리금상환비율, 대출 상환능력, 주택담보대출, 신용대출, 기타대출"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/dsr-calculator"
        />
        <meta
          property="og:title"
          content="DSR(총부채원리금상환비율) 계산기 - 대출 상환능력 분석"
        />
        <meta
          property="og:description"
          content="주택담보대출, 신용대출, 기타대출의 원리금상환액을 고려하여 DSR을 계산해보세요. 연소득, 월소득, 각종 대출의 월 상환액을 입력하여 총부채원리금상환비율을 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/dsr-calculator"
        />
        <meta
          property="twitter:title"
          content="DSR(총부채원리금상환비율) 계산기 - 대출 상환능력 분석"
        />
        <meta
          property="twitter:description"
          content="주택담보대출, 신용대출, 기타대출의 원리금상환액을 고려하여 DSR을 계산해보세요. 연소득, 월소득, 각종 대출의 월 상환액을 입력하여 총부채원리금상환비율을 확인할 수 있습니다."
        />
        <meta
          property="twitter:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="anteconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://anteconomy.co.kr/dsr-calculator" />

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
            <h1 className="text-3xl font-bold mb-4">
              DSR(총부채원리금상환비율) 계산기
            </h1>
            <p className="text-lg text-gray-300">
              주택담보대출, 신용대출, 기타대출의 원리금상환액을 고려하여 DSR을
              계산해보세요.
            </p>
          </header>

          <AdsenseAd slot="dsr-calculator-top" />

          <main>
            <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
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

              <h2 className="text-xl font-bold mb-6">대출 상환액 입력</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    주택담보대출
                  </label>
                  <input
                    type="text"
                    value={housingLoan}
                    onChange={(e) =>
                      setHousingLoan(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 1,500,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    신용대출
                  </label>
                  <input
                    type="text"
                    value={creditLoan}
                    onChange={(e) =>
                      setCreditLoan(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 500,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    기타대출
                  </label>
                  <input
                    type="text"
                    value={otherLoan}
                    onChange={(e) =>
                      setOtherLoan(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 300,000"
                  />
                </div>
              </div>

              <button
                onClick={calculateDSR}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition-colors"
                aria-label="DSR 계산하기"
              >
                계산하기
              </button>
            </section>

            {results && (
              <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold mb-4">계산 결과</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">월 소득</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.monthlyIncome)}원
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">총 월 상환액</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.totalMonthlyPayment)}원
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">DSR</div>
                    <div className="text-xl font-bold">
                      {results.dsr.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">대출 구성</div>
                    <div className="text-sm">
                      <div>주택담보대출: {formatNumber(results.housing)}원</div>
                      <div>신용대출: {formatNumber(results.credit)}원</div>
                      <div>기타대출: {formatNumber(results.other)}원</div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <AdsenseAd slot="dsr-calculator-bottom" />

            <section className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">DSR 계산기 안내</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="font-bold text-green-300">DSR이란?</h3>
                  <p className="text-sm">
                    총부채원리금상환비율(Debt Service Ratio)은 가계의 대출
                    상환능력을 나타내는 지표입니다. 월 소득 대비 원리금 상환액의
                    비율을 계산하여, 가계의 부채상환능력을 평가합니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">계산 방법</h3>
                  <p className="text-sm">
                    DSR = (월 원리금 상환액 / 월 소득) × 100
                    <br />
                    - 월 소득은 연소득을 12로 나눈 금액 또는 직접 입력한
                    월소득을 사용합니다.
                    <br />- 원리금 상환액은 주택담보대출, 신용대출, 기타대출의
                    월 상환액을 합산합니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">DSR 기준</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>40% 미만: 양호</li>
                    <li>40% ~ 60%: 주의</li>
                    <li>60% 이상: 위험</li>
                  </ul>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">주의사항</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>
                      실제 DSR 계산 시에는 추가적인 소득과 지출이 고려될 수
                      있습니다.
                    </li>
                    <li>
                      은행별로 DSR 기준이 다를 수 있으므로, 실제 대출 시에는
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
