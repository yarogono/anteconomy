import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function JeonseLoanCalculator() {
  const [depositAmount, setDepositAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("36");
  const [interestRate, setInterestRate] = useState("");
  const [results, setResults] = useState(null);

  // 구조화된 데이터 생성
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "전세 대출 계산기 - 전세금 대출 한도 계산",
    description:
      "전세금액, 보증금, 대출금액, 이자율을 고려하여 전세 대출의 월 상환액을 계산하는 온라인 계산기입니다.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    featureList: [
      "전세금액 입력",
      "보증금 입력",
      "대출금액 입력",
      "대출기간 선택",
      "이자율 입력",
      "월 상환액 계산",
      "상세 분석 제공",
    ],
  };

  const calculateLoan = () => {
    const deposit = parseFloat(depositAmount.replace(/,/g, "")) || 0;
    const loan = parseFloat(loanAmount.replace(/,/g, "")) || 0;
    const term = parseInt(loanTerm);
    const rate = parseFloat(interestRate) || 0;

    if (!deposit || !loan || !rate) return;

    // 원리금균등상환 방식으로 계산
    const monthlyRate = rate / 12 / 100;
    const monthlyPayment =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, term)) /
      (Math.pow(1 + monthlyRate, term) - 1);
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - loan;

    setResults({
      depositAmount: deposit,
      loanAmount: loan,
      loanTerm: term,
      interestRate: rate,
      monthlyPayment,
      totalPayment,
      totalInterest,
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
        <title>전세 대출 계산기 - 전세금 대출 한도 계산</title>
        <meta
          name="description"
          content="전세금액, 보증금, 대출금액, 이자율을 고려하여 전세 대출의 월 상환액을 계산해보세요. 전세 대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="전세 대출 계산기, 전세금 대출, 보증금, 대출한도, 월 상환액, 이자율"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/jeonse-loan-calculator"
        />
        <meta
          property="og:title"
          content="전세 대출 계산기 - 전세금 대출 한도 계산"
        />
        <meta
          property="og:description"
          content="전세금액, 보증금, 대출금액, 이자율을 고려하여 전세 대출의 월 상환액을 계산해보세요. 전세 대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/jeonse-loan-calculator"
        />
        <meta
          property="twitter:title"
          content="전세 대출 계산기 - 전세금 대출 한도 계산"
        />
        <meta
          property="twitter:description"
          content="전세금액, 보증금, 대출금액, 이자율을 고려하여 전세 대출의 월 상환액을 계산해보세요. 전세 대출 한도를 예측하고 대출 가능성을 확인할 수 있습니다."
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
          href="https://anteconomy.co.kr/jeonse-loan-calculator"
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
            <h1 className="text-3xl font-bold mb-4">전세 대출 계산기</h1>
            <p className="text-lg text-gray-300">
              전세금액, 보증금, 대출금액, 이자율을 고려하여 전세 대출의 월
              상환액을 계산해보세요.
            </p>
          </header>

          <AdsenseAd slot="jeonse-loan-calculator-top" />

          <main>
            <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-xl font-bold mb-6">전세 정보 입력</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    전세금액
                  </label>
                  <input
                    type="text"
                    value={depositAmount}
                    onChange={(e) =>
                      setDepositAmount(
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
                    보증금
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
                    placeholder="예: 10,000,000"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-6">대출 정보 입력</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    대출기간
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
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    연이자율 (%)
                  </label>
                  <input
                    type="text"
                    value={interestRate}
                    onChange={(e) =>
                      setInterestRate(
                        e.target.value
                          .replace(/[^0-9.]/g, "")
                          .replace(/(\..*)\./g, "$1")
                      )
                    }
                    className="w-full p-2 border rounded"
                    placeholder="예: 3.5"
                  />
                </div>
              </div>

              <button
                onClick={calculateLoan}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition-colors"
                aria-label="전세 대출 계산하기"
              >
                계산하기
              </button>
            </section>

            {results && (
              <section className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-xl font-bold mb-4">계산 결과</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">월 상환액</div>
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
                  <div className="bg-green-50 p-4 rounded">
                    <div className="text-sm text-gray-600">대출 정보</div>
                    <div className="text-sm">
                      <div>
                        전세금액: {formatNumber(results.depositAmount)}원
                      </div>
                      <div>보증금: {formatNumber(results.loanAmount)}원</div>
                      <div>대출기간: {results.loanTerm}개월</div>
                      <div>연이자율: {results.interestRate}%</div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <AdsenseAd slot="jeonse-loan-calculator-bottom" />

            <section className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">전세 대출 계산기 안내</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="font-bold text-green-300">전세 대출이란?</h3>
                  <p className="text-sm">
                    전세 대출은 전세금을 마련하기 위해 받는 대출입니다. 전세금의
                    일부를 보증금으로 납부하고, 나머지 금액을 대출받아 전세
                    계약을 할 수 있습니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">계산 방법</h3>
                  <p className="text-sm">
                    원리금균등상환 방식으로 계산됩니다.
                    <br />
                    - 월 상환액은 대출금액, 이자율, 대출기간을 고려하여
                    계산됩니다.
                    <br />
                    - 총 상환금액은 월 상환액 × 대출기간입니다.
                    <br />- 총 이자는 총 상환금액에서 대출금액을 뺀 금액입니다.
                  </p>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">전세 대출 특징</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>전세금의 일부를 보증금으로 납부</li>
                    <li>나머지 금액을 대출받아 전세 계약</li>
                    <li>월세와 달리 매월 원리금을 상환</li>
                    <li>대출기간 종료 시 보증금 반환</li>
                  </ul>
                </article>
                <article>
                  <h3 className="font-bold text-green-300">주의사항</h3>
                  <ul className="text-sm list-disc list-inside space-y-2">
                    <li>
                      실제 대출 시에는 추가적인 수수료와 비용이 발생할 수
                      있습니다.
                    </li>
                    <li>
                      은행별로 대출 조건과 이자율이 다를 수 있으므로, 실제 대출
                      시에는 해당 은행의 조건을 확인하세요.
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
