import { useState, useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

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
      <AdsenseInit />
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

        <AdsenseAd slot="homepage-top" />

        <AdsenseInit />
        <AdsenseAd />

        {/* 주요 금융 시장 분석 섹션 */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">주요 금융 시장 분석</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">실시간 금 시세</h3>
              <p className="mb-4">
                국제 금 시세와 차트를 실시간으로 제공하며, 투자 전략을
                분석합니다.
              </p>
              <Link
                href="/gold-price"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                실시간 금 시세 보러가기
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
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                적금 이자 계산하기
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
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                예금 이자 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">퍼센트 계산기</h3>
              <p className="mb-4">
                백분율(%), 천분율(‰), 만분율(‱)을 쉽고 정확하게 계산해보세요.
              </p>
              <Link
                href="/percent-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                퍼센트 계산하기
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
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                날짜 계산하기
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
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                육아휴직 급여 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">연봉 실수령액 계산기</h3>
              <p className="mb-4">
                연봉에서 세금과 4대 보험료를 공제한 실수령액을 계산해보세요.
              </p>
              <Link
                href="/annual-salary-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                연봉 실수령액 계산하기
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
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                중도상환수수료 계산하기
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
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                실업급여 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">연차 수당 계산기</h3>
              <p className="mb-4">
                2025년 기준 미사용 연차 수당을 계산해보세요. 근속기간과 급여,
                사용한 연차 일수를 입력하여 받을 수 있는 연차 수당을 확인하세요.
              </p>
              <Link
                href="/leave-allowance-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                연차 수당 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">퇴직금 계산기</h3>
              <p className="mb-4">
                2025년 기준 퇴직금을 계산해보세요. 근속기간과 급여를 입력하여
                받을 수 있는 퇴직금을 확인하세요.
              </p>
              <Link
                href="/severance-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                퇴직금 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-2">휴업수당 계산기</h3>
              <p className="mb-4">
                휴업 기간과 이전 3개월 임금을 입력하여 받을 수 있는 휴업수당을
                계산해보세요.
              </p>
              <Link
                href="/layoff-allowance-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                휴업수당 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">연차 계산기</h3>
              <p className="mb-4">
                입사일과 출근율을 입력하여 받을 수 있는 연차를 계산해보세요.
              </p>
              <Link
                href="/annual-leave-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                연차 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">세후 월급 계산기</h3>
              <p className="mb-4">
                2025년 기준 세후 월급을 계산해보세요. 4대 보험과 세금을 고려한
                실수령액을 확인할 수 있습니다.
              </p>
              <Link
                href="/after-tax-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                세후 월급 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                마이너스통장 이자 계산기
              </h3>
              <p className="mb-4">
                마이너스통장(한도대출)의 이자를 간편하게 계산해보세요. 대출금액,
                금리, 기간에 따른 이자를 확인할 수 있습니다.
              </p>
              <Link
                href="/loan-interest-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                이자 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">대출 이자 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                원리금균등상환, 원금균등상환, 만기일시상환 방식의 대출 이자를
                계산해보세요.
              </p>
              <Link
                href="/loan-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                대출 이자 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">자동차 할부 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                차량 구매 시 할부금액과 이자를 계산해보세요. 계약금, 할부 개월,
                이자율을 입력하여 월납금액을 확인할 수 있습니다.
              </p>
              <Link
                href="/car-loan-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                자동차 할부 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">DSR 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                주택담보대출, 신용대출, 기타대출의 원리금상환액을 고려하여 DSR을
                계산해보세요. 연소득, 월소득, 각종 대출의 월 상환액을 입력하여
                총부채원리금상환비율을 확인할 수 있습니다.
              </p>
              <Link
                href="/dsr-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                DSR 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">LTV/DTI 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                주택가격, 대출금액, 소득, 부채를 고려하여 LTV와 DTI를
                계산해보세요. 주택담보대출 한도를 예측하고 대출 가능성을 확인할
                수 있습니다.
              </p>
              <Link
                href="/ltv-dti-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                LTV/DTI 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">전세 대출 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                전세금액, 보증금, 대출금액, 이자율을 고려하여 전세 대출의 월
                상환액을 계산해보세요. 전세 대출 한도를 예측하고 대출 가능성을
                확인할 수 있습니다.
              </p>
              <Link
                href="/jeonse-loan-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                전세 대출 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">월세 대출 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                월세 보증금, 대출금액, 이자율을 고려하여 월세 대출의 월 상환액을
                계산해보세요. 월세 대출 한도를 예측하고 대출 가능성을 확인할 수
                있습니다.
              </p>
              <Link
                href="/monthly-rent-loan-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                월세 대출 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">복리 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                원금, 이자율, 기간을 입력하여 복리로 계산된 최종 금액과 이자를
                계산해보세요. 복리 주기를 선택하여 다양한 복리 계산이
                가능합니다.
              </p>
              <Link
                href="/compound-interest-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                복리 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">평단가 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                주식, 코인 등의 평균 매수 단가(평단가)를 계산해보세요. 매수
                금액과 수량을 입력하여 정확한 평단가를 확인할 수 있습니다.
              </p>
              <Link
                href="/average-price-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                평단가 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">대출 상환 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                원리금균등상환, 원금균등상환, 만기일시상환 방식의 대출 상환액을
                계산해보세요. 대출금액, 기간, 이자율을 입력하여 상환 스케줄을
                확인할 수 있습니다.
              </p>
              <Link
                href="/loan-repayment-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                대출 상환 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">학점 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                과목별 학점과 성적을 입력하여 평균 평점(GPA)을 계산해보세요. 각
                과목의 이수 학점과 성적을 고려한 정확한 학점 계산이 가능합니다.
              </p>
              <Link
                href="/gpa-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                학점 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">자동차 연비 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                주행거리와 연료 소비량을 입력하여 자동차의 연비와 연료비용을
                계산해보세요. 휘발유, 경유, LPG 등 다양한 연료 종류의 연비를
                계산할 수 있습니다.
              </p>
              <Link
                href="/fuel-efficiency-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                연비 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">칼로리 소모량 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                운동 종류, 운동 시간, 체중을 입력하여 소모된 칼로리를
                계산해보세요. 걷기, 달리기, 수영 등 다양한 운동의 칼로리
                소모량을 확인할 수 있습니다.
              </p>
              <Link
                href="/calorie-burn-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                칼로리 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">BMI & 체지방률 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                키, 체중, 성별, 나이를 입력하여 BMI(신체질량지수)와 체지방률을
                계산해보세요. 정상 범위와 건강 상태를 확인할 수 있습니다.
              </p>
              <Link
                href="/bmi-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                BMI 계산하기
              </Link>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">전기 요금 계산기</h3>
              <p className="text-sm text-gray-300 mb-4">
                전력 사용량을 입력하여 예상 전기 요금을 계산해보세요. 기본요금,
                전력량요금, 기후환경요금, 연료비조정액 등을 포함한 상세 요금
                내역을 확인할 수 있습니다.
              </p>
              <Link
                href="/electricity-bill-calculator"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                전기 요금 계산하기
              </Link>
            </div>
          </div>
        </div>

        <AdsenseAd slot="homepage-middle" />

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

        <AdsenseAd slot="homepage-bottom" />

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
