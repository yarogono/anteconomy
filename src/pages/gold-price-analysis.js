import Head from "next/head";
import "@/styles/globals.css";
import useSWR from "swr";
import GoldPriceChart from "@/components/GoldPriceChart";
import { useState, useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GoldPriceAnalysis() {
  const { data, error } = useSWR("/api/gold-price", fetcher, {
    refreshInterval: 60000, // 1분마다 갱신
  });

  const [currentPrice, setCurrentPrice] = useState(2000);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // 데이터가 있을 때 현재 가격 업데이트
    if (data?.prices?.length > 0) {
      setCurrentPrice(data.prices[data.prices.length - 1][1]);
    }
  }, [data]);

  useEffect(() => {
    // 초기 시간 설정
    setCurrentTime(new Date().toLocaleString());

    // 1초마다 시간 업데이트
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>
          금 시세 분석 - 글로벌 금 시장 동향과 투자 전략 | 안트이코노미
        </title>
        <meta
          name="description"
          content="글로벌 금 시장의 시세와 투자 기회를 분석합니다. 금 가격 변동 요인, 시장 동향, 투자 전략 등을 심층적으로 살펴보고 대응 방안을 제시합니다."
        />
        <meta
          name="keywords"
          content="금 시세, 금값, 금 투자, 금 시장, 귀금속 투자, 안전자산, 금 가격, 금 거래"
        />
        <link
          rel="canonical"
          href="https://anteconomy.co.kr/gold-price-analysis"
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            금 시세 분석: 글로벌 금 시장의 동향과 투자 기회
          </h1>

          {/* 실시간 시세 정보 */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  현재 금 시세
                </h3>
                <p className="text-3xl font-bold text-yellow-600">
                  ${currentPrice.toFixed(2)}/oz
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  최근 업데이트: {currentTime}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  시장 상태
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-24 text-gray-600">변동성:</span>
                    <span className="font-medium">중간</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-24 text-gray-600">거래량:</span>
                    <span className="font-medium">높음</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 차트 */}
          <div className="mb-8">
            <GoldPriceChart data={data} />
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. 금 시장 개요
            </h2>
            <p className="mb-6">
              금은 전통적인 안전자산으로서 글로벌 금융시장에서 중요한 역할을
              합니다. 경제적 불확실성이 높아질 때마다 투자자들의 관심이 집중되는
              자산입니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              시장 특성
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>안전자산 특성</li>
              <li>인플레이션 헤지</li>
              <li>글로벌 거래</li>
              <li>높은 유동성</li>
              <li>실물 보관 가능</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. 가격 변동 요인
            </h2>
            <p className="mb-6">
              금 가격은 다양한 경제적, 지정학적 요인의 영향을 받습니다. 이러한
              요인들을 이해하고 분석하는 것이 투자의 핵심입니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              주요 영향 요인
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>달러 강세/약세</li>
              <li>금리 정책</li>
              <li>지정학적 리스크</li>
              <li>인플레이션</li>
              <li>중앙은행 매입/매도</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. 시장 동향 분석
            </h2>
            <p className="mb-6">
              금 시장의 수급 상황과 투자 동향을 분석하여 시장의 방향성을
              예측합니다. 다양한 시장 참여자들의 행동을 모니터링하는 것이
              중요합니다.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                주요 시장 동향
              </h3>
              <ul className="list-disc pl-6 text-blue-800">
                <li>중앙은행 보유량 변화</li>
                <li>ETF 자금 흐름</li>
                <li>실물 수요/공급</li>
                <li>투기적 포지션</li>
                <li>시장 심리</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. 투자 전략
            </h2>
            <p className="mb-6">
              금 투자는 다양한 방식으로 이루어질 수 있습니다. 투자자의 목적과
              상황에 맞는 적절한 투자 방법을 선택하는 것이 중요합니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              투자 방법
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li>실물 금 매입</li>
              <li>금 ETF</li>
              <li>금광주</li>
              <li>선물 거래</li>
              <li>구조화 상품</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. 리스크 관리
            </h2>
            <p className="mb-6">
              금 투자에도 다양한 리스크가 존재합니다. 이러한 리스크를 이해하고
              관리하는 것이 성공적인 투자의 핵심입니다.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                결론: 금 투자의 미래
              </h2>
              <p className="mb-4">
                금은 포트폴리오 다각화와 위험 관리를 위한 중요한 자산입니다.
                시장 환경 변화에 따라 금의 역할과 중요성은 계속해서 변화할
                것으로 예상됩니다.
              </p>
              <p>
                성공적인 금 투자를 위해서는 시장 동향을 지속적으로 모니터링하고,
                적절한 투자 전략과 리스크 관리를 실행하는 것이 중요합니다.
                장기적 관점에서 포트폴리오의 안정성을 높이는 수단으로 활용하는
                것이 바람직합니다.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
