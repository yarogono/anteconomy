import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function FuelEfficiencyCalculator() {
  const [distance, setDistance] = useState("");
  const [fuelAmount, setFuelAmount] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [fuelType, setFuelType] = useState("gasoline");
  const [results, setResults] = useState(null);

  const handleDistanceChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setDistance(formattedValue);
  };

  const handleFuelAmountChange = (value) => {
    const numericValue = value.replace(/[^0-9.]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setFuelAmount(formattedValue);
  };

  const handleFuelPriceChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setFuelPrice(formattedValue);
  };

  const calculateEfficiency = () => {
    const distanceValue = Number(distance.replace(/,/g, "")) || 0;
    const fuelAmountValue = Number(fuelAmount.replace(/,/g, "")) || 0;
    const fuelPriceValue = Number(fuelPrice.replace(/,/g, "")) || 0;

    if (!distanceValue || !fuelAmountValue || !fuelPriceValue) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const kmPerLiter = distanceValue / fuelAmountValue;
    const costPerKm = (fuelAmountValue * fuelPriceValue) / distanceValue;
    const totalCost = fuelAmountValue * fuelPriceValue;

    setResults({
      kmPerLiter,
      costPerKm,
      totalCost,
      distance: distanceValue,
      fuelAmount: fuelAmountValue,
      fuelPrice: fuelPriceValue,
    });
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(number));
  };

  const formatDecimal = (number) => {
    return new Intl.NumberFormat("ko-KR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>자동차 연비 계산기 - 주행거리당 연료비용 계산</title>
        <meta
          name="description"
          content="주행거리와 연료 소비량을 입력하여 자동차의 연비와 연료비용을 계산해보세요. 휘발유, 경유, LPG 등 다양한 연료 종류의 연비를 계산할 수 있습니다."
        />
        <meta
          name="keywords"
          content="자동차 연비 계산기, 연비 계산, 연료비용 계산, 주행거리, 연료 소비량"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/fuel-efficiency-calculator"
        />
        <meta
          property="og:title"
          content="자동차 연비 계산기 - 주행거리당 연료비용 계산"
        />
        <meta
          property="og:description"
          content="주행거리와 연료 소비량을 입력하여 자동차의 연비와 연료비용을 계산해보세요. 휘발유, 경유, LPG 등 다양한 연료 종류의 연비를 계산할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/fuel-efficiency-calculator"
        />
        <meta
          property="twitter:title"
          content="자동차 연비 계산기 - 주행거리당 연료비용 계산"
        />
        <meta
          property="twitter:description"
          content="주행거리와 연료 소비량을 입력하여 자동차의 연비와 연료비용을 계산해보세요. 휘발유, 경유, LPG 등 다양한 연료 종류의 연비를 계산할 수 있습니다."
        />
        <meta
          property="twitter:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="anteconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/fuel-efficiency-calculator"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">자동차 연비 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  주행거리 (km)
                </label>
                <input
                  type="text"
                  value={distance}
                  onChange={(e) => handleDistanceChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="주행거리 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  연료 소비량 (L)
                </label>
                <input
                  type="text"
                  value={fuelAmount}
                  onChange={(e) => handleFuelAmountChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="연료 소비량 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  연료 종류
                </label>
                <select
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                >
                  <option value="gasoline">휘발유</option>
                  <option value="diesel">경유</option>
                  <option value="lpg">LPG</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  연료 가격 (원/L)
                </label>
                <input
                  type="text"
                  value={fuelPrice}
                  onChange={(e) => handleFuelPriceChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="연료 가격 입력"
                />
              </div>
            </div>
            <button
              onClick={calculateEfficiency}
              className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
            >
              계산하기
            </button>
          </div>

          {results && (
            <div className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">연비</h3>
                  <p className="text-2xl font-bold">
                    {formatDecimal(results.kmPerLiter)} km/L
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">km당 연료비용</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.costPerKm)}원
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 연료비용</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.totalCost)}원
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-700">
                      <th className="p-2 text-left">구분</th>
                      <th className="p-2 text-right">값</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-green-700">
                      <td className="p-2">주행거리</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.distance)} km
                      </td>
                    </tr>
                    <tr className="border-t border-green-700">
                      <td className="p-2">연료 소비량</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.fuelAmount)} L
                      </td>
                    </tr>
                    <tr className="border-t border-green-700">
                      <td className="p-2">연료 가격</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.fuelPrice)}원/L
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">연비 계산기 사용법</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>주행거리: 주행한 거리 (km)</li>
                  <li>연료 소비량: 사용한 연료량 (L)</li>
                  <li>연료 종류: 휘발유, 경유, LPG 선택</li>
                  <li>연료 가격: 현재 연료 가격 (원/L)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">계산 결과</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>연비: 1L당 주행 가능한 거리 (km/L)</li>
                  <li>km당 연료비용: 1km 주행에 필요한 연료비용</li>
                  <li>총 연료비용: 전체 주행에 사용된 연료비용</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">연비 개선 팁</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>적정 공기압 유지하기</li>
                  <li>급가속, 급제동 피하기</li>
                  <li>불필요한 짐 제거하기</li>
                  <li>에어컨 사용 최소화하기</li>
                  <li>정기적인 엔진 오일 교체하기</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>연비는 주행 조건에 따라 달라질 수 있습니다.</li>
                  <li>도심 주행과 고속도로 주행의 연비는 차이가 있습니다.</li>
                  <li>계절과 기온에 따라 연비가 변동될 수 있습니다.</li>
                  <li>연료 가격은 지역과 주유소에 따라 다를 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <AdsenseAd slot="calculator-bottom" />

        <footer className="bg-green-950 text-center py-8">
          <p className="text-sm">© 2024 안트이코노미. All rights reserved.</p>
          <p className="text-sm mt-2">
            실시간 금융 시장 분석과 투자 정보를 제공합니다.
          </p>
        </footer>
      </div>
    </>
  );
}
