import { useState } from "react";
import Head from "next/head";

export default function DepositCalculator() {
  const [deposit, setDeposit] = useState("");
  const [period, setPeriod] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [interestType, setInterestType] = useState("simple"); // simple or compound
  const [taxType, setTaxType] = useState("normal"); // normal, taxFree, or taxBreak
  const [taxBreakRate, setTaxBreakRate] = useState("15.4"); // 기본 세금우대율

  const calculateInterest = () => {
    const principal = parseFloat(deposit) || 0;
    const months = parseFloat(period) || 0;
    const rate = parseFloat(interestRate) || 0;
    const years = months / 12;

    let totalInterest = 0;
    let totalAmount = 0;

    if (interestType === "simple") {
      // 단리 계산
      totalInterest = principal * (rate / 100) * years;
    } else {
      // 복리 계산
      totalAmount = principal * Math.pow(1 + rate / 100, years);
      totalInterest = totalAmount - principal;
    }

    // 세금 계산
    let tax = 0;
    if (taxType === "normal") {
      tax = totalInterest * 0.154; // 15.4% 기본 세율
    } else if (taxType === "taxBreak") {
      tax = totalInterest * (parseFloat(taxBreakRate) / 100);
    }

    const afterTaxInterest = totalInterest - tax;
    const finalAmount = principal + afterTaxInterest;

    return {
      principal,
      totalInterest,
      tax,
      afterTaxInterest,
      finalAmount,
    };
  };

  const result = calculateInterest();

  const formatNumber = (number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(number));
  };

  return (
    <>
      <Head>
        <title>예금 이자 계산기 - 단리/복리 계산 및 세금 계산</title>
        <meta
          name="description"
          content="예금 이자 계산기로 예치금액, 기간, 이자율에 따른 수익을 계산해보세요. 단리/복리 계산, 세금 계산(일반과세/비과세/세금우대)까지 한번에 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="예금 이자 계산기, 예금 수익률, 단리 계산, 복리 계산, 세금 계산, 예금 이자율, 예금 만기액, 예금 수익, 예금 세금, 예금 비과세, 예금 세금우대"
        />
        <meta name="author" content="안트이코노미" />
        <meta
          property="og:title"
          content="예금 이자 계산기 - 단리/복리 계산 및 세금 계산"
        />
        <meta
          property="og:description"
          content="예금 이자 계산기로 예치금액, 기간, 이자율에 따른 수익을 계산해보세요. 단리/복리 계산, 세금 계산까지 한번에 확인할 수 있습니다."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.com/deposit-calculator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="예금 이자 계산기 - 단리/복리 계산 및 세금 계산"
        />
        <meta
          name="twitter:description"
          content="예금 이자 계산기로 예치금액, 기간, 이자율에 따른 수익을 계산해보세요. 단리/복리 계산, 세금 계산까지 한번에 확인할 수 있습니다."
        />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">예금 이자 계산기</h1>
          <p className="text-gray-600">
            예치금액, 기간, 이자율을 입력하여 예금 수익을 계산해보세요.
          </p>
        </header>

        <section
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          aria-label="계산기 입력"
        >
          <h2 className="text-xl font-semibold mb-4">계산기 입력</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                예치금액
              </label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예치금액을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                예치기간 (개월)
              </label>
              <input
                type="number"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="예치기간을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연이자율 (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="연이자율을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이자 계산 방식
              </label>
              <select
                value={interestType}
                onChange={(e) => setInterestType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="simple">단리</option>
                <option value="compound">복리</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이자 과세 방식
              </label>
              <select
                value={taxType}
                onChange={(e) => setTaxType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="normal">일반과세 (15.4%)</option>
                <option value="taxFree">비과세</option>
                <option value="taxBreak">세금우대</option>
              </select>
            </div>

            {taxType === "taxBreak" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  세금우대율 (%)
                </label>
                <input
                  type="number"
                  value={taxBreakRate}
                  onChange={(e) => setTaxBreakRate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>
        </section>

        <section
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
          aria-label="계산 결과"
        >
          <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">원금</span>
              <span className="font-semibold">
                {formatNumber(result.principal)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">세전 이자</span>
              <span className="font-semibold text-blue-600">
                +{formatNumber(result.totalInterest)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">이자 과세</span>
              <span className="font-semibold text-red-600">
                -{formatNumber(result.tax)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">세후 이자</span>
              <span className="font-semibold text-green-600">
                +{formatNumber(result.afterTaxInterest)}원
              </span>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="text-lg font-semibold">최종 수령액</span>
              <span className="text-2xl font-bold text-blue-600">
                {formatNumber(result.finalAmount)}원
              </span>
            </div>
          </div>
        </section>

        <section className="mt-8 prose max-w-none" aria-label="이자 계산 설명">
          <h2 className="text-2xl font-bold mb-4">이자 계산 방식 설명</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              단리 (Simple Interest)
            </h3>
            <p className="mb-4">
              단리는 원금에 대해서만 이자를 계산하는 방식입니다. 원금이 일정하고
              이자율이 변하지 않으면 매년 동일한 이자가 발생합니다.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              복리 (Compound Interest)
            </h3>
            <p className="mb-4">
              복리는 원금에 이자가 더해진 금액을 새로운 원금으로 하여 이자를
              계산하는 방식입니다. 이자에 대한 이자가 발생하므로 장기적으로는
              단리보다 더 많은 수익을 얻을 수 있습니다.
            </p>

            <h3 className="text-lg font-semibold mb-2">이자 과세 방식</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>일반과세: 이자소득에 대해 15.4%의 세금이 부과됩니다.</li>
              <li>비과세: 이자소득에 대한 세금이 면제됩니다.</li>
              <li>세금우대: 일반과세보다 낮은 세율이 적용됩니다.</li>
            </ul>
          </div>
        </section>

        <section
          className="mt-8 bg-gray-50 p-6 rounded-lg"
          aria-label="자주 묻는 질문"
        >
          <h2 className="text-2xl font-bold mb-4">자주 묻는 질문</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                예금 이자 계산기는 어떻게 사용하나요?
              </h3>
              <p>
                예치금액, 예치기간, 연이자율을 입력하고 이자 계산 방식과 과세
                방식을 선택하면 자동으로 계산 결과가 표시됩니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                단리와 복리의 차이점은 무엇인가요?
              </h3>
              <p>
                단리는 원금에 대해서만 이자를 계산하고, 복리는 원금과 이자를
                합한 금액에 대해 이자를 계산합니다. 장기적으로는 복리가 더 많은
                수익을 얻을 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                이자 과세 방식은 어떻게 선택하나요?
              </h3>
              <p>
                일반과세(15.4%), 비과세, 세금우대 중 선택할 수 있습니다.
                세금우대를 선택한 경우 적용받을 세율을 직접 입력할 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
