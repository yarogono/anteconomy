import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GoldPriceChart from "../components/GoldPriceChart";
import CoupangBanner from "../components/CoupangBanner";

export default function GoldPrice() {
  const [goldPrice, setGoldPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleString("ko-KR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://m.search.naver.com/p/csearch/content/qapirender.nhn?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=keb&u6=standardUnit&u7=0&u3=USD&u4=KRW&u8=down&u2=1"
        );
        const rate = response.data?.country[1].subValue;
        if (rate) {
          setExchangeRate(parseFloat(rate.replace(/,/g, "")));
        }
      } catch (error) {
        console.error("환율 정보를 불러오는데 실패했습니다:", error);
      }
    };

    fetchExchangeRate();
    const exchangeRateTimer = setInterval(fetchExchangeRate, 60000);

    return () => clearInterval(exchangeRateTimer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const fetchGoldPrice = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/gold-price");

        if (!response.data) {
          throw new Error("Invalid API response format");
        }

        const data = response.data;
        setGoldPrice(data);
        setChartData((prevData) => {
          const newData = [
            ...prevData,
            {
              time: new Date().toLocaleTimeString(),
              price: parseFloat(data.price),
              priceKRW: exchangeRate
                ? parseFloat(data.price) * exchangeRate
                : null,
            },
          ];

          if (newData.length > 60) {
            return newData.slice(-60);
          }
          return newData;
        });

        setError(null);
        setLoading(false);
      } catch (err) {
        console.error("금 시세를 불러오는데 실패했습니다:", err);
        if (err.response) {
          console.log("Error Response:", err.response.data);
          console.log("Error Status:", err.response.status);
        }

        const sampleData = {
          price: "2023.50",
          change: "-12.30",
          changePercent: "-0.60",
          high: "2035.80",
          low: "2020.40",
          timestamp: new Date().toISOString(),
          volume: 145230,
        };

        setGoldPrice(sampleData);
        setChartData((prevData) => {
          const newData = [
            ...prevData,
            {
              time: new Date().toLocaleTimeString(),
              price: parseFloat(sampleData.price),
              priceKRW: exchangeRate
                ? parseFloat(sampleData.price) * exchangeRate
                : null,
            },
          ];

          if (newData.length > 60) {
            return newData.slice(-60);
          }
          return newData;
        });
        setError(
          `실시간 데이터를 불러올 수 없어 샘플 데이터를 표시합니다. (${err.message})`
        );
        setLoading(false);
      }
    };

    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 60000);

    return () => clearInterval(interval);
  }, [mounted, exchangeRate]);

  const formatPrice = (price, currency = "USD") => {
    if (!price) return "N/A";
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  const formatPriceKRW = (price) => {
    if (!price || !exchangeRate) return "N/A";
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(price * exchangeRate);
  };

  return (
    <>
      <Head>
        <title>실시간 금 시세 - 실시간 국내/해외 금 시세 정보</title>
        <meta
          name="description"
          content="실시간 금 시세 정보를 확인하세요. 국내/해외 금 시세, 차트, 분석까지 한번에 볼 수 있습니다."
        />
        <meta
          name="keywords"
          content="금 시세, 실시간 금 시세, 국내 금 시세, 해외 금 시세, 금 시세 차트, 금 시세 분석"
        />
        <meta
          property="og:title"
          content="금 시세 - 실시간 국내/해외 금 시세 정보"
        />
        <meta
          property="og:description"
          content="실시간 금 시세 정보를 확인하세요. 국내/해외 금 시세, 차트, 분석까지 한번에 볼 수 있습니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anteconomy.co.kr/gold-price" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="금 시세 - 실시간 국내/해외 금 시세 정보"
        />
        <meta
          name="twitter:description"
          content="실시간 금 시세 정보를 확인하세요. 국내/해외 금 시세, 차트, 분석까지 한번에 볼 수 있습니다."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">실시간 금 시세</h1>
          {mounted && <p className="text-gray-600">{currentTime} 기준</p>}
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-xl">시세를 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">현재가 (원)</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {formatPriceKRW(parseFloat(goldPrice?.price))}
                </p>
                <p className="text-xl text-gray-600 mt-2">
                  {formatPrice(parseFloat(goldPrice?.price))}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">전일 대비</h3>
                <p
                  className={`text-3xl font-bold ${
                    parseFloat(goldPrice?.change) > 0
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {parseFloat(goldPrice?.change) > 0 ? "+" : ""}
                  {formatPriceKRW(parseFloat(goldPrice?.change))}
                </p>
                <p className="text-xl text-gray-600 mt-2">
                  {parseFloat(goldPrice?.change) > 0 ? "+" : ""}
                  {goldPrice?.change} 달러
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">등락률</h3>
                <p
                  className={`text-3xl font-bold ${
                    parseFloat(goldPrice?.changePercent) > 0
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {parseFloat(goldPrice?.changePercent) > 0 ? "+" : ""}
                  {goldPrice?.changePercent}%
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">거래량</h3>
                <p className="text-3xl font-bold text-gray-800">
                  {new Intl.NumberFormat("ko-KR").format(goldPrice?.volume)}
                </p>
                <p className="text-sm text-gray-600 mt-2">온스</p>
              </div>
            </div>

            <CoupangBanner />

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">실시간 차트</h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis
                      yAxisId="left"
                      orientation="left"
                      domain={["auto", "auto"]}
                      tickFormatter={(value) =>
                        `₩${(value / 1000).toFixed(0)}K`
                      }
                    />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      domain={["auto", "auto"]}
                      tickFormatter={(value) => `$${value.toFixed(2)}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "0.5rem",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value, name) => [
                        name === "price"
                          ? `₩${value.toLocaleString()}`
                          : `$${value.toFixed(2)}`,
                        name === "price" ? "원" : "달러",
                      ]}
                    />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="priceKRW"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="price"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">시장 정보</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">고가</h3>
                    <p className="text-xl">
                      {formatPriceKRW(parseFloat(goldPrice?.high))}
                    </p>
                    <p className="text-lg text-gray-600">
                      {formatPrice(parseFloat(goldPrice?.high))}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">저가</h3>
                    <p className="text-xl">
                      {formatPriceKRW(parseFloat(goldPrice?.low))}
                    </p>
                    <p className="text-lg text-gray-600">
                      {formatPrice(parseFloat(goldPrice?.low))}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">시가</h3>
                    <p className="text-xl">
                      {formatPriceKRW(parseFloat(goldPrice?.open))}
                    </p>
                    <p className="text-lg text-gray-600">
                      {formatPrice(parseFloat(goldPrice?.open))}
                    </p>
                  </div>
                </div>
              </div>

              <CoupangBanner />

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">투자 정보</h2>
                <div className="prose max-w-none">
                  <p>
                    금은 전통적으로 안전자산으로 인식되어 왔으며, 인플레이션
                    헤지 수단으로도 활용됩니다. 국제 금 시세는 다양한 요인에
                    의해 영향을 받습니다:
                  </p>
                  <ul className="list-disc pl-6 mt-4">
                    <li>글로벌 경제 상황</li>
                    <li>주요국 통화 가치</li>
                    <li>지정학적 리스크</li>
                    <li>중앙은행의 금 보유량 변화</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
