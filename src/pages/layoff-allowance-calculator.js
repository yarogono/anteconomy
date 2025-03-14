import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

export default function LayoffAllowanceCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [month1Salary, setMonth1Salary] = useState("");
  const [month2Salary, setMonth2Salary] = useState("");
  const [month3Salary, setMonth3Salary] = useState("");
  const [regularWage, setRegularWage] = useState("");
  const [result, setResult] = useState(null);

  // 휴업 기간 계산 (일수)
  const calculateLayoffPeriod = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  // 평균임금 계산
  const calculateAverageWage = (month1Salary, month2Salary, month3Salary) => {
    const totalSalary =
      Number(month1Salary) + Number(month2Salary) + Number(month3Salary);
    const totalDays = 90; // 3개월 기준
    const averageWage = Math.floor(totalSalary / totalDays);
    return {
      totalSalary,
      averageWage,
      seventyPercentWage: Math.floor(averageWage * 0.7),
    };
  };

  // 휴업수당 계산
  const calculateLayoffAllowance = () => {
    if (
      !startDate ||
      !endDate ||
      !month1Salary ||
      !month2Salary ||
      !month3Salary
    ) {
      alert("필수 항목을 입력해주세요.");
      return;
    }

    // 1. 휴업 기간 계산
    const layoffDays = calculateLayoffPeriod(startDate, endDate);

    // 2. 평균임금 계산
    const { totalSalary, averageWage, seventyPercentWage } =
      calculateAverageWage(month1Salary, month2Salary, month3Salary);

    // 3. 휴업수당 계산
    // 통상임금이 있고, 평균임금의 70%가 통상임금보다 높은 경우 통상임금으로 계산
    const regularWageAmount = Number(regularWage) || 0;
    const dailyAllowance =
      regularWageAmount > 0 && seventyPercentWage > regularWageAmount
        ? regularWageAmount
        : seventyPercentWage;

    const totalAllowance = dailyAllowance * layoffDays;

    setResult({
      layoffDays,
      totalSalary,
      averageWage,
      seventyPercentWage,
      regularWageAmount,
      dailyAllowance,
      totalAllowance,
    });
  };

  return (
    <>
      <Head>
        <title>휴업수당 계산기 - 2025년 기준</title>
        <meta
          name="description"
          content="2025년 기준 휴업수당을 계산해보세요. 휴업 기간과 이전 3개월 임금을 입력하여 받을 수 있는 휴업수당을 확인하세요."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">휴업수당 계산기</h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <div className="mb-6">
              <label className="block mb-2">
                휴업 시작일
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
                휴업 종료일
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
                첫 번째 달 임금 (원)
                <input
                  type="number"
                  value={month1Salary}
                  onChange={(e) => setMonth1Salary(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="첫 번째 달 임금을 입력하세요"
                />
                {month1Salary && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약{" "}
                    {Math.round(Number(month1Salary) / 10000).toLocaleString()}
                    만원
                  </span>
                )}
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                두 번째 달 임금 (원)
                <input
                  type="number"
                  value={month2Salary}
                  onChange={(e) => setMonth2Salary(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="두 번째 달 임금을 입력하세요"
                />
                {month2Salary && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약{" "}
                    {Math.round(Number(month2Salary) / 10000).toLocaleString()}
                    만원
                  </span>
                )}
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                세 번째 달 임금 (원)
                <input
                  type="number"
                  value={month3Salary}
                  onChange={(e) => setMonth3Salary(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="세 번째 달 임금을 입력하세요"
                />
                {month3Salary && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약{" "}
                    {Math.round(Number(month3Salary) / 10000).toLocaleString()}
                    만원
                  </span>
                )}
              </label>
            </div>

            <div className="mb-6">
              <label className="block mb-2">
                통상임금 (원)
                <input
                  type="number"
                  value={regularWage}
                  onChange={(e) => setRegularWage(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="통상임금을 입력하세요 (없으면 비워두세요)"
                />
                {regularWage && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약{" "}
                    {Math.round(Number(regularWage) / 10000).toLocaleString()}
                    만원
                  </span>
                )}
              </label>
            </div>

            <button
              onClick={calculateLayoffAllowance}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              계산하기
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                  <h3 className="text-lg font-bold mb-4">
                    ▶ 휴업수당 계산 결과
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>휴업 기간</span>
                      <span>{result.layoffDays}일</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3개월 임금 총액</span>
                      <span>{result.totalSalary.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1일 평균임금</span>
                      <span>{result.averageWage.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>평균임금의 70%</span>
                      <span>
                        {result.seventyPercentWage.toLocaleString()} 원
                      </span>
                    </div>
                    {result.regularWageAmount > 0 && (
                      <div className="flex justify-between">
                        <span>통상임금</span>
                        <span>
                          {result.regularWageAmount.toLocaleString()} 원
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>1일 휴업수당</span>
                      <span>{result.dailyAllowance.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>총 휴업수당</span>
                      <span>{result.totalAllowance.toLocaleString()} 원</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">휴업수당 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">휴업수당 계산 방법</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1일 평균임금 = (이전 3개월 임금 총액) ÷ 90일</li>
                  <li>
                    1일 휴업수당 = 평균임금의 70% (단, 통상임금보다 높을 경우
                    통상임금으로 지급)
                  </li>
                  <li>총 휴업수당 = 1일 휴업수당 × 휴업일수</li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">휴업수당 지급 기준</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>사용자의 귀책사유로 인한 휴업 시 지급</li>
                  <li>
                    평균임금의 70%를 기본으로 하되, 통상임금보다 높을 경우
                    통상임금으로 지급
                  </li>
                  <li>휴업 기간 동안 매일 지급</li>
                </ul>
              </div>

              <p className="text-sm">
                * 이 계산기는 참고용이며, 실제 휴업수당은 회사 규정에 따라 다를
                수 있습니다.
              </p>
            </div>
          </div>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
