import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("equal");
  const [results, setResults] = useState(null);

  const calculateLoan = () => {
    const amount = parseFloat(loanAmount.replace(/,/g, ""));
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseInt(loanTerm);

    if (!amount || !rate || !term) return;

    let monthlyPayment = 0;
    let totalPayment = 0;
    let totalInterest = 0;
    let paymentSchedule = [];

    switch (paymentMethod) {
      case "equal": // 원리금균등상환
        monthlyPayment =
          (amount * rate * Math.pow(1 + rate, term)) /
          (Math.pow(1 + rate, term) - 1);
        totalPayment = monthlyPayment * term;
        totalInterest = totalPayment - amount;

        // 상환 스케줄 계산
        let remainingBalance = amount;
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
        break;

      case "principal": // 원금균등상환
        const principalPayment = amount / term;
        let remaining = amount;
        for (let i = 1; i <= term; i++) {
          const interestPayment = remaining * rate;
          const payment = principalPayment + interestPayment;
          remaining -= principalPayment;

          paymentSchedule.push({
            month: i,
            payment: payment,
            principal: principalPayment,
            interest: interestPayment,
            remaining: Math.max(0, remaining),
          });

          totalPayment += payment;
          totalInterest += interestPayment;
        }
        break;

      case "bullet": // 만기일시상환
        const monthlyInterest = amount * rate;
        for (let i = 1; i < term; i++) {
          paymentSchedule.push({
            month: i,
            payment: monthlyInterest,
            principal: 0,
            interest: monthlyInterest,
            remaining: amount,
          });
        }
        paymentSchedule.push({
          month: term,
          payment: amount + monthlyInterest,
          principal: amount,
          interest: monthlyInterest,
          remaining: 0,
        });
        totalPayment = amount + monthlyInterest * term;
        totalInterest = monthlyInterest * term;
        break;
    }

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      paymentSchedule,
    });
  };

  const formatNumber = (num) => {
    return num.toLocaleString("ko-KR", {
      maximumFractionDigits: 0,
    });
  };

  // 구조화된 데이터 생성
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "대출 이자 계산기",
    description:
      "원리금균등상환, 원금균등상환, 만기일시상환 방식의 대출 이자를 계산하는 온라인 계산기입니다.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    featureList: [
      "원리금균등상환 계산",
      "원금균등상환 계산",
      "만기일시상환 계산",
      "상세 상환 스케줄 제공",
      "월 납입금 계산",
      "총 이자 계산",
    ],
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>
          대출 이자 계산기 - 원리금균등상환, 원금균등상환, 만기일시상환 계산
        </title>
        <meta
          name="description"
          content="대출 이자 계산기로 원리금균등상환, 원금균등상환, 만기일시상환 방식의 월납금액과 총 이자를 계산해보세요. 상세 상환 스케줄과 함께 제공됩니다."
        />
        <meta
          name="keywords"
          content="대출 이자 계산기, 원리금균등상환, 원금균등상환, 만기일시상환, 대출 계산기, 이자 계산기, 대출 상환계획, 대출 이자율"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/loan-calculator"
        />
        <meta
          property="og:title"
          content="대출 이자 계산기 - 원리금균등상환, 원금균등상환, 만기일시상환 계산"
        />
        <meta
          property="og:description"
          content="대출 이자 계산기로 원리금균등상환, 원금균등상환, 만기일시상환 방식의 월납금액과 총 이자를 계산해보세요."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/loan-calculator"
        />
        <meta
          property="twitter:title"
          content="대출 이자 계산기 - 원리금균등상환, 원금균등상환, 만기일시상환 계산"
        />
        <meta
          property="twitter:description"
          content="대출 이자 계산기로 원리금균등상환, 원금균등상환, 만기일시상환 방식의 월납금액과 총 이자를 계산해보세요."
        />
        <meta
          property="twitter:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="anteconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://anteconomy.co.kr/loan-calculator" />

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
            <h1 className="text-3xl font-bold mb-4">대출 이자 계산기</h1>
            <p className="text-lg text-gray-300">
              원리금균등상환, 원금균등상환, 만기일시상환 방식의 대출 이자를
              계산해보세요.
            </p>
          </header>

          <AdsenseAd slot="loan-calculator-top" />

          <main>
            <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-xl font-bold mb-6">대출 정보 입력</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                    placeholder="예: 100,000,000"
                  />
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
                <div>
                  <label className="block text-sm font-medium mb-2">
                    대출기간 (개월)
                  </label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="예: 36"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    상환방식
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="equal">원리금균등상환</option>
                    <option value="principal">원금균등상환</option>
                    <option value="bullet">만기일시상환</option>
                  </select>
                </div>
              </div>

              <button
                onClick={calculateLoan}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition-colors"
                aria-label="대출 이자 계산하기"
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

            <AdsenseAd slot="loan-calculator-bottom" />

            <section className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">상환방식 설명</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="font-bold text-green-300">원리금균등상환</h3>
                  <p className="text-sm">
                    매월 동일한 금액을 납입하는 방식입니다. 초기에는 이자가 많고
                    원금이 적게 상환되며, 시간이 지날수록 이자는 줄어들고 원금
                    상환액이 늘어납니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">원금균등상환</h3>
                  <p className="text-sm">
                    매월 동일한 원금을 상환하고, 남은 원금에 대한 이자를
                    납입하는 방식입니다. 초기 납입금이 많고 시간이 지날수록
                    납입금이 줄어듭니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">만기일시상환</h3>
                  <p className="text-sm">
                    대출기간 동안 이자만 납입하고, 만기에 원금을 한 번에
                    상환하는 방식입니다. 매월 이자만 납입하므로 부담이 적지만,
                    만기에 큰 금액을 한 번에 상환해야 합니다.
                  </p>
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
