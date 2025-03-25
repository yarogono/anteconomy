import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [term, setTerm] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("12");
  const [results, setResults] = useState(null);

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal.replace(/,/g, "")) || 0;
    const r = parseFloat(interestRate) || 0;
    const t = parseFloat(term) || 0;
    const n = parseInt(compoundFrequency);

    if (!p || !r || !t || !n) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const rate = r / 100;
    const amount = p * Math.pow(1 + rate / n, n * t);
    const interest = amount - p;

    const schedule = [];
    let balance = p;
    const periodsPerYear = n;
    const totalPeriods = Math.floor(t * periodsPerYear);

    for (let i = 1; i <= totalPeriods; i++) {
      const periodInterest = balance * (rate / periodsPerYear);
      balance += periodInterest;

      schedule.push({
        period: i,
        balance: balance,
        interest: periodInterest,
        totalInterest: balance - p,
      });
    }

    setResults({
      amount,
      interest,
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
        <title>복리 계산기 - 복리 이자 계산</title>
        <meta
          name="description"
          content="복리 이자를 계산해보세요. 원금, 이자율, 기간을 입력하여 복리로 계산된 최종 금액과 이자를 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="복리 계산기, 복리 이자, 이자 계산기, 복리 수익률, 복리 투자"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/compound-interest-calculator"
        />
        <meta property="og:title" content="복리 계산기 - 복리 이자 계산" />
        <meta
          property="og:description"
          content="복리 이자를 계산해보세요. 원금, 이자율, 기간을 입력하여 복리로 계산된 최종 금액과 이자를 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/compound-interest-calculator"
        />
        <meta property="twitter:title" content="복리 계산기 - 복리 이자 계산" />
        <meta
          property="twitter:description"
          content="복리 이자를 계산해보세요. 원금, 이자율, 기간을 입력하여 복리로 계산된 최종 금액과 이자를 확인할 수 있습니다."
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
          href="https://anteconomy.co.kr/compound-interest-calculator"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">복리 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  원금 (원)
                </label>
                <input
                  type="text"
                  value={principal}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setPrincipal(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                  }}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="원금액 입력"
                />
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
              <div>
                <label className="block text-sm font-medium mb-2">
                  기간 (년)
                </label>
                <input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="기간 입력"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  복리 주기
                </label>
                <select
                  value={compoundFrequency}
                  onChange={(e) => setCompoundFrequency(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                >
                  <option value="1">연 1회</option>
                  <option value="2">연 2회</option>
                  <option value="4">연 4회</option>
                  <option value="12">월 1회</option>
                  <option value="365">일 1회</option>
                </select>
              </div>
            </div>
            <button
              onClick={calculateCompoundInterest}
              className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
            >
              계산하기
            </button>
          </div>

          {results && (
            <div className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">최종 금액</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.amount)}원
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 이자</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.interest)}원
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-700">
                      <th className="p-2 text-left">기간</th>
                      <th className="p-2 text-right">잔액</th>
                      <th className="p-2 text-right">이자</th>
                      <th className="p-2 text-right">누적 이자</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.schedule.map((item, index) => (
                      <tr
                        key={item.period}
                        className="border-t border-green-700"
                      >
                        <td className="p-2">{item.period}회차</td>
                        <td className="p-2 text-right">
                          {formatNumber(item.balance)}원
                        </td>
                        <td className="p-2 text-right">
                          {formatNumber(item.interest)}원
                        </td>
                        <td className="p-2 text-right">
                          {formatNumber(item.totalInterest)}원
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">복리 계산기 사용법</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>원금: 투자 또는 예치하는 초기 금액</li>
                  <li>연 이자율: 연간 이자율 (%)</li>
                  <li>기간: 투자 또는 예치 기간 (년)</li>
                  <li>복리 주기: 이자가 복리되는 주기 (연 1회~일 1회)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">계산 결과</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>최종 금액: 복리 계산 후 받게 되는 총 금액</li>
                  <li>총 이자: 원금을 제외한 이자 금액</li>
                  <li>상세 내역: 기간별 잔액, 이자, 누적 이자</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">복리란?</h3>
                <p className="text-gray-300">
                  복리는 이자가 원금에 합산되어 다음 이자 계산의 기준이 되는
                  방식입니다. 단리와 달리 이자가 원금에 포함되어 다시 이자를
                  계산하므로, 시간이 지날수록 수익이 더 크게 증가합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>실제 투자 수익은 시장 상황에 따라 달라질 수 있습니다.</li>
                  <li>세금과 수수료는 고려하지 않았습니다.</li>
                  <li>
                    이 계산기는 예시이며, 실제 투자 결과는 다를 수 있습니다.
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
