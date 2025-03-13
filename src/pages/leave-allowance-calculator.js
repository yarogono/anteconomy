import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

export default function LeaveAllowanceCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");
  const [fixedAllowances, setFixedAllowances] = useState("");
  const [usedDays, setUsedDays] = useState("");
  const [result, setResult] = useState(null);

  // 통상임금 계산 (월 소정근로시간 209시간 기준)
  const calculateRegularWage = (monthlySalary, fixedAllowances) => {
    const totalFixedWage = Number(monthlySalary) + Number(fixedAllowances || 0);
    const hourlyWage = Math.floor(totalFixedWage / 209);
    const dailyWage = hourlyWage * 8;
    return { hourlyWage, dailyWage };
  };

  // 연차 일수 계산
  const calculateLeaveDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    const totalMonths = years * 12 + months;

    // 1년 미만 근로자: 매월 만근시 1일
    if (totalMonths < 12) {
      return Math.floor(totalMonths);
    }
    // 1년 이상 2년 미만: 15일
    if (totalMonths < 24) {
      return 15;
    }
    // 2년 이상: 2년을 초과하는 매 1년에 대해 1일씩 가산 (최대 25일)
    return 15 + Math.floor((totalMonths - 24) / 12);
  };

  const calculateAllowance = () => {
    if (!startDate || !endDate || !monthlySalary) {
      alert("필수 항목을 입력해주세요.");
      return;
    }

    // 1. 근속기간 계산
    const start = new Date(startDate);
    const end = new Date(endDate);
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    const totalMonths = years * 12 + months;

    // 2. 연차 일수 계산
    const totalLeaveDays = calculateLeaveDays(startDate, endDate);
    const unusedDays = totalLeaveDays - Number(usedDays || 0);

    if (unusedDays < 0) {
      alert("사용한 연차 일수가 총 연차 일수를 초과할 수 없습니다.");
      return;
    }

    // 3. 통상임금 계산
    const { hourlyWage, dailyWage } = calculateRegularWage(
      monthlySalary,
      fixedAllowances
    );

    // 4. 연차 수당 계산
    const allowance = dailyWage * unusedDays;

    setResult({
      totalMonths,
      totalLeaveDays,
      unusedDays,
      hourlyWage,
      dailyWage,
      allowance,
    });
  };

  return (
    <>
      <Head>
        <title>연차 수당 계산기 - 2025년 기준</title>
        <meta
          name="description"
          content="2025년 기준 미사용 연차 수당을 계산해보세요. 근속기간과 급여, 사용한 연차 일수를 입력하여 받을 수 있는 연차 수당을 확인하세요."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">연차 수당 계산기</h1>

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
                사용한 연차 일수
                <input
                  type="number"
                  value={usedDays}
                  onChange={(e) => setUsedDays(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="이미 사용한 연차 일수를 입력하세요"
                  min="0"
                />
              </label>
            </div>

            <button
              onClick={calculateAllowance}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              계산하기
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                  <h3 className="text-lg font-bold mb-4">
                    ▶ 연차 수당 계산 결과
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>근속기간</span>
                      <span>{result.totalMonths}개월</span>
                    </div>
                    <div className="flex justify-between">
                      <span>총 연차 일수</span>
                      <span>{result.totalLeaveDays}일</span>
                    </div>
                    <div className="flex justify-between">
                      <span>미사용 연차 일수</span>
                      <span>{result.unusedDays}일</span>
                    </div>
                    <div className="flex justify-between">
                      <span>시간당 통상임금</span>
                      <span>{result.hourlyWage.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1일 통상임금</span>
                      <span>{result.dailyWage.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>연차 수당</span>
                      <span>{result.allowance.toLocaleString()} 원</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">연차 수당 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">통상임금 계산 방법</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>통상임금 = (기본급 + 고정수당) ÷ 209시간</li>
                  <li>1일 통상임금 = 시간당 통상임금 × 8시간</li>
                  <li>연차 수당 = 1일 통상임금 × 미사용 연차 일수</li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">연차 부여 기준</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1년 미만 근로자: 근속 1개월 개근시 1일</li>
                  <li>1년 이상 2년 미만: 15일</li>
                  <li>
                    2년 이상: 2년을 초과하는 매 1년에 대해 1일씩 가산 (최대
                    25일)
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                * 이 계산기는 참고용이며, 실제 수당은 회사 규정에 따라 다를 수
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
