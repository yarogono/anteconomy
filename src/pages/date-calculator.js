import { useState } from "react";
import Head from "next/head";
import CoupangBanner from "../components/CoupangBanner";

export default function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysResult, setDaysResult] = useState("");
  const [includeStart, setIncludeStart] = useState(false);
  const [daysAfter, setDaysAfter] = useState("");
  const [daysBefore, setDaysBefore] = useState("");
  const [afterDate, setAfterDate] = useState("");
  const [beforeDate, setBeforeDate] = useState("");

  const calculateDays = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (includeStart) {
      days += 1;
    }

    setDaysResult(`${days}일`);
  };

  const calculateAfterDate = () => {
    if (!startDate || !daysAfter) return;

    const start = new Date(startDate);
    const days = parseInt(daysAfter);
    start.setDate(start.getDate() + (includeStart ? days - 1 : days));

    setAfterDate(start.toISOString().split("T")[0]);
  };

  const calculateBeforeDate = () => {
    if (!startDate || !daysBefore) return;

    const start = new Date(startDate);
    const days = parseInt(daysBefore);
    start.setDate(start.getDate() - (includeStart ? days - 1 : days));

    setBeforeDate(start.toISOString().split("T")[0]);
  };

  return (
    <>
      <Head>
        <title>날짜 계산기 - 일수 계산, 날짜 계산</title>
        <meta
          name="description"
          content="특정 날짜 사이의 일수를 계산하고, 특정 날짜로부터 며칠 후/전의 날짜를 계산할 수 있는 편리한 날짜 계산기입니다."
        />
        <meta
          name="keywords"
          content="날짜 계산기, 일수 계산, D-day 계산, 날짜 차이 계산"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">날짜 계산기</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">날짜 간 일수 계산</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">시작일</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">종료일</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeStart"
                  checked={includeStart}
                  onChange={(e) => setIncludeStart(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="includeStart">시작일 포함</label>
              </div>
              <button
                onClick={calculateDays}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                계산하기
              </button>
              {daysResult && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-lg font-semibold">결과: {daysResult}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">며칠 후의 날짜 계산</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">시작일</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">일수</label>
                <input
                  type="number"
                  value={daysAfter}
                  onChange={(e) => setDaysAfter(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="며칠 후?"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeStartAfter"
                  checked={includeStart}
                  onChange={(e) => setIncludeStart(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="includeStartAfter">시작일 포함</label>
              </div>
              <button
                onClick={calculateAfterDate}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                계산하기
              </button>
              {afterDate && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-lg font-semibold">결과: {afterDate}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <CoupangBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">며칠 전의 날짜 계산</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">시작일</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">일수</label>
                <input
                  type="number"
                  value={daysBefore}
                  onChange={(e) => setDaysBefore(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="며칠 전?"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="includeStartBefore"
                  checked={includeStart}
                  onChange={(e) => setIncludeStart(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="includeStartBefore">시작일 포함</label>
              </div>
              <button
                onClick={calculateBeforeDate}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                계산하기
              </button>
              {beforeDate && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-lg font-semibold">결과: {beforeDate}</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">날짜 계산 설명</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-2">날짜 간 일수 계산</h3>
              <p className="mb-4">
                두 날짜 사이의 일수를 계산합니다. 시작일 포함 여부를 선택할 수
                있습니다.
              </p>

              <h3 className="text-xl font-semibold mb-2">며칠 후의 날짜</h3>
              <p className="mb-4">
                특정 날짜로부터 지정한 일수가 지난 후의 날짜를 계산합니다.
              </p>

              <h3 className="text-xl font-semibold mb-2">며칠 전의 날짜</h3>
              <p className="mb-4">
                특정 날짜로부터 지정한 일수만큼 이전의 날짜를 계산합니다.
              </p>
            </div>
          </div>
        </div>

        <CoupangBanner />
      </main>
    </>
  );
}
