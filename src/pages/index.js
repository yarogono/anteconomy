import { useState, useEffect } from "react";
import { getExchangeRate } from "../lib/getExchangeRate";
import Head from "next/head";

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("KRW");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    async function fetchRate() {
      const rate = await getExchangeRate(fromCurrency, toCurrency);
      setConvertedAmount(amount * rate);
    }
    fetchRate();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <>
      <Head>
        <title>환율 계산기 - 실시간 환율 변환기</title>
        <meta
          name="description"
          content="실시간 환율 변환기! 달러, 원, 유로 등 다양한 통화 환율을 쉽게 계산하세요."
        />
        <meta
          name="keywords"
          content="환율 계산기, 실시간 환율, 달러 환율, 원화 환율, 통화 변환기"
        />
        <meta name="author" content="YOUR_NAME" />

        <meta property="og:title" content="환율 계산기 - 실시간 환율 변환기" />
        <meta
          property="og:description"
          content="달러, 원화, 유로 등 최신 환율을 빠르게 변환하세요."
        />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://your-domain.com" />
      </Head>

      <div className="container">
        <h1>환율 계산기</h1>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="KRW">KRW</option>
          <option value="EUR">EUR</option>
        </select>
        →
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="KRW">KRW</option>
          <option value="EUR">EUR</option>
        </select>
        <h2>
          결과: {convertedAmount ? convertedAmount.toFixed(2) : "계산 중..."}
        </h2>
      </div>
    </>
  );
}
