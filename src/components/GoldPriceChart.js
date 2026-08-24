import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./GoldPriceHistoryChart"), { ssr: false });

export default function GoldPriceChart({ type = "international" }) {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch("/api/gold-price", { signal: controller.signal });
        if (!response.ok) throw new Error("시세 API 응답 오류");
        const result = await response.json();
        const nextPrice = Number(result.price);
        if (!Number.isFinite(nextPrice)) throw new Error("잘못된 시세 데이터");
        setPrice(nextPrice);
        setError(null);
        setData((previous) => [...previous, {
          time: new Date().toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" }),
          price: type === "domestic" ? (nextPrice * 1300 * 3.75) / 31.1035 : nextPrice,
        }].slice(-60));
      } catch (err) {
        if (err.name !== "AbortError") setError("시세를 불러오지 못했습니다.");
      }
    }
    load();
    const interval = setInterval(load, 60 * 1000);
    return () => { controller.abort(); clearInterval(interval); };
  }, [type]);

  if (price === null) return <div className="flex h-[300px] items-center justify-center text-gray-500">데이터를 불러오는 중...</div>;
  return (
    <div className="h-[300px] w-full">
      <div className="mb-4 text-lg font-semibold">
        현재 시세: {type === "domestic" ? `${Math.round((price * 1300 * 3.75) / 31.1035).toLocaleString()}원` : `$${price.toFixed(2)}`}
        {error && <div className="mt-1 text-sm text-yellow-600">{error}</div>}
      </div>
      <Chart data={data} single />
    </div>
  );
}
