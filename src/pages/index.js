import { useState, useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

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
    <>
      <Head>
        <title>실시간 환율 계산기 및 글로벌 금융 시장 분석</title>
        <meta
          name="description"
          content="실시간 환율 계산과 함께 글로벌 금융 시장, 주식, 부동산, 가상화폐 등 다양한 투자 분야의 전문적인 분석 정보를 제공합니다."
        />
        <meta
          name="keywords"
          content="환율 계산기, 실시간 환율, 금융 시장 분석, 주식 투자, 부동산 투자, 가상화폐, ESG 투자, 글로벌 경제"
        />

        {/* 구글 서치 콘솔 */}
        <meta
          name="google-site-verification"
          content="UTD90ZX-CkWyU8r9HYnHm8cLOIkl4586zXCqWdduKUQ"
        />
        {/* 네이버 서치 어드바이저 */}
        <meta
          name="naver-site-verification"
          content="bddc3ddea95360ac9a2b5d8b5f7d059be0a74a17"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anteconomy.co.kr/" />
        <meta
          property="og:title"
          content="실시간 환율 계산기 및 글로벌 금융 시장 분석"
        />
        <meta
          property="og:description"
          content="실시간 환율 계산과 함께 글로벌 금융 시장, 주식, 부동산, 가상화폐 등 다양한 투자 분야의 전문적인 분석 정보를 제공합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://anteconomy.co.kr/" />
        <meta
          property="twitter:title"
          content="실시간 환율 계산기 및 글로벌 금융 시장 분석"
        />
        <meta
          property="twitter:description"
          content="실시간 환율 계산과 함께 글로벌 금융 시장, 주식, 부동산, 가상화폐 등 다양한 투자 분야의 전문적인 분석 정보를 제공합니다."
        />
        <meta
          property="twitter:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="anteconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://anteconomy.co.kr/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-green-900 text-white">
        {/* 환율 계산기 섹션 */}
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold mb-6">실시간 환율 계산기</h1>
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg max-w-lg w-full mb-8">
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
                <option value="CNY">🇨🇳 CNY</option>
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
                <option value="CNY">🇨🇳 CNY</option>
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

        <CoupangBanner />

        {/* 주요 금융 시장 분석 섹션 */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">주요 금융 시장 분석</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">실시간 금 시세</h3>
              <p className="mb-4">
                국제 금 시세와 차트를 실시간으로 제공하며, 투자 전략을
                분석합니다.
              </p>
              <Link
                href="/gold-price"
                className="text-green-300 hover:text-green-100"
              >
                시세 보기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">적금 이자 계산기</h3>
              <p className="mb-4">
                단리, 복리 방식의 이자 계산과 비과세, 세금우대 등 세금 공제를
                고려한 정확한 수령액을 계산해보세요.
              </p>
              <Link
                href="/savings-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">예금 이자 계산기</h3>
              <p className="mb-4">
                예치금액, 기간, 이자율에 따른 수익을 계산하고 세금까지 고려한
                최종 수령액을 확인하세요.
              </p>
              <Link
                href="/deposit-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">퍼센트 계산기</h3>
              <p className="mb-4">
                백분율(%), 천분율(‰), 만분율(‱)을 쉽고 정확하게 계산해보세요.
              </p>
              <Link
                href="/percent-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">날짜 계산기</h3>
              <p className="mb-4">
                날짜 간의 일수를 계산하고, 특정 날짜로부터 며칠 전/후의 날짜를
                계산해보세요.
              </p>
              <Link
                href="/date-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">육아휴직 급여 계산기</h3>
              <p className="mb-4">
                육아휴직 기간 동안 받을 수 있는 급여를 계산하고 6+6
                부모육아휴직제 혜택도 확인해보세요.
              </p>
              <Link
                href="/parental-leave-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">연봉 실수령액 계산기</h3>
              <p className="mb-4">
                연봉에서 세금과 4대 보험료를 공제한 실수령액을 계산해보세요.
              </p>
              <Link
                href="/annual-salary-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">중도상환수수료 계산기</h3>
              <p className="mb-4">
                대출 조기상환 시 발생하는 수수료를 계산해보세요. 2025년 1월부터
                변경된 수수료율이 적용됩니다.
              </p>
              <Link
                href="/prepayment-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">실업급여 계산기</h3>
              <p className="mb-4">
                2025년 기준 실업급여(구직급여) 예상 금액을 계산해보세요. 퇴직 전
                임금과 나이, 고용보험 가입기간에 따른 실업급여 모의계산이
                가능합니다.
              </p>
              <Link
                href="/unemployment-calculator"
                className="text-green-300 hover:text-green-100"
              >
                계산하기 →
              </Link>
            </div>
          </div>
        </div>

        <CoupangBanner />

        {/* 투자 전략 섹션 */}
        <div className="bg-green-800 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">전문 투자 전략</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">ESG 투자</h3>
                <p className="mb-4">
                  지속가능한 투자의 중요성과 ESG 기반 투자 전략을 소개합니다.
                </p>
                <a
                  href="/esg-investment-strategies"
                  className="text-green-300 hover:text-green-100"
                >
                  전략 살펴보기 →
                </a>
              </div>
              <div className="bg-green-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">퇴직연금 관리</h3>
                <p className="mb-4">
                  장기적인 자산 관리와 퇴직연금 운용 전략을 제시합니다.
                </p>
                <a
                  href="/retirement-pension-management"
                  className="text-green-300 hover:text-green-100"
                >
                  관리 방법 보기 →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 최신 금융 뉴스 섹션 */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">글로벌 금융 동향</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">금융 정책 분석</h3>
              <p className="mb-4">
                주요국의 금융 정책과 그 영향에 대한 심층 분석을 제공합니다.
              </p>
              <a
                href="/global-financial-policies"
                className="text-green-300 hover:text-green-100"
              >
                정책 분석 보기 →
              </a>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">산업 전망</h3>
              <p className="mb-4">주요 산업별 전망과 투자 기회를 분석합니다.</p>
              <a
                href="/global-industry-outlook"
                className="text-green-300 hover:text-green-100"
              >
                산업 분석 보기 →
              </a>
            </div>
          </div>
        </div>

        {/* 푸터 섹션 */}
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
