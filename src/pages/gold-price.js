import { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const GoldPriceHistoryChart = dynamic(() => import("../components/GoldPriceHistoryChart"), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center text-gray-500">차트를 불러오는 중...</div>,
});

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
        const response = await fetch("/api/exchange-rates");
        if (!response.ok) throw new Error("환율 API 응답 오류");
        const data = await response.json();
        setExchangeRate(data.rates?.USD ?? null);
      } catch (error) {
        console.error("환율 정보를 불러오는데 실패했습니다:", error);
      }
    };

    fetchExchangeRate();
    const exchangeRateTimer = setInterval(fetchExchangeRate, 5 * 60 * 1000);

    return () => clearInterval(exchangeRateTimer);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const fetchGoldPrice = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/gold-price");
        if (!response.ok) {
          throw new Error("Invalid API response format");
        }

        const data = await response.json();
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
        setGoldPrice(null);
        setError("실시간 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
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


            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">실시간 차트</h2>
              <div className="h-[400px]">
                <GoldPriceHistoryChart data={chartData} />
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
