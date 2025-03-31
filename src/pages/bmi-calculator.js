import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [results, setResults] = useState(null);

  const handleHeightChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setHeight(formattedValue);
  };

  const handleWeightChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setWeight(formattedValue);
  };

  const handleAgeChange = (value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setAge(formattedValue);
  };

  const calculateBMI = () => {
    const heightValue = Number(height.replace(/,/g, "")) || 0;
    const weightValue = Number(weight.replace(/,/g, "")) || 0;
    const ageValue = Number(age.replace(/,/g, "")) || 0;

    if (!heightValue || !weightValue || !ageValue) {
      alert("키, 체중, 나이를 모두 입력해주세요.");
      return;
    }

    // BMI 계산: 체중(kg) / (키(m))²
    const heightInMeters = heightValue / 100;
    const bmi = weightValue / (heightInMeters * heightInMeters);

    // 체지방률 계산 (BMI 기반 추정)
    // 남성: (1.2 × BMI) + (0.23 × 나이) - 5.4
    // 여성: (1.2 × BMI) + (0.23 × 나이) - 16.2
    const bodyFat =
      gender === "male"
        ? 1.2 * bmi + 0.23 * ageValue - 5.4
        : 1.2 * bmi + 0.23 * ageValue - 16.2;

    // BMI 범위 판정
    let bmiCategory = "";
    if (bmi < 18.5) bmiCategory = "저체중";
    else if (bmi < 23) bmiCategory = "정상";
    else if (bmi < 25) bmiCategory = "과체중";
    else if (bmi < 30) bmiCategory = "비만";
    else bmiCategory = "고도비만";

    // 체지방률 범위 판정
    let bodyFatCategory = "";
    if (gender === "male") {
      if (bodyFat < 6) bodyFatCategory = "필수지방";
      else if (bodyFat < 13) bodyFatCategory = "운동선수";
      else if (bodyFat < 17) bodyFatCategory = "건강";
      else if (bodyFat < 25) bodyFatCategory = "평균";
      else bodyFatCategory = "비만";
    } else {
      if (bodyFat < 14) bodyFatCategory = "필수지방";
      else if (bodyFat < 21) bodyFatCategory = "운동선수";
      else if (bodyFat < 25) bodyFatCategory = "건강";
      else if (bodyFat < 32) bodyFatCategory = "평균";
      else bodyFatCategory = "비만";
    }

    setResults({
      bmi,
      bodyFat,
      bmiCategory,
      bodyFatCategory,
      height: heightValue,
      weight: weightValue,
      age: ageValue,
      gender: gender === "male" ? "남성" : "여성",
    });
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(number * 10) / 10);
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>BMI & 체지방률 계산기 - 신체질량지수와 체지방률 계산</title>
        <meta
          name="description"
          content="키, 체중, 성별, 나이를 입력하여 BMI(신체질량지수)와 체지방률을 계산해보세요. 정상 범위와 건강 상태를 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="BMI 계산기, 체지방률 계산기, 신체질량지수, 체지방률, 건강지표"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/bmi-calculator"
        />
        <meta
          property="og:title"
          content="BMI & 체지방률 계산기 - 신체질량지수와 체지방률 계산"
        />
        <meta
          property="og:description"
          content="키, 체중, 성별, 나이를 입력하여 BMI(신체질량지수)와 체지방률을 계산해보세요. 정상 범위와 건강 상태를 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/bmi-calculator"
        />
        <meta
          property="twitter:title"
          content="BMI & 체지방률 계산기 - 신체질량지수와 체지방률 계산"
        />
        <meta
          property="twitter:description"
          content="키, 체중, 성별, 나이를 입력하여 BMI(신체질량지수)와 체지방률을 계산해보세요. 정상 범위와 건강 상태를 확인할 수 있습니다."
        />
        <meta
          property="twitter:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="anteconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://anteconomy.co.kr/bmi-calculator" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">BMI & 체지방률 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  키 (cm)
                </label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => handleHeightChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="키 입력"
                />
              </div>
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
                <label className="block text-sm font-medium mb-2">성별</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                >
                  <option value="male">남성</option>
                  <option value="female">여성</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">나이</label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => handleAgeChange(e.target.value)}
                  className="w-full p-2 rounded bg-green-700 border border-green-600"
                  placeholder="나이 입력"
                />
              </div>
            </div>
            <button
              onClick={calculateBMI}
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
                  <h3 className="text-lg font-medium mb-2">
                    BMI (신체질량지수)
                  </h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.bmi)}
                  </p>
                  <p className="text-sm mt-1">범위: {results.bmiCategory}</p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">체지방률</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.bodyFat)}%
                  </p>
                  <p className="text-sm mt-1">
                    범위: {results.bodyFatCategory}
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
                      <td className="p-2">성별</td>
                      <td className="p-2 text-right">{results.gender}</td>
                    </tr>
                    <tr className="border-t border-green-700">
                      <td className="p-2">키</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.height)} cm
                      </td>
                    </tr>
                    <tr className="border-t border-green-700">
                      <td className="p-2">체중</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.weight)} kg
                      </td>
                    </tr>
                    <tr className="border-t border-green-700">
                      <td className="p-2">나이</td>
                      <td className="p-2 text-right">
                        {formatNumber(results.age)} 세
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">
              BMI & 체지방률 계산기 사용법
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>키: 현재 키 (cm)</li>
                  <li>체중: 현재 체중 (kg)</li>
                  <li>성별: 남성/여성 선택</li>
                  <li>나이: 현재 나이</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">BMI 범위</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>저체중: 18.5 미만</li>
                  <li>정상: 18.5 ~ 22.9</li>
                  <li>과체중: 23.0 ~ 24.9</li>
                  <li>비만: 25.0 ~ 29.9</li>
                  <li>고도비만: 30.0 이상</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">체지방률 범위</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>남성</li>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>필수지방: 6% 미만</li>
                    <li>운동선수: 6-13%</li>
                    <li>건강: 13-17%</li>
                    <li>평균: 17-25%</li>
                    <li>비만: 25% 이상</li>
                  </ul>
                  <li>여성</li>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>필수지방: 14% 미만</li>
                    <li>운동선수: 14-21%</li>
                    <li>건강: 21-25%</li>
                    <li>평균: 25-32%</li>
                    <li>비만: 32% 이상</li>
                  </ul>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    BMI는 신장과 체중만을 고려한 지표이며, 체지방률은
                    추정치입니다.
                  </li>
                  <li>
                    운동선수나 근육량이 많은 경우 BMI가 실제 체지방률을 정확히
                    반영하지 못할 수 있습니다.
                  </li>
                  <li>
                    정확한 체지방률 측정을 위해서는 전문적인 장비를 통한 측정이
                    필요합니다.
                  </li>
                  <li>
                    건강한 체중 관리를 위해서는 BMI와 체지방률 외에도 근육량,
                    기초대사량 등을 고려해야 합니다.
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
