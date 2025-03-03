import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import axios from "axios";

// Finnhub API configuration
const FINNHUB_API_KEY = "cv25159r01qhefsi5ktgcv25159r01qhefsi5ku0";
const METAL_SYMBOLS = {
  gold: "OANDA:XAU_USD",
  silver: "OANDA:XAG_USD",
  platinum: "OANDA:XPT_USD",
  palladium: "OANDA:XPD_USD",
};

// Fallback data
const FALLBACK_PRICES = {
  gold: 2050.5,
  silver: 23.15,
  platinum: 890.5,
  palladium: 950.75,
};

export default function GoldPriceChart({ type = "international" }) {
  const [chartData, setChartData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const fetchPrice = async (retryAttempt = 0) => {
    try {
      const response = await axios.get(`https://finnhub.io/api/v1/quote`, {
        params: {
          symbol: METAL_SYMBOLS.gold,
          token: FINNHUB_API_KEY,
        },
      });

      if (!response.data || typeof response.data.c === "undefined") {
        throw new Error("Invalid data received from API");
      }

      const price = response.data.c || FALLBACK_PRICES.gold;
      setCurrentPrice(price);
      setError(null);

      const newPoint = {
        date: moment().format("HH:mm"),
        price:
          type === "domestic"
            ? (price * 1300 * 3.75) / 31.1035 // Convert to KRW/3.75g
            : price,
      };

      setChartData((prevData) => {
        const newData = [
          ...(prevData.length >= 60 ? prevData.slice(1) : prevData),
          newPoint,
        ];
        return newData;
      });

      setLoading(false);
      setRetryCount(0);
    } catch (err) {
      console.error("Error fetching price:", err);

      // Use fallback data on error
      if (retryAttempt >= 2) {
        const fallbackPrice = FALLBACK_PRICES.gold;
        setCurrentPrice(fallbackPrice);
        setError("API 연결 실패. 임시 데이터를 표시합니다.");

        const newPoint = {
          date: moment().format("HH:mm"),
          price:
            type === "domestic"
              ? (fallbackPrice * 1300 * 3.75) / 31.1035
              : fallbackPrice,
        };

        setChartData((prevData) => {
          const newData = [
            ...(prevData.length >= 60 ? prevData.slice(1) : prevData),
            newPoint,
          ];
          return newData;
        });
      } else {
        // Retry after 5 seconds
        setTimeout(() => {
          setRetryCount(retryAttempt + 1);
          fetchPrice(retryAttempt + 1);
        }, 5000);
      }

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice(); // Initial fetch

    // Set up interval for periodic updates
    const interval = setInterval(() => {
      fetchPrice();
    }, 60000); // Update every minute

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [type]);

  if (loading && !currentPrice) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <div className="text-gray-500">데이터를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px]">
      <div className="mb-4">
        <div className="text-lg font-semibold">
          현재 시세:{" "}
          {type === "domestic"
            ? `${Math.round(
                (currentPrice * 1300 * 3.75) / 31.1035
              ).toLocaleString()}원`
            : `$${currentPrice?.toFixed(2)}`}
        </div>
        {error && <div className="text-sm text-yellow-600 mt-1">{error}</div>}
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fontSize: 12 }}
            width={80}
            tickFormatter={(value) =>
              type === "domestic"
                ? `${(value / 1000).toFixed(0)}K`
                : `$${value.toFixed(0)}`
            }
          />
          <Tooltip
            contentStyle={{ backgroundColor: "white", borderRadius: "8px" }}
            formatter={(value) => [
              type === "domestic"
                ? `${value.toLocaleString()}원`
                : `$${value.toFixed(2)}`,
              "금 시세",
            ]}
            labelFormatter={(label) => `${label}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FFD700"
            strokeWidth={2}
            dot={false}
            name={type === "domestic" ? "국내 금 시세" : "국제 금 시세"}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
