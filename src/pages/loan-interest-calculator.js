import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CoupangBanner from "../components/CoupangBanner";

export default function LoanInterestCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [result, setResult] = useState(null);

  const calculateInterest = () => {
    const amount = Number(loanAmount);
    const rate = Number(interestRate);
    const days = Number(loanPeriod);

    if (!amount || !rate || !days) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 일별 이자 계산
    const dailyInterest = (amount * (rate / 100)) / 365;
    const totalInterest = dailyInterest * days;

    setResult({
      dailyInterest: Math.round(dailyInterest),
      totalInterest: Math.round(totalInterest),
      totalAmount: amount + Math.round(totalInterest),
      effectiveRate: (((totalInterest * 365) / (amount * days)) * 100).toFixed(
        2
      ),
    });
  };

  return (
    <>
      <Head>
        <title>마이너스통장 이자 계산기 - 한도대출 이자 계산</title>
        <meta
          name="description"
          content="마이너스통장(한도대출)의 이자를 계산해보세요. 대출금액, 금리, 기간에 따른 이자를 쉽게 계산할 수 있습니다."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">마이너스통장 이자 계산기</h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <div className="space-y-4">
              <div>
                <label className="block mb-2">
                  대출금액 (원)
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="대출금액을 입력하세요"
                  />
                </label>
              </div>

              <div>
                <label className="block mb-2">
                  대출금리 (연 %)
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="연 이자율을 입력하세요"
                    step="0.1"
                  />
                </label>
              </div>

              <div>
                <label className="block mb-2">
                  대출기간 (일)
                  <input
                    type="number"
                    value={loanPeriod}
                    onChange={(e) => setLoanPeriod(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="대출기간(일)을 입력하세요"
                  />
                </label>
              </div>

              <button
                onClick={calculateInterest}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                계산하기
              </button>
            </div>

            {result && (
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <h3 className="text-lg font-bold mb-4">▶ 계산 결과</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>대출금액</span>
                    <span>{Number(loanAmount).toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일일 이자</span>
                    <span>{result.dailyInterest.toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between text-blue-600 font-bold">
                    <span>총 이자</span>
                    <span>{result.totalInterest.toLocaleString()} 원</span>
                  </div>
                  <div className="flex justify-between">
                    <span>실효금리</span>
                    <span>{result.effectiveRate}%</span>
                  </div>
                  <div className="pt-2 border-t flex justify-between font-bold">
                    <span>총 상환금액</span>
                    <span>{result.totalAmount.toLocaleString()} 원</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">마이너스통장 이자 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">이자 계산 방법</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>일별 이자 = (대출금액 × 연이자율) ÷ 365일</li>
                  <li>총 이자 = 일별 이자 × 대출기간(일)</li>
                  <li>
                    실효금리 = (총 이자 × 365) ÷ (대출금액 × 대출기간) × 100
                  </li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">마이너스통장 특징</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>필요한 금액만큼만 대출받고 이자 납부</li>
                  <li>사용한 금액과 기간에 대해서만 이자 발생</li>
                  <li>중도상환수수료 없음</li>
                  <li>한도 내에서 자유롭게 재사용 가능</li>
                </ul>
              </div>

              <p className="text-sm">
                * 실제 이자는 은행 정책에 따라 다를 수 있습니다.
                <br />* 이자 계산 결과는 참고용으로만 사용하시기 바랍니다.
              </p>
            </div>
          </div>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
