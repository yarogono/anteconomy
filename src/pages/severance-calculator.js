import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

export default function SeveranceCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [fixedAllowances, setFixedAllowances] = useState("");
  const [annualBonus, setAnnualBonus] = useState("");
  const [result, setResult] = useState(null);

  // 근속기간 계산 (년, 월, 일)
  const calculateEmploymentPeriod = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // 일수가 음수인 경우 월을 조정
    if (days < 0) {
      months--;
      const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // 월이 음수인 경우 년을 조정
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  // 3개월 평균임금 계산
  const calculateAverageWage = (
    monthlySalary,
    fixedAllowances,
    annualBonus
  ) => {
    // 3개월 기본급
    const threeMonthsBase = Number(monthlySalary) * 3;

    // 3개월 고정수당
    const threeMonthsFixedAllowances = Number(fixedAllowances || 0) * 3;

    // 상여금 가산액 (연간 상여금의 3/12)
    const bonusAddition = Number(annualBonus || 0) * (3 / 12);

    // 3개월 총 임금
    const totalThreeMonthsWage =
      threeMonthsBase + threeMonthsFixedAllowances + bonusAddition;

    // 3개월 총 일수 (91일 기준)
    const totalDays = 91;

    // 1일 평균임금
    const dailyWage = Math.floor(totalThreeMonthsWage / totalDays);

    return {
      dailyWage,
      threeMonthsBase,
      threeMonthsFixedAllowances,
      bonusAddition,
      totalThreeMonthsWage,
    };
  };

  // 퇴직금 계산
  const calculateSeverance = () => {
    if (!startDate || !endDate || !monthlySalary) {
      alert("필수 항목을 입력해주세요.");
      return;
    }

    // 1. 근속기간 계산
    const { years, months, days } = calculateEmploymentPeriod(
      startDate,
      endDate
    );
    const totalDays = years * 365 + months * 30 + days;

    // 2. 평균임금 계산
    const {
      dailyWage,
      threeMonthsBase,
      threeMonthsFixedAllowances,
      bonusAddition,
      totalThreeMonthsWage,
    } = calculateAverageWage(monthlySalary, fixedAllowances, annualBonus);

    // 3. 퇴직금 계산
    const severancePay = Math.floor(dailyWage * 30 * (totalDays / 365));

    setResult({
      years,
      months,
      days,
      totalDays,
      dailyWage,
      threeMonthsBase,
      threeMonthsFixedAllowances,
      bonusAddition,
      totalThreeMonthsWage,
      severancePay,
    });
  };

  return (
    <>
      <Head>
        <title>퇴직금 계산기 - 2025년 기준</title>
        <meta
          name="description"
          content="2025년 기준 퇴직금을 계산해보세요. 근속기간과 급여를 입력하여 받을 수 있는 퇴직금을 확인하세요."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">퇴직금 계산기</h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <div className="mb-6">
              <label className="block mb-2">
                입사일
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                />
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                퇴사일
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                />
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                기본급 (원)
                <input
                  type="number"
                  value={monthlySalary}
                  onChange={(e) => setMonthlySalary(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="기본급을 입력하세요"
                />
                {monthlySalary && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약{" "}
                    {Math.round(Number(monthlySalary) / 10000).toLocaleString()}
                    만원
                  </span>
                )}
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                고정수당 (원)
                <input
                  type="number"
                  value={fixedAllowances}
                  onChange={(e) => setFixedAllowances(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="고정수당을 입력하세요 (없으면 비워두세요)"
                />
                {fixedAllowances && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약{" "}
                    {Math.round(
                      Number(fixedAllowances) / 10000
                    ).toLocaleString()}
                    만원
                  </span>
                )}
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                연간 상여금 (원)
                <input
                  type="number"
                  value={annualBonus}
                  onChange={(e) => setAnnualBonus(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="연간 상여금을 입력하세요 (없으면 비워두세요)"
                />
                {annualBonus && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약{" "}
                    {Math.round(Number(annualBonus) / 10000).toLocaleString()}
                    만원
                  </span>
                )}
              </label>
            </div>

            <button
              onClick={calculateSeverance}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              계산하기
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                  <h3 className="text-lg font-bold mb-4">▶ 퇴직금 계산 결과</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>근속기간</span>
                      <span>
                        {result.years}년 {result.months}개월 {result.days}일
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>총 근속일수</span>
                      <span>{result.totalDays}일</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3개월 기본급</span>
                      <span>{result.threeMonthsBase.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3개월 고정수당</span>
                      <span>
                        {result.threeMonthsFixedAllowances.toLocaleString()} 원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>상여금 가산액</span>
                      <span>{result.bonusAddition.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3개월 총 임금</span>
                      <span>
                        {result.totalThreeMonthsWage.toLocaleString()} 원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>1일 평균임금</span>
                      <span>{result.dailyWage.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>퇴직금</span>
                      <span>{result.severancePay.toLocaleString()} 원</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">퇴직금 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">퇴직금 계산 방법</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1일 평균임금 = (퇴사일 이전 3개월 임금 총액) ÷ 91일</li>
                  <li>
                    3개월 임금 총액 = (기본급 + 고정수당) × 3개월 + (연간 상여금
                    × 3/12)
                  </li>
                  <li>퇴직금 = 1일 평균임금 × 30일 × (근속일수 ÷ 365일)</li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">퇴직금 지급 기준</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>근로기준법에 따라 1년 이상 근속 시 퇴직금 지급</li>
                  <li>계속근로년수 1년에 대해 30일분 이상의 평균임금 지급</li>
                  <li>평균임금은 퇴직일 이전 3개월간의 임금을 기준으로 계산</li>
                </ul>
              </div>

              <p className="text-sm">
                * 이 계산기는 참고용이며, 실제 퇴직금은 회사 규정에 따라 다를 수
                있습니다.
              </p>
            </div>
          </div>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
