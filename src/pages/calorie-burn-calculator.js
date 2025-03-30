import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function CalorieBurnCalculator() {
  const [weight, setWeight] = useState("");
  const [duration, setDuration] = useState("");
  const [activity, setActivity] = useState("walking");
  const [results, setResults] = useState(null);

  const activities = {
    walking: { name: "걷기", met: 3.5 },
    running: { name: "달리기", met: 8.0 },
    cycling: { name: "자전거", met: 7.0 },
    swimming: { name: "수영", met: 6.0 },
    yoga: { name: "요가", met: 2.5 },
    dancing: { name: "댄스", met: 5.0 },
    hiking: { name: "등산", met: 6.0 },
    tennis: { name: "테니스", met: 7.0 },
    basketball: { name: "농구", met: 8.0 },
    soccer: { name: "축구", met: 7.0 },
    volleyball: { name: "배구", met: 4.0 },
    golf: { name: "골프", met: 4.5 },
    skiing: { name: "스키", met: 7.0 },
    skating: { name: "스케이트", met: 7.0 },
    boxing: { name: "복싱", met: 8.0 },
    martialArts: { name: "무술", met: 8.0 },
    aerobics: { name: "에어로빅", met: 6.0 },
    strengthTraining: { name: "근력운동", met: 4.0 },
    stretching: { name: "스트레칭", met: 2.3 },
    housework: { name: "집안일", met: 3.0 },
    gardening: { name: "정원 가꾸기", met: 4.0 },
  };

  const handleWeightChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setWeight(formattedValue);
  };

  const handleDurationChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setDuration(formattedValue);
  };

  const calculateCalories = () => {
    const weightValue = Number(weight.replace(/,/g, "")) || 0;
    const durationValue = Number(duration.replace(/,/g, "")) || 0;

    if (!weightValue || !durationValue) {
      alert("체중과 운동 시간을 입력해주세요.");
      return;
    }

    // MET(운동 강도) × 체중(kg) × 시간(시간) × 1.05
    const calories =
      activities[activity].met * weightValue * (durationValue / 60) * 1.05;

    setResults({
      calories,
      weight: weightValue,
      duration: durationValue,
      activity: activities[activity].name,
      met: activities[activity].met,
    });
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(number));
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>칼로리 소모량 계산기 - 운동별 소모 칼로리 계산</title>
        <meta
          name="description"
          content="운동 종류, 운동 시간, 체중을 입력하여 소모된 칼로리를 계산해보세요. 걷기, 달리기, 수영 등 다양한 운동의 칼로리 소모량을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="칼로리 소모량 계산기, 운동 칼로리, 칼로리 계산, 운동 종류, MET"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/calorie-burn-calculator"
        />
        <meta
          property="og:title"
          content="칼로리 소모량 계산기 - 운동별 소모 칼로리 계산"
        />
        <meta
          property="og:description"
          content="운동 종류, 운동 시간, 체중을 입력하여 소모된 칼로리를 계산해보세요. 걷기, 달리기, 수영 등 다양한 운동의 칼로리 소모량을 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/calorie-burn-calculator"
        />
        <meta
          property="twitter:title"
          content="칼로리 소모량 계산기 - 운동별 소모 칼로리 계산"
        />
        <meta
          property="twitter:description"
          content="운동 종류, 운동 시간, 체중을 입력하여 소모된 칼로리를 계산해보세요. 걷기, 달리기, 수영 등 다양한 운동의 칼로리 소모량을 확인할 수 있습니다."
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
          href="https://anteconomy.co.kr/calorie-burn-calculator"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">칼로리 소모량 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  체중 (kg)
                </label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => handleWeightChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="체중 입력"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  운동 시간 (분)
                </label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => handleDurationChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="운동 시간 입력"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  운동 종류
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                >
                  {Object.entries(activities).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name} (MET: {value.met})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={calculateCalories}
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
                  <h3 className="text-lg font-medium mb-2">소모 칼로리</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.calories)} kcal
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">운동 강도 (MET)</h3>
                  <p className="text-2xl font-bold">{results.met}</p>
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
                      <td className="p-2">운동 종류</td>
                      <td className="p-2 text-right">{results.activity}</td>
                    </tr>
                    <tr className="border-t border-green-700">
                      <td className="p-2">체중</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.weight)} kg
                      </td>
                    </tr>
                    <tr className="border-t border-green-700">
                      <td className="p-2">운동 시간</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.duration)} 분
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">
              칼로리 소모량 계산기 사용법
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>체중: 현재 체중 (kg)</li>
                  <li>운동 시간: 운동한 시간 (분)</li>
                  <li>운동 종류: 수행한 운동 선택</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  MET(운동 강도) 설명
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>MET는 운동의 강도를 나타내는 단위입니다.</li>
                  <li>1 MET는 안정 시의 에너지 소비량을 의미합니다.</li>
                  <li>MET 값이 높을수록 더 많은 칼로리를 소모합니다.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">계산 방법</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>소모 칼로리 = MET × 체중(kg) × 시간(시간) × 1.05</li>
                  <li>시간은 분 단위를 시간 단위로 변환하여 계산합니다.</li>
                  <li>1.05는 운동 후 과잉 산소 소비를 고려한 계수입니다.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    계산된 칼로리는 예상치이며, 실제 소모량은 다를 수 있습니다.
                  </li>
                  <li>
                    운동 강도, 개인의 체력, 환경 등에 따라 차이가 있을 수
                    있습니다.
                  </li>
                  <li>
                    체중 감량을 위해서는 소모 칼로리보다 섭취 칼로리를 줄여야
                    합니다.
                  </li>
                  <li>
                    과도한 운동은 건강에 해로울 수 있으므로 적절한 강도로
                    운동하세요.
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
