import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

export default function AnnualLeaveCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [attendanceRate, setAttendanceRate] = useState(100);
  const [result, setResult] = useState(null);

  // 근속기간 계산 (년, 월, 일)
  const calculateEmploymentPeriod = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

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

    // 총 근무일수 계산
    const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24));

    return { years, months, days, totalDays };
  };

  // 연차 계산
  const calculateAnnualLeave = () => {
    if (!startDate) {
      alert("입사일을 입력해주세요.");
      return;
    }

    const { years, months, days, totalDays } = calculateEmploymentPeriod(
      startDate,
      endDate
    );
    let annualLeave = 0;
    let explanation = [];

    // 1년 미만 근무자의 연차 계산
    if (totalDays < 365) {
      // 1개월 개근 시 1일의 연차 부여
      const monthlyLeave = Math.floor(months);
      annualLeave = attendanceRate >= 80 ? monthlyLeave : 0;
      explanation.push(
        `근속기간 1년 미만으로 월 1일씩 총 ${monthlyLeave}일의 연차가 발생합니다.`
      );
      if (attendanceRate < 80) {
        explanation.push("출근율이 80% 미만이므로 연차가 발생하지 않습니다.");
      }
    }
    // 1년 이상 근무자의 연차 계산
    else {
      // 기본 15일
      if (attendanceRate >= 80) {
        annualLeave = 15;
        explanation.push(
          "1년 이상 근무하고 출근율 80% 이상으로 기본 15일의 연차가 발생합니다."
        );

        // 3년 이상 근무 시 2년마다 1일 추가 (최대 25일)
        if (years >= 3) {
          const additionalDays = Math.min(Math.floor((years - 1) / 2), 10);
          annualLeave += additionalDays;
          explanation.push(
            `${years}년 근무로 추가 ${additionalDays}일의 연차가 발생합니다.`
          );
        }

        // 1년 차 개근 시 발생하는 월별 연차 (11일)
        if (totalDays >= 365 && totalDays < 730) {
          annualLeave += 11;
          explanation.push("1년 차 개근으로 발생한 11일의 연차가 추가됩니다.");
        }
      } else {
        explanation.push("출근율이 80% 미만이므로 연차가 발생하지 않습니다.");
      }
    }

    setResult({
      years,
      months,
      days,
      totalDays,
      annualLeave,
      explanation,
    });
  };

  return (
    <>
      <Head>
        <title>연차 계산기 - 2025년 기준</title>
        <meta
          name="description"
          content="2025년 기준 연차를 계산해보세요. 입사일과 출근율을 입력하여 받을 수 있는 연차를 확인하세요."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">연차 계산기</h1>

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
                퇴사일 (퇴사 예정이 없다면 비워두세요)
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
                출근율 (%)
                <input
                  type="number"
                  value={attendanceRate}
                  onChange={(e) => setAttendanceRate(Number(e.target.value))}
                  min="0"
                  max="100"
                  className="w-full p-2 border rounded mt-1"
                  placeholder="출근율을 입력하세요"
                />
              </label>
            </div>

            <button
              onClick={calculateAnnualLeave}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              계산하기
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                  <h3 className="text-lg font-bold mb-4">▶ 연차 계산 결과</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>근속기간</span>
                      <span>
                        {result.years}년 {result.months}개월 {result.days}일
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>총 근무일수</span>
                      <span>{result.totalDays}일</span>
                    </div>
                    <div className="flex justify-between">
                      <span>출근율</span>
                      <span>{attendanceRate}%</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>총 연차</span>
                      <span>{result.annualLeave}일</span>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                      {result.explanation.map((text, index) => (
                        <p key={index} className="mb-1">
                          • {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">연차 계산 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">연차 발생 기준</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1년 미만 근무: 1개월 개근 시 1일의 연차 발생</li>
                  <li>1년 이상 근무: 15일의 연차 발생 (출근율 80% 이상 시)</li>
                  <li>3년 이상 근무: 2년마다 1일씩 추가 발생 (최대 25일)</li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">연차 산정 기준</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>입사일 기준으로 1년 단위 계산</li>
                  <li>1년간 80% 이상 출근해야 연차 발생</li>
                  <li>연차는 발생일로부터 1년 이내 사용</li>
                  <li>미사용 연차는 수당으로 정산 가능</li>
                </ul>
              </div>

              <p className="text-sm">
                * 이 계산기는 근로기준법을 기준으로 하며, 실제 연차는 회사
                내규에 따라 다를 수 있습니다.
              </p>
            </div>
          </div>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
