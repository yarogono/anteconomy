import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import CoupangBanner from "../components/CoupangBanner";

export default function ExchangeRate() {
  // ... existing state and effects ...

  return (
    <>
      <Head>
        <title>실시간 환율 계산기 - 주요 통화 환율 계산</title>
        <meta
          name="description"
          content="실시간 환율 정보를 확인하고 계산하세요. 주요 통화의 실시간 환율과 환율 계산기를 제공합니다."
        />
        <meta
          name="keywords"
          content="환율, 실시간 환율, 환율 계산기, 달러 환율, 유로 환율, 엔화 환율"
        />
        <meta
          property="og:title"
          content="실시간 환율 계산기 - 주요 통화 환율 계산"
        />
        <meta
          property="og:description"
          content="실시간 환율 정보를 확인하고 계산하세요. 주요 통화의 실시간 환율과 환율 계산기를 제공합니다."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/exchange-rate"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="실시간 환율 계산기 - 주요 통화 환율 계산"
        />
        <meta
          name="twitter:description"
          content="실시간 환율 정보를 확인하고 계산하세요. 주요 통화의 실시간 환율과 환율 계산기를 제공합니다."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">실시간 환율 계산기</h1>
          {mounted && <p className="text-gray-600">{currentTime} 기준</p>}
        </div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-xl">환율을 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">USD/KRW</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {formatRate(exchangeRates?.USD)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">EUR/KRW</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {formatRate(exchangeRates?.EUR)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">JPY/KRW</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {formatRate(exchangeRates?.JPY)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">CNY/KRW</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {formatRate(exchangeRates?.CNY)}
                </p>
              </div>
            </div>

            <CoupangBanner />

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">환율 계산기</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    금액
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="금액을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    통화 선택
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="USD">미국 달러 (USD)</option>
                    <option value="EUR">유로 (EUR)</option>
                    <option value="JPY">일본 엔화 (JPY)</option>
                    <option value="CNY">중국 위안화 (CNY)</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">계산 결과</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {calculateResult()} 원
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">환율 정보</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">기준 시간</h3>
                    <p className="text-xl">
                      {new Date(exchangeRates?.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">기준 통화</h3>
                    <p className="text-xl">한국 원화 (KRW)</p>
                  </div>
                </div>
              </div>

              <CoupangBanner />

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">환율 변동 요인</h2>
                <div className="prose max-w-none">
                  <p>
                    환율은 다양한 요인에 의해 영향을 받습니다. 주요 영향 요인은
                    다음과 같습니다:
                  </p>
                  <ul className="list-disc pl-6 mt-4">
                    <li>국제 수지</li>
                    <li>금리 차이</li>
                    <li>물가 수준</li>
                    <li>정치적 안정성</li>
                    <li>시장 심리</li>
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
