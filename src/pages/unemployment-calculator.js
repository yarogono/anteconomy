import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

export default function UnemploymentCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [salary, setSalary] = useState("");
  const [isPartTime, setIsPartTime] = useState(false);
  const [workHours, setWorkHours] = useState(8);
  const [result, setResult] = useState(null);

  // 고용보험 가입기간 계산
  const calculateInsurancePeriod = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    const totalMonths = years * 12 + months;

    if (totalMonths < 12) return "1미만";
    if (totalMonths < 36) return "1-3";
    if (totalMonths < 60) return "3-5";
    if (totalMonths < 120) return "5-10";
    return "10이상";
  };

  // 지급기간 계산
  const calculatePaymentPeriod = (age, period) => {
    const periodTable = {
      "1미만": { under50: 120, over50: 120 },
      "1-3": { under50: 150, over50: 180 },
      "3-5": { under50: 180, over50: 210 },
      "5-10": { under50: 210, over50: 240 },
      "10이상": { under50: 240, over50: 270 },
    };

    const isOver50 = age >= 50;
    return periodTable[period][isOver50 ? "over50" : "under50"];
  };

  // 나이 계산
  const calculateAge = (birthDate, endDate) => {
    const birth = new Date(birthDate);
    const end = new Date(endDate);
    let age = end.getFullYear() - birth.getFullYear();
    const monthDiff = end.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && end.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const calculateBenefit = () => {
    if (!birthDate || !startDate || !endDate || !salary) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    // 실업 기간 계산 (퇴사일 - 입사일)
    const start = new Date(startDate);
    const end = new Date(endDate);
    const unemploymentDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));

    if (unemploymentDays < 180) {
      alert(
        "실업급여를 받기 위해서는 최소 180일 이상의 근무 기간이 필요합니다."
      );
      return;
    }

    // 1. 1일 실업급여액 계산 (퇴직 전 3개월 평균임금의 60%)
    const dailyBenefit = Math.min(66000, (salary / 90) * 0.6);

    // 2. 연령 계산
    const age = calculateAge(birthDate, endDate);

    // 3. 고용보험 가입기간 계산
    const insurancePeriod = calculateInsurancePeriod(startDate, endDate);

    // 4. 지급기간 계산
    const paymentDays = calculatePaymentPeriod(age, insurancePeriod);

    // 5. 총 실업급여액 계산
    let totalBenefit = dailyBenefit * paymentDays;

    // 단시간 근로자 계산
    if (isPartTime) {
      totalBenefit = totalBenefit * (workHours / 8);
    }

    // 월 평균 지급액 계산 (30일 기준)
    const monthlyBenefit = (totalBenefit / paymentDays) * 30;

    setResult({
      dailyBenefit: Math.round(dailyBenefit),
      paymentDays: paymentDays,
      totalBenefit: Math.round(totalBenefit),
      monthlyBenefit: Math.round(monthlyBenefit),
      age: age,
      insurancePeriod: insurancePeriod,
    });
  };

  return (
    <>
      <Head>
        <title>실업급여 계산기 - 2025년 기준</title>
        <meta
          name="description"
          content="2025년 기준 실업급여(구직급여) 예상 금액을 계산해보세요. 퇴직 전 임금과 나이, 고용보험 가입기간에 따른 실업급여 모의계산이 가능합니다."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">실업급여 계산기</h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <div className="mb-6">
              <label className="block mb-2">
                생년월일
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                />
              </label>
            </div>

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
                퇴직 전 3개월 총 임금 (원)
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="퇴직 전 3개월 총 임금을 입력하세요"
                />
                {salary && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약 {Math.round(Number(salary) / 10000).toLocaleString()}만원
                  </span>
                )}
              </label>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isPartTime}
                  onChange={(e) => setIsPartTime(e.target.checked)}
                  className="mr-2"
                />
                단시간 근로자
              </label>
            </div>

            {isPartTime && (
              <div className="mb-6">
                <label className="block mb-2">
                  1일 근무시간
                  <input
                    type="number"
                    value={workHours}
                    onChange={(e) => setWorkHours(Number(e.target.value))}
                    min="1"
                    max="8"
                    className="w-full p-2 border rounded mt-1"
                  />
                </label>
              </div>
            )}

            <button
              onClick={calculateBenefit}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              계산하기
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                  <h3 className="text-lg font-bold mb-4">
                    ▶ 실업급여 계산 결과
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>고용보험 가입기간</span>
                      <span>
                        {result.insurancePeriod === "1미만" && "1년 미만"}
                        {result.insurancePeriod === "1-3" &&
                          "1년 이상 3년 미만"}
                        {result.insurancePeriod === "3-5" &&
                          "3년 이상 5년 미만"}
                        {result.insurancePeriod === "5-10" &&
                          "5년 이상 10년 미만"}
                        {result.insurancePeriod === "10이상" && "10년 이상"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>1일 실업급여액</span>
                      <span>{result.dailyBenefit.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>지급기간</span>
                      <span>{result.paymentDays} 일</span>
                    </div>
                    <div className="flex justify-between">
                      <span>월 평균 지급액</span>
                      <span>{result.monthlyBenefit.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>총 실업급여액</span>
                      <span>{result.totalBenefit.toLocaleString()} 원</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">실업급여 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">실업급여 계산 방법</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1일 실업급여액 = (퇴직 전 3개월 총 임금 ÷ 90일) × 60%</li>
                  <li>2025년 기준 상한액: 66,000원</li>
                  <li>하한액: 최저임금 일급의 80%</li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">지급기간 기준</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">연령/가입기간</th>
                      <th className="text-center">1년 미만</th>
                      <th className="text-center">1~3년</th>
                      <th className="text-center">3~5년</th>
                      <th className="text-center">5~10년</th>
                      <th className="text-center">10년 이상</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">50세 미만</td>
                      <td className="text-center">120일</td>
                      <td className="text-center">150일</td>
                      <td className="text-center">180일</td>
                      <td className="text-center">210일</td>
                      <td className="text-center">240일</td>
                    </tr>
                    <tr>
                      <td className="py-2">50세 이상</td>
                      <td className="text-center">120일</td>
                      <td className="text-center">180일</td>
                      <td className="text-center">210일</td>
                      <td className="text-center">240일</td>
                      <td className="text-center">270일</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm">
                * 이 계산기는 참고용이며, 실제 수급액은 고용센터에서 정확히
                확인하시기 바랍니다.
              </p>
            </div>
          </div>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
