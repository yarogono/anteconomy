import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function ElectricityBillCalculator() {
  const [usage, setUsage] = useState("");
  const [results, setResults] = useState(null);

  const handleUsageChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setUsage(formattedValue);
  };

  const calculateBill = () => {
    const usageValue = Number(usage.replace(/,/g, "")) || 0;

    if (!usageValue) {
      alert("전력 사용량을 입력해주세요.");
      return;
    }

    // 2024년 가정용 전기 요금제 (한국전력공사 기준)
    let totalBill = 0;
    let details = [];

    // 기본요금
    const baseRate = 910;
    totalBill += baseRate;
    details.push({ name: "기본요금", amount: baseRate });

    // 전력량요금 (계절별 구분)
    const season = getSeason();
    const rates = getSeasonalRates(season);

    let remainingUsage = usageValue;
    let currentTier = 0;
    let tierUsage = 0;

    while (remainingUsage > 0 && currentTier < rates.length) {
      const tierLimit = rates[currentTier].limit;
      tierUsage = Math.min(remainingUsage, tierLimit);
      const tierAmount = tierUsage * rates[currentTier].rate;
      totalBill += tierAmount;
      details.push({
        name: `${rates[currentTier].name} (${tierUsage}kWh)`,
        amount: tierAmount,
      });
      remainingUsage -= tierUsage;
      currentTier++;
    }

    // 기후환경요금 (전력량요금의 3.7%)
    const climateCharge = Math.round(totalBill * 0.037);
    totalBill += climateCharge;
    details.push({ name: "기후환경요금", amount: climateCharge });

    // 연료비조정액 (전력량요금의 4.5%)
    const fuelCharge = Math.round(totalBill * 0.045);
    totalBill += fuelCharge;
    details.push({ name: "연료비조정액", amount: fuelCharge });

    // 전력산업기반기금 (전력량요금의 5.1%)
    const foundationCharge = Math.round(totalBill * 0.051);
    totalBill += foundationCharge;
    details.push({ name: "전력산업기반기금", amount: foundationCharge });

    // 부가가치세 (전체 요금의 10%)
    const vat = Math.round(totalBill * 0.1);
    totalBill += vat;
    details.push({ name: "부가가치세", amount: vat });

    setResults({
      totalBill,
      details,
      season,
      usage: usageValue,
    });
  };

  const getSeason = () => {
    const month = new Date().getMonth() + 1;
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 12 || month <= 2) return "winter";
    return "other";
  };

  const getSeasonalRates = (season) => {
    if (season === "summer") {
      return [
        { name: "200kWh 이하", limit: 200, rate: 60.7 },
        { name: "201-400kWh", limit: 200, rate: 125.9 },
        { name: "401kWh 초과", limit: Infinity, rate: 187.9 },
      ];
    } else if (season === "winter") {
      return [
        { name: "200kWh 이하", limit: 200, rate: 60.7 },
        { name: "201-400kWh", limit: 200, rate: 125.9 },
        { name: "401kWh 초과", limit: Infinity, rate: 187.9 },
      ];
    } else {
      return [
        { name: "200kWh 이하", limit: 200, rate: 60.7 },
        { name: "201-400kWh", limit: 200, rate: 125.9 },
        { name: "401kWh 초과", limit: Infinity, rate: 187.9 },
      ];
    }
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(number));
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>전기 요금 계산기 - 전력 사용량별 예상 요금 계산</title>
        <meta
          name="description"
          content="전력 사용량을 입력하여 예상 전기 요금을 계산해보세요. 기본요금, 전력량요금, 기후환경요금, 연료비조정액 등을 포함한 상세 요금 내역을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="전기 요금 계산기, 전력 요금, 전기세, 전력 사용량, 전기 요금제"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/electricity-bill-calculator"
        />
        <meta
          property="og:title"
          content="전기 요금 계산기 - 전력 사용량별 예상 요금 계산"
        />
        <meta
          property="og:description"
          content="전력 사용량을 입력하여 예상 전기 요금을 계산해보세요. 기본요금, 전력량요금, 기후환경요금, 연료비조정액 등을 포함한 상세 요금 내역을 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/electricity-bill-calculator"
        />
        <meta
          property="twitter:title"
          content="전기 요금 계산기 - 전력 사용량별 예상 요금 계산"
        />
        <meta
          property="twitter:description"
          content="전력 사용량을 입력하여 예상 전기 요금을 계산해보세요. 기본요금, 전력량요금, 기후환경요금, 연료비조정액 등을 포함한 상세 요금 내역을 확인할 수 있습니다."
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
          href="https://anteconomy.co.kr/electricity-bill-calculator"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">전기 요금 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  전력 사용량 (kWh)
                </label>
                <input
                  type="text"
                  value={usage}
                  onChange={(e) => handleUsageChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="전력 사용량 입력"
                />
              </div>
            </div>
            <button
              onClick={calculateBill}
              className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
            >
              계산하기
            </button>
          </div>

          {results && (
            <div className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">예상 전기 요금</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.totalBill)}원
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">전력 사용량</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.usage)} kWh
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-700">
                      <th className="p-2 text-left">구분</th>
                      <th className="p-2 text-right">금액 (원)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.details.map((detail, index) => (
                      <tr key={index} className="border-t border-green-700">
                        <td className="p-2">{detail.name}</td>
                        <td className="p-2 text-right">
                          {formatNumber(detail.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">전기 요금 계산기 사용법</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>전력 사용량: 한 달 동안 사용한 전력량 (kWh)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">요금 구성</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    기본요금: 전기 사용 여부와 관계없이 부과되는 기본 요금
                  </li>
                  <li>전력량요금: 실제 사용한 전력량에 따른 요금</li>
                  <li>기후환경요금: 전력량요금의 3.7%</li>
                  <li>연료비조정액: 전력량요금의 4.5%</li>
                  <li>전력산업기반기금: 전력량요금의 5.1%</li>
                  <li>부가가치세: 전체 요금의 10%</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">계절별 구분</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>여름철 (6월~8월)</li>
                  <li>봄가을철 (3월~5월, 9월~10월)</li>
                  <li>봄가을철 (11월)</li>
                  <li>겨울철 (12월~2월)</li>
                  <li>봄가을철 (4월)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    계산된 요금은 예상치이며, 실제 요금과 다를 수 있습니다.
                  </li>
                  <li>
                    계절별 요금제가 적용되며, 사용량에 따라 단계별 요금이
                    적용됩니다.
                  </li>
                  <li>전력 사용량이 많을수록 단위 요금이 높아집니다.</li>
                  <li>
                    전력 절약을 위해 불필요한 전기 사용을 줄이는 것이 좋습니다.
                  </li>
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
