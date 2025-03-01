import { useState, useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  return {
    props: {
      initialRate: "환율 정보를 불러오는 중...",
    },
  };
}

export default function Home({ initialRate }) {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KRW");
  const [rate, setRate] = useState(initialRate);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRate = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://m.search.naver.com/p/csearch/content/qapirender.nhn?key=calculator&pkid=141&q=%ED%99%98%EC%9C%A8&where=m&u1=keb&u6=standardUnit&u7=0&u3=${fromCurrency}&u4=${toCurrency}&u8=down&u2=${amount}`
        );
        const data = await response.json();
        setRate(data?.country[1].subValue || "환율 정보를 불러올 수 없습니다.");
      } catch (error) {
        console.error("환율 정보를 불러오는데 실패했습니다:", error);
        setRate("환율 정보를 불러올 수 없습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchRate();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="min-h-screen bg-green-900 text-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>환율 계산기</title>
        <meta name="description" content="실시간 환율 계산기" />
        <meta
          name="google-site-verification"
          content="UTD90ZX-CkWyU8r9HYnHm8cLOIkl4586zXCqWdduKUQ"
        />
      </Head>
      <h1 className="text-3xl font-bold mb-6">환율 계산기</h1>
      <div className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-lg w-full">
        <label className="block mb-2 text-lg">금액</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <div className="flex justify-between mb-4">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="USD">🇺🇸 USD</option>
            <option value="KRW">🇰🇷 KRW</option>
            <option value="EUR">🇪🇺 EUR</option>
            <option value="JPY">🇯🇵 JPY</option>
          </select>
          <span className="text-xl">→</span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="KRW">🇰🇷 KRW</option>
            <option value="USD">🇺🇸 USD</option>
            <option value="EUR">🇪🇺 EUR</option>
            <option value="JPY">🇯🇵 JPY</option>
          </select>
        </div>
        <div className="text-lg font-bold">
          {isLoading ? (
            <p className="text-gray-500">환율 정보를 불러오는 중...</p>
          ) : (
            <p>{rate}</p>
          )}
        </div>
      </div>
    </div>
  );
}
