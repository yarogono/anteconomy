import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

export default function PrepaymentCalculator() {
  const [activeTab, setActiveTab] = useState("explanation"); // explanation, rate
  const [prepaymentAmount, setPrepaymentAmount] = useState("");
  const [feeRate, setFeeRate] = useState("1.4");
  const [totalMonths, setTotalMonths] = useState("");
  const [remainingMonths, setRemainingMonths] = useState("");
  const [calculationResult, setCalculationResult] = useState(null);

  const calculateFee = () => {
    if (!prepaymentAmount || !feeRate || !totalMonths || !remainingMonths) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const amount = parseFloat(prepaymentAmount) * 10000; // 만원 단위 변환
    const rate = parseFloat(feeRate) / 100;
    const total = parseInt(totalMonths);
    const remaining = parseInt(remainingMonths);

    if (remaining > total) {
      alert("잔존기간은 대출기간보다 클 수 없습니다.");
      return;
    }

    // 중도상환수수료 = 중도상환원금 x 수수료율 x (잔존일수 ÷ 대출기간)
    const fee = amount * rate * (remaining / total);

    setCalculationResult({
      prepaymentAmount: amount,
      feeRate: rate,
      totalMonths: total,
      remainingMonths: remaining,
      fee: fee,
    });
  };

  return (
    <>
      <Head>
        <title>중도상환수수료 계산기 - 대출 조기상환 수수료 계산</title>
        <meta
          name="description"
          content="대출 중도상환 시 발생하는 수수료를 계산해보세요. 2025년 1월 13일부터 변경된 중도상환수수료 기준이 적용됩니다."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">중도상환수수료 계산기</h1>
        </div>

        <div className="mb-8">
          <div className="flex border-b">
            <button
              className={`py-2 px-4 ${
                activeTab === "explanation"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("explanation")}
            >
              설명
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "rate"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("rate")}
            >
              요율
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "explanation" ? (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>
                  대출을 본래 정해진 기일보다 일찍 상환하는 경우 금융기관에서
                  고객에게 물리는 벌칙성 수수료입니다. 잔존 기간, 상환 금액,
                  요율에 따라 계산됩니다.
                </p>
                <p className="mt-2">
                  중도상환수수료(조기상환수수료) = 중도상환원금 x 수수료율 x
                  (잔존일수 ÷ 대출기간)
                </p>
                <p className="mt-2">
                  금융당국의 정책에 따라 2025년 1월 13일부터 중도상환 수수료의
                  대대적인 인하가 있었습니다. "요율" 탭을 참고해주세요.
                </p>
              </div>
            ) : (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">
                  2025년 1월 13일부터 적용되는 중도상환수수료 요율
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>주택담보대출: 최대 1.2% → 매월 0.02%p 감소</li>
                  <li>전세자금대출: 최대 0.8% → 매월 0.02%p 감소</li>
                  <li>신용대출: 최대 1.5% → 매월 0.03%p 감소</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">계산 정보 입력</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  상환금액 (만원)
                </label>
                <input
                  type="number"
                  value={prepaymentAmount}
                  onChange={(e) => setPrepaymentAmount(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="금액 입력"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">수수료율 (%)</label>
                <input
                  type="number"
                  value={feeRate}
                  onChange={(e) => setFeeRate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  대출기간 (개월)
                </label>
                <input
                  type="number"
                  value={totalMonths}
                  onChange={(e) => setTotalMonths(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="총 개월수 입력"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  잔존기간 (개월)
                </label>
                <input
                  type="number"
                  value={remainingMonths}
                  onChange={(e) => setRemainingMonths(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="총 개월수 입력"
                />
              </div>
              <div className="mt-6">
                <button
                  onClick={calculateFee}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  계산하기
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
            {calculationResult && (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">중도상환수수료</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(calculationResult.fee).toLocaleString()}원
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-4">상세 내역</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>중도상환금액</span>
                      <span>
                        {calculationResult.prepaymentAmount.toLocaleString()}원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>수수료율</span>
                      <span>
                        {(calculationResult.feeRate * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>대출기간</span>
                      <span>{calculationResult.totalMonths}개월</span>
                    </div>
                    <div className="flex justify-between">
                      <span>잔존기간</span>
                      <span>{calculationResult.remainingMonths}개월</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <CoupangBanner />
      </main>
    </>
  );
}
