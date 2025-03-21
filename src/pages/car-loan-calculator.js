import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanTerm, setLoanTerm] = useState("60");
  const [interestRate, setInterestRate] = useState("3.5");
  const [results, setResults] = useState(null);

  // 구조화된 데이터 생성
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "자동차 할부 계산기",
    description:
      "자동차 구매 시 할부금액과 이자를 계산하는 온라인 계산기입니다.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    featureList: [
      "차량 가격 입력",
      "할부 개월 선택",
      "이자율 설정",
      "월 납입금 계산",
      "총 이자 계산",
      "상세 상환 스케줄 제공",
    ],
  };

  const calculateLoan = () => {
    const price = parseFloat(carPrice.replace(/,/g, ""));
    const down = parseFloat(downPayment.replace(/,/g, ""));
    const term = parseInt(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    if (!price || !down || !term || !rate) return;

    const loanAmount = price - down;
    const monthlyPayment =
      (loanAmount * rate * Math.pow(1 + rate, term)) /
      (Math.pow(1 + rate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - loanAmount;

    // 상환 스케줄 계산
    const paymentSchedule = [];
    let remainingBalance = loanAmount;
    for (let i = 1; i <= term; i++) {
      const interestPayment = remainingBalance * rate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      paymentSchedule.push({
        month: i,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        remaining: Math.max(0, remainingBalance),
      });
    }

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      paymentSchedule,
      loanAmount,
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
        <title>자동차 할부 계산기 - 차량 구매 할부금액 계산</title>
        <meta
          name="description"
          content="자동차 구매 시 할부금액과 이자를 계산해보세요. 차량 가격, 할부 개월, 이자율을 입력하여 월납금액과 총 이자를 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="자동차 할부 계산기, 차량 할부 계산, 자동차 구매 계산기, 차량 구매 이자 계산, 자동차 할부금액"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/car-loan-calculator"
        />
        <meta
          property="og:title"
          content="자동차 할부 계산기 - 차량 구매 할부금액 계산"
        />
        <meta
          property="og:description"
          content="자동차 구매 시 할부금액과 이자를 계산해보세요. 차량 가격, 할부 개월, 이자율을 입력하여 월납금액과 총 이자를 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/car-loan-calculator"
        />
        <meta
          property="twitter:title"
          content="자동차 할부 계산기 - 차량 구매 할부금액 계산"
        />
        <meta
          property="twitter:description"
          content="자동차 구매 시 할부금액과 이자를 계산해보세요. 차량 가격, 할부 개월, 이자율을 입력하여 월납금액과 총 이자를 확인할 수 있습니다."
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
          href="https://anteconomy.co.kr/car-loan-calculator"
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
            <h1 className="text-3xl font-bold mb-4">자동차 할부 계산기</h1>
            <p className="text-lg text-gray-300">
              차량 구매 시 할부금액과 이자를 계산해보세요.
            </p>
          </header>

          <AdsenseAd slot="car-loan-calculator-top" />

          <main>
            <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-xl font-bold mb-6">차량 정보 입력</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    차량 가격
                  </label>
                  <input
                    type="text"
                    value={carPrice}
                    onChange={(e) =>
                      setCarPrice(
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
                    계약금
                  </label>
                  <input
                    type="text"
                    value={downPayment}
                    onChange={(e) =>
                      setDownPayment(
                        e.target.value
                          .replace(/[^0-9]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 10,000,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    할부 개월
                  </label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="12">12개월</option>
                    <option value="24">24개월</option>
                    <option value="36">36개월</option>
                    <option value="48">48개월</option>
                    <option value="60">60개월</option>
                    <option value="72">72개월</option>
                    <option value="84">84개월</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    연이자율 (%)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="예: 3.5"
                    step="0.1"
                  />
                </div>
              </div>

              <button
                onClick={calculateLoan}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition-colors"
                aria-label="자동차 할부금액 계산하기"
              >
                계산하기
              </button>
            </section>

            {results && (
              <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold mb-4">계산 결과</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">월 납입금</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.monthlyPayment)}원
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">총 상환금액</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.totalPayment)}원
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">총 이자</div>
                    <div className="text-xl font-bold">
                      {formatNumber(results.totalInterest)}원
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">회차</th>
                        <th className="p-2 text-right">납입금</th>
                        <th className="p-2 text-right">원금</th>
                        <th className="p-2 text-right">이자</th>
                        <th className="p-2 text-right">남은원금</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.paymentSchedule.map((payment, index) => (
                        <tr key={index} className="border-t">
                          <td className="p-2">{payment.month}</td>
                          <td className="p-2 text-right">
                            {formatNumber(payment.payment)}
                          </td>
                          <td className="p-2 text-right">
                            {formatNumber(payment.principal)}
                          </td>
                          <td className="p-2 text-right">
                            {formatNumber(payment.interest)}
                          </td>
                          <td className="p-2 text-right">
                            {formatNumber(payment.remaining)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <AdsenseAd slot="car-loan-calculator-bottom" />

            <section className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">
                자동차 할부 계산기 안내
              </h2>
              <div className="space-y-4">
                <article>
                  <h3 className="font-bold text-green-300">계산 방법</h3>
                  <p className="text-sm">
                    원리금균등상환 방식을 사용하여 계산합니다. 매월 동일한
                    금액을 납입하며, 초기에는 이자가 많고 원금이 적게 상환되며,
                    시간이 지날수록 이자는 줄어들고 원금 상환액이 늘어납니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">입력 항목</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>차량 가격: 구매하고자 하는 차량의 총 가격</li>
                    <li>계약금: 차량 구매 시 지불하는 초기 계약금</li>
                    <li>할부 개월: 원리금 상환 기간</li>
                    <li>연이자율: 연간 적용되는 이자율</li>
                  </ul>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">주의사항</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>실제 대출 시에는 추가 수수료가 발생할 수 있습니다.</li>
                    <li>이자율은 시장 상황에 따라 변동될 수 있습니다.</li>
                    <li>
                      계산 결과는 참고용이며, 실제 대출 조건과 다를 수 있습니다.
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
