import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function SavingsCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [period, setPeriod] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [taxType, setTaxType] = useState("normal"); // normal, taxFree, taxBenefit
  const [interestType, setInterestType] = useState("simple"); // simple, compound
  const [calculationResult, setCalculationResult] = useState(null);

  const calculateInterest = () => {
    if (!monthlyDeposit || !period || !interestRate) return;

    const deposit = parseFloat(monthlyDeposit);
    const months = parseInt(period);
    const rate = parseFloat(interestRate) / 100;

    let totalDeposit = deposit * months;
    let interest = 0;

    if (interestType === "simple") {
      // 단리 계산: 원금 × 이율 × 기간
      interest = (deposit * months * rate * (months + 1)) / (2 * 12);
    } else {
      // 복리 계산
      let balance = 0;
      for (let i = 0; i < months; i++) {
        balance += deposit;
        balance *= 1 + rate / 12;
      }
      interest = balance - totalDeposit;
    }

    // 세금 계산
    let taxRate = 0;
    switch (taxType) {
      case "normal":
        taxRate = 0.154; // 이자소득세 15.4% (소득세 14% + 지방소득세 1.4%)
        break;
      case "taxBenefit":
        taxRate = 0.088; // 세금우대 9.5% (소득세 8% + 지방소득세 0.8%)
        break;
      case "taxFree":
        taxRate = 0; // 비과세
        break;
    }

    const taxAmount = interest * taxRate;
    const netInterest = interest - taxAmount;

    setCalculationResult({
      totalDeposit,
      interest,
      taxAmount,
      netInterest,
      totalAmount: totalDeposit + netInterest,
    });
  };

  return (
    <>
      <Head>
        <title>적금 이자 계산기 - 단리, 복리 이자 계산 및 세금 공제</title>
        <meta
          name="description"
          content="적금 이자를 계산해보세요. 단리, 복리 방식의 이자 계산과 비과세, 세금우대 등 세금 공제를 고려한 정확한 수령액을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="적금 계산기, 이자 계산기, 단리 계산, 복리 계산, 적금 이자, 비과세, 세금우대, 이자소득세"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">적금 이자 계산기</h1>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="text-sm">
            단리는 원금에 대해서만 이자가 붙고, 복리는 원금과 이자에 대해 이자가
            붙습니다.
            <br />
            비과세/세금우대 적용 시 더 많은 실수령액을 받을 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">계산 정보 입력</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">월 적립액</label>
                <input
                  type="number"
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="월 적립액을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  적립 기간 (개월)
                </label>
                <input
                  type="number"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="적립 기간을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  연 이자율 (%)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="연 이자율을 입력하세요"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  이자 계산 방식
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="simple"
                      checked={interestType === "simple"}
                      onChange={(e) => setInterestType(e.target.value)}
                      className="mr-2"
                    />
                    단리
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="compound"
                      checked={interestType === "compound"}
                      onChange={(e) => setInterestType(e.target.value)}
                      className="mr-2"
                    />
                    복리
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">세금 적용</label>
                <select
                  value={taxType}
                  onChange={(e) => setTaxType(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="normal">일반과세 (15.4%)</option>
                  <option value="taxBenefit">세금우대 (9.5%)</option>
                  <option value="taxFree">비과세</option>
                </select>
              </div>
            </div>
          </div>

          {calculationResult && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">총 수령액</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(calculationResult.totalAmount).toLocaleString()}
                    원
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-4">상세 내역</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>총 납입원금</span>
                      <span>
                        {Math.round(
                          calculationResult.totalDeposit
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>세전 이자</span>
                      <span>
                        {Math.round(
                          calculationResult.interest
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>이자소득세</span>
                      <span>
                        {Math.round(
                          calculationResult.taxAmount
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>세후 이자</span>
                      <span>
                        {Math.round(
                          calculationResult.netInterest
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={calculateInterest}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            계산하기
          </button>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">적금 이자 계산 안내</h2>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-2">단리 계산</h3>
            <p className="mb-4">
              단리는 원금에 대해서만 이자를 계산하는 방식입니다. 이자에 대한
              이자는 발생하지 않습니다. 계산식: 이자 = 원금 × 이율 × 기간
            </p>

            <h3 className="text-xl font-semibold mb-2">복리 계산</h3>
            <p className="mb-4">
              복리는 원금과 이자 모두에 대해 이자를 계산하는 방식입니다. 매월
              납입금에 대해 이자가 발생하고, 발생한 이자에 대해서도 다시 이자가
              붙습니다.
            </p>

            <h3 className="text-xl font-semibold mb-2">세금 적용</h3>
            <ul className="list-disc list-inside mb-4">
              <li>일반과세: 이자소득세 14% + 지방소득세 1.4% = 15.4%</li>
              <li>세금우대: 이자소득세 8% + 지방소득세 0.8% = 9.5%</li>
              <li>비과세: 이자소득세 면제</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              비과세/세금우대 적용 대상
            </h3>
            <p className="mb-2">
              다음 조건 중 하나를 충족하는 경우 비과세 또는 세금우대 혜택을 받을
              수 있습니다:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>장기저축성보험(10년 이상)</li>
              <li>장기주택마련저축</li>
              <li>청년우대형 주택청약종합저축</li>
              <li>농어가목돈마련저축</li>
              <li>노인, 장애인 등 특정 계층</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
