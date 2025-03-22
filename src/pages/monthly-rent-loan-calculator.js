import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function MonthlyRentLoanCalculator() {
  const [deposit, setDeposit] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("12");
  const [interestRate, setInterestRate] = useState("");
  const [results, setResults] = useState(null);

  const calculateLoan = () => {
    const depositAmount = parseFloat(deposit.replace(/,/g, "")) || 0;
    const loan = parseFloat(loanAmount.replace(/,/g, "")) || 0;
    const term = parseInt(loanTerm);
    const rate = parseFloat(interestRate) || 0;

    if (!depositAmount || !loan || !term || !rate) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const monthlyRate = rate / 12 / 100;
    const monthlyPayment =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - loan;

    const schedule = [];
    let remainingBalance = loan;
    for (let i = 1; i <= term; i++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      schedule.push({
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
      schedule,
    });
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(number));
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>월세 대출 계산기 - 월세 보증금 대출 계산</title>
        <meta
          name="description"
          content="월세 보증금 대출의 월 상환액을 계산해보세요. 보증금, 대출금액, 대출기간, 이자율을 입력하여 월세 대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="월세 대출, 보증금 대출, 월세 보증금, 대출 계산기, 월세 대출 계산기"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/monthly-rent-loan-calculator"
        />
        <meta
          property="og:title"
          content="월세 대출 계산기 - 월세 보증금 대출 계산"
        />
        <meta
          property="og:description"
          content="월세 보증금 대출의 월 상환액을 계산해보세요. 보증금, 대출금액, 대출기간, 이자율을 입력하여 월세 대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/monthly-rent-loan-calculator"
        />
        <meta
          property="twitter:title"
          content="월세 대출 계산기 - 월세 보증금 대출 계산"
        />
        <meta
          property="twitter:description"
          content="월세 보증금 대출의 월 상환액을 계산해보세요. 보증금, 대출금액, 대출기간, 이자율을 입력하여 월세 대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
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
          href="https://anteconomy.co.kr/monthly-rent-loan-calculator"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">월세 대출 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  보증금 (원)
                </label>
                <input
                  type="text"
                  value={deposit}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setDeposit(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                  }}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="보증금액 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  대출금액 (원)
                </label>
                <input
                  type="text"
                  value={loanAmount}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setLoanAmount(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                  }}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="대출금액 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  대출기간 (개월)
                </label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                >
                  {[12, 24, 36, 48, 60, 72, 84].map((term) => (
                    <option key={term} value={term}>
                      {term}개월
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  연 이자율 (%)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="연 이자율 입력"
                  step="0.01"
                />
              </div>
            </div>
            <button
              onClick={calculateLoan}
              className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
            >
              계산하기
            </button>
          </div>

          {results && (
            <div className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">월 상환액</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.monthlyPayment)}원
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 상환액</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.totalPayment)}원
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 이자</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.totalInterest)}원
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-700">
                      <th className="p-2 text-left">회차</th>
                      <th className="p-2 text-right">상환액</th>
                      <th className="p-2 text-right">원금</th>
                      <th className="p-2 text-right">이자</th>
                      <th className="p-2 text-right">남은 원금</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.schedule.map((item) => (
                      <tr
                        key={item.month}
                        className="border-t border-green-700"
                      >
                        <td className="p-2">{item.month}회차</td>
                        <td className="p-2 text-right">
                          {formatNumber(item.payment)}원
                        </td>
                        <td className="p-2 text-right">
                          {formatNumber(item.principal)}원
                        </td>
                        <td className="p-2 text-right">
                          {formatNumber(item.interest)}원
                        </td>
                        <td className="p-2 text-right">
                          {formatNumber(item.remaining)}원
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">월세 대출 계산기 사용법</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>보증금: 월세 계약 시 지불하는 보증금액</li>
                  <li>대출금액: 월세 보증금 대출 금액</li>
                  <li>대출기간: 대출 상환 기간 (12개월~84개월)</li>
                  <li>연 이자율: 연간 이자율 (%)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">계산 결과</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>월 상환액: 매월 지불해야 하는 금액</li>
                  <li>총 상환액: 대출 기간 동안 지불하는 총 금액</li>
                  <li>총 이자: 대출 기간 동안 지불하는 총 이자</li>
                  <li>상환 스케줄: 매월 상환 내역 (원금, 이자, 남은 원금)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">월세 대출이란?</h3>
                <p className="text-gray-300">
                  월세 대출은 월세 계약 시 필요한 보증금을 대출받는 상품입니다.
                  주로 주택담보대출이나 신용대출을 통해 보증금을 마련할 수
                  있으며, 대출 기간 동안 원리금을 상환해야 합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>실제 대출 시에는 추가 수수료가 발생할 수 있습니다.</li>
                  <li>
                    대출 승인은 신용등급과 소득에 따라 달라질 수 있습니다.
                  </li>
                  <li>
                    이 계산기는 예시이며, 실제 대출 조건은 다를 수 있습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <AdsenseAd slot="calculator-bottom" />

        <footer className="bg-green-950 text-center py-8">
          <p className="text-sm">© 2024 안트이코노미. All rights reserved.</p>
          <p className="text-sm mt-2">
            실시간 금융 시장 분석과 투자 정보를 제공합니다.
          </p>
        </footer>
      </div>
    </>
  );
}
