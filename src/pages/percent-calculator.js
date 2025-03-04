import { useState } from "react";
import Head from "next/head";
import CoupangBanner from "../components/CoupangBanner";

export default function PercentCalculator() {
  const [percentValue, setPercentValue] = useState("");
  const [baseValue, setBaseValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [permillageValue, setPermillageValue] = useState("");
  const [basisPointValue, setBasisPointValue] = useState("");

  const calculatePercent = (base, percent) => {
    return (base * (percent / 100)).toFixed(2);
  };

  const calculatePermillage = (base, permillage) => {
    return (base * (permillage / 1000)).toFixed(3);
  };

  const calculateBasisPoint = (base, basisPoint) => {
    return (base * (basisPoint / 10000)).toFixed(4);
  };

  const handlePercentCalculation = () => {
    if (baseValue && percentValue) {
      const result = calculatePercent(
        parseFloat(baseValue),
        parseFloat(percentValue)
      );
      setResultValue(result);
    }
  };

  const handlePermillageCalculation = () => {
    if (baseValue && permillageValue) {
      const result = calculatePermillage(
        parseFloat(baseValue),
        parseFloat(permillageValue)
      );
      setResultValue(result);
    }
  };

  const handleBasisPointCalculation = () => {
    if (baseValue && basisPointValue) {
      const result = calculateBasisPoint(
        parseFloat(baseValue),
        parseFloat(basisPointValue)
      );
      setResultValue(result);
    }
  };

  return (
    <>
      <Head>
        <title>퍼센트 계산기 - 백분율, 천분율, 만분율 계산</title>
        <meta
          name="description"
          content="백분율(%), 천분율(‰), 만분율(‱) 계산기입니다. 쉽고 빠르게 비율을 계산해보세요."
        />
        <meta
          name="keywords"
          content="퍼센트 계산기, 백분율 계산, 천분율 계산, 만분율 계산, 베이시스 포인트"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">퍼센트 계산기</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">백분율(%) 계산</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">기준값</label>
                <input
                  type="number"
                  value={baseValue}
                  onChange={(e) => setBaseValue(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="기준값을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">백분율 (%)</label>
                <input
                  type="number"
                  value={percentValue}
                  onChange={(e) => setPercentValue(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="백분율을 입력하세요"
                />
              </div>
              <button
                onClick={handlePercentCalculation}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                계산하기
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">천분율(‰) 계산</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">기준값</label>
                <input
                  type="number"
                  value={baseValue}
                  onChange={(e) => setBaseValue(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="기준값을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">천분율 (‰)</label>
                <input
                  type="number"
                  value={permillageValue}
                  onChange={(e) => setPermillageValue(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="천분율을 입력하세요"
                />
              </div>
              <button
                onClick={handlePermillageCalculation}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                계산하기
              </button>
            </div>
          </div>
        </div>

        <CoupangBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">만분율(‱) 계산</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">기준값</label>
                <input
                  type="number"
                  value={baseValue}
                  onChange={(e) => setBaseValue(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="기준값을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">만분율 (‱)</label>
                <input
                  type="number"
                  value={basisPointValue}
                  onChange={(e) => setBasisPointValue(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="만분율을 입력하세요"
                />
              </div>
              <button
                onClick={handleBasisPointCalculation}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                계산하기
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">결과값</label>
                <input
                  type="text"
                  value={resultValue}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        <CoupangBanner />

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">비율 계산 설명</h2>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-2">백분율(%) 이란?</h3>
            <p className="mb-4">
              백분율 또는 퍼센트는 수를 100과의 비에 100을 곱한 값입니다. 예를
              들어, 50%는 0.5를, 150%는 1.5를 나타냅니다.
            </p>

            <h3 className="text-xl font-semibold mb-2">천분율(‰) 이란?</h3>
            <p className="mb-4">
              천분율 또는 퍼밀은 수를 1000과의 비에 1000을 곱한 값입니다. 주로
              해수의 염분 농도나 철도의 경사를 나타낼 때 사용됩니다.
            </p>

            <h3 className="text-xl font-semibold mb-2">만분율(‱) 이란?</h3>
            <p className="mb-4">
              만분율 또는 베이시스 포인트는 수를 10000과의 비에 10000을 곱한
              값입니다. 주로 금리를 나타낼 때 사용됩니다.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
