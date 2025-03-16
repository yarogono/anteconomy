import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";

export default function AfterTaxCalculator() {
  const [salary, setSalary] = useState("");
  const [result, setResult] = useState(null);

  // 국민연금 계산 (4.5%)
  const calculateNationalPension = (salary) => {
    return Math.floor(salary * 0.045);
  };

  // 건강보험 계산 (3.43%)
  const calculateHealthInsurance = (salary) => {
    return Math.floor(salary * 0.0343);
  };

  // 장기요양보험 계산 (건강보험의 12.81%)
  const calculateLongTermCare = (healthInsurance) => {
    return Math.floor(healthInsurance * 0.1281);
  };

  // 고용보험 계산 (0.9%)
  const calculateEmploymentInsurance = (salary) => {
    return Math.floor(salary * 0.009);
  };

  // 소득세 계산 (간단한 예시 - 실제로는 더 복잡한 세율 적용 필요)
  const calculateIncomeTax = (salary) => {
    let tax = 0;
    const monthly = salary;

    if (monthly <= 1200000) {
      tax = monthly * 0.06;
    } else if (monthly <= 4600000) {
      tax = monthly * 0.15;
    } else if (monthly <= 8800000) {
      tax = monthly * 0.24;
    } else if (monthly <= 15000000) {
      tax = monthly * 0.35;
    } else if (monthly <= 30000000) {
      tax = monthly * 0.38;
    } else if (monthly <= 50000000) {
      tax = monthly * 0.4;
    } else {
      tax = monthly * 0.42;
    }

    return Math.floor(tax);
  };

  // 지방소득세 계산 (소득세의 10%)
  const calculateLocalTax = (incomeTax) => {
    return Math.floor(incomeTax * 0.1);
  };

  const calculateAfterTax = () => {
    if (!salary) {
      alert("월급을 입력해주세요.");
      return;
    }

    const monthlySalary = Number(salary);

    // 각종 공제 계산
    const nationalPension = calculateNationalPension(monthlySalary);
    const healthInsurance = calculateHealthInsurance(monthlySalary);
    const longTermCare = calculateLongTermCare(healthInsurance);
    const employmentInsurance = calculateEmploymentInsurance(monthlySalary);
    const incomeTax = calculateIncomeTax(monthlySalary);
    const localTax = calculateLocalTax(incomeTax);

    // 총 공제액
    const totalDeduction =
      nationalPension +
      healthInsurance +
      longTermCare +
      employmentInsurance +
      incomeTax +
      localTax;

    // 세후 월급
    const afterTaxSalary = monthlySalary - totalDeduction;

    setResult({
      monthlySalary,
      nationalPension,
      healthInsurance,
      longTermCare,
      employmentInsurance,
      incomeTax,
      localTax,
      totalDeduction,
      afterTaxSalary,
    });
  };

  return (
    <>
      <Head>
        <title>세후 월급 계산기 - 2025년 기준</title>
        <meta
          name="description"
          content="2025년 기준 세후 월급을 계산해보세요. 4대 보험과 세금을 고려한 실수령액을 확인할 수 있습니다."
        />
      </Head>

      <div className="min-h-screen bg-green-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="text-green-300 hover:text-green-100">
              ← 홈으로 돌아가기
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">세후 월급 계산기</h1>

          <div className="bg-white text-black p-6 rounded-lg shadow-lg mb-8">
            <div className="mb-6">
              <label className="block mb-2">
                세전 월급 (원)
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full p-2 border rounded mt-1"
                  placeholder="세전 월급을 입력하세요"
                />
                {salary && (
                  <span className="text-sm text-gray-600 mt-1 block">
                    약 {Math.round(Number(salary) / 10000).toLocaleString()}만원
                  </span>
                )}
              </label>
            </div>

            <button
              onClick={calculateAfterTax}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              계산하기
            </button>

            {result && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-gray-100 rounded">
                  <h3 className="text-lg font-bold mb-4">
                    ▶ 세후 월급 계산 결과
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>세전 월급</span>
                      <span>{result.monthlySalary.toLocaleString()} 원</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="font-bold mb-2">공제 내역</p>
                      <div className="space-y-1 pl-4">
                        <div className="flex justify-between text-sm">
                          <span>국민연금 (4.5%)</span>
                          <span>
                            {result.nationalPension.toLocaleString()} 원
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>건강보험 (3.43%)</span>
                          <span>
                            {result.healthInsurance.toLocaleString()} 원
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>장기요양보험 (건강보험의 12.81%)</span>
                          <span>{result.longTermCare.toLocaleString()} 원</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>고용보험 (0.9%)</span>
                          <span>
                            {result.employmentInsurance.toLocaleString()} 원
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>소득세</span>
                          <span>{result.incomeTax.toLocaleString()} 원</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>지방소득세</span>
                          <span>{result.localTax.toLocaleString()} 원</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span>총 공제액</span>
                      <span>{result.totalDeduction.toLocaleString()} 원</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t text-blue-600">
                      <span>실수령액 (세후 월급)</span>
                      <span>{result.afterTaxSalary.toLocaleString()} 원</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">세후 월급 계산 안내</h2>
            <div className="space-y-4">
              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">공제 항목 설명</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>국민연금: 월급의 4.5% 공제</li>
                  <li>건강보험: 월급의 3.43% 공제</li>
                  <li>장기요양보험: 건강보험료의 12.81% 공제</li>
                  <li>고용보험: 월급의 0.9% 공제</li>
                  <li>소득세: 소득 구간에 따라 차등 적용</li>
                  <li>지방소득세: 소득세의 10% 공제</li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">계산 방법</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>세후 월급 = 세전 월급 - 총 공제액</li>
                  <li>총 공제액 = 4대 보험 + 소득세 + 지방소득세</li>
                  <li>
                    4대 보험 = 국민연금 + 건강보험 + 장기요양보험 + 고용보험
                  </li>
                </ul>
              </div>

              <div className="bg-green-700 p-4 rounded">
                <p className="font-bold mb-2">2025년 실수령액 조회</p>
                <p className="mb-4">
                  2025년 기준 월급별 실수령액과 공제 내역을 확인하실 수
                  있습니다.
                </p>
                <Link
                  href="/salary-table-2025"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  2025년 월급 실수령액 조회하기
                </Link>
              </div>

              <p className="text-sm">
                * 이 계산기는 참고용이며, 실제 세후 월급은 회사 규정이나 개인의
                상황에 따라 다를 수 있습니다.
              </p>
            </div>
          </div>

          <CoupangBanner />
        </div>
      </div>
    </>
  );
}
