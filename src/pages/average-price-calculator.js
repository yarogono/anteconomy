import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function AveragePriceCalculator() {
  const [entries, setEntries] = useState([
    { id: 1, price: "", quantity: "" },
    { id: 2, price: "", quantity: "" },
    { id: 3, price: "", quantity: "" },
    { id: 4, price: "", quantity: "" },
  ]);
  const [results, setResults] = useState(null);

  const handlePriceChange = (id, value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, price: formattedValue } : entry
      )
    );
  };

  const handleQuantityChange = (id, value) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const formattedValue = numericValue
      ? Number(numericValue).toLocaleString()
      : "";
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, quantity: formattedValue } : entry
      )
    );
  };

  const addEntry = () => {
    const newId = Math.max(...entries.map((e) => e.id)) + 1;
    setEntries([...entries, { id: newId, price: "", quantity: "" }]);
  };

  const removeEntry = (id) => {
    if (entries.length > 1) {
      setEntries(entries.filter((entry) => entry.id !== id));
    }
  };

  const calculateAveragePrice = () => {
    let totalAmount = 0;
    let totalQuantity = 0;

    for (const entry of entries) {
      const price = Number(entry.price.replace(/,/g, "")) || 0;
      const quantity = Number(entry.quantity.replace(/,/g, "")) || 0;

      if (price && quantity) {
        totalAmount += price * quantity;
        totalQuantity += quantity;
      }
    }

    if (totalQuantity === 0) {
      alert("수량을 입력해주세요.");
      return;
    }

    const averagePrice = totalAmount / totalQuantity;

    setResults({
      averagePrice,
      totalAmount,
      totalQuantity,
    });
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("ko-KR").format(Math.round(number));
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>평단가 계산기 - 주식/코인 평균 매수 단가 계산</title>
        <meta
          name="description"
          content="주식, 코인 등의 평균 매수 단가(평단가)를 계산해보세요. 매수 금액과 수량을 입력하여 정확한 평단가를 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="평단가 계산기, 평균단가, 주식 평단가, 코인 평단가, 매수단가"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/average-price-calculator"
        />
        <meta
          property="og:title"
          content="평단가 계산기 - 주식/코인 평균 매수 단가 계산"
        />
        <meta
          property="og:description"
          content="주식, 코인 등의 평균 매수 단가(평단가)를 계산해보세요. 매수 금액과 수량을 입력하여 정확한 평단가를 확인할 수 있습니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/average-price-calculator"
        />
        <meta
          property="twitter:title"
          content="평단가 계산기 - 주식/코인 평균 매수 단가 계산"
        />
        <meta
          property="twitter:description"
          content="주식, 코인 등의 평균 매수 단가(평단가)를 계산해보세요. 매수 금액과 수량을 입력하여 정확한 평단가를 확인할 수 있습니다."
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
          href="https://anteconomy.co.kr/average-price-calculator"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">평단가 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="grid grid-cols-12 gap-4 mb-4 font-bold">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-5">가격 (₩)</div>
              <div className="col-span-5">수량 (n)</div>
              <div className="col-span-1"></div>
            </div>
            {entries.map((entry, index) => (
              <div key={entry.id} className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-1 flex items-center justify-center">
                  {index + 1}.
                </div>
                <div className="col-span-5">
                  <input
                    type="text"
                    value={entry.price}
                    onChange={(e) =>
                      handlePriceChange(entry.id, e.target.value)
                    }
                    className="w-full p-2 rounded bg-green-700 border border-green-600 text-right"
                    placeholder="가격"
                  />
                </div>
                <div className="col-span-5">
                  <input
                    type="text"
                    value={entry.quantity}
                    onChange={(e) =>
                      handleQuantityChange(entry.id, e.target.value)
                    }
                    className="w-full p-2 rounded bg-green-700 border border-green-600 text-right"
                    placeholder="수량"
                  />
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  {entries.length > 1 && (
                    <button
                      onClick={() => removeEntry(entry.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-12 gap-4 mb-4 font-bold">
              <div className="col-span-1"></div>
              <div className="col-span-5 text-right">
                {formatNumber(
                  entries.reduce((sum, entry) => {
                    const price = Number(entry.price.replace(/,/g, "")) || 0;
                    const quantity =
                      Number(entry.quantity.replace(/,/g, "")) || 0;
                    return sum + price * quantity;
                  }, 0)
                )}
              </div>
              <div className="col-span-5 text-right">
                {formatNumber(
                  entries.reduce((sum, entry) => {
                    return (
                      sum + (Number(entry.quantity.replace(/,/g, "")) || 0)
                    );
                  }, 0)
                )}
              </div>
              <div className="col-span-1"></div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={addEntry}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
              >
                + 추가
              </button>
              <button
                onClick={calculateAveragePrice}
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
              >
                계산하기
              </button>
            </div>
          </div>

          {results && (
            <div className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">평균 단가</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.averagePrice)}원
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 금액</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.totalAmount)}원
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 수량</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.totalQuantity)}개
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">평단가 계산기 사용법</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>가격: 매수 가격 입력 (원)</li>
                  <li>수량: 매수 수량 입력 (개)</li>
                  <li>여러 번 매수한 경우 추가 버튼을 눌러 입력란 추가</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">계산 결과</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>평균 단가: 전체 매수 금액 ÷ 전체 수량</li>
                  <li>총 금액: 전체 매수 금액의 합계</li>
                  <li>총 수량: 전체 매수 수량의 합계</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">평단가란?</h3>
                <p className="text-gray-300">
                  평단가(평균 단가)는 여러 번에 걸쳐 매수한 주식이나 코인의 평균
                  매수 가격을 의미합니다. 총 매수 금액을 총 수량으로 나누어
                  계산합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>수수료와 세금은 고려하지 않은 계산입니다.</li>
                  <li>매도한 수량은 제외하고 계산해야 합니다.</li>
                  <li>정확한 투자 판단을 위해 참고용으로만 사용하세요.</li>
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
