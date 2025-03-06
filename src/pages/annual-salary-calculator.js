import { useState } from "react";
import Head from "next/head";
import CoupangBanner from "../components/CoupangBanner";

export default function AnnualSalaryCalculator() {
  const [salaryType, setSalaryType] = useState("separate");
  const [annualSalary, setAnnualSalary] = useState("");
  const [taxFreeAmount, setTaxFreeAmount] = useState("");
  const [dependents, setDependents] = useState("1");
  const [children, setChildren] = useState("0");
  const [calculationResult, setCalculationResult] = useState(null);

  const calculateSalary = () => {
    if (!annualSalary) return;

    const salary = parseInt(annualSalary);
    const taxFree = parseInt(taxFreeAmount || 0);
    const monthlyBase = salaryType === "separate" ? salary / 12 : salary / 13;

    // 과세대상 급여 (비과세액 제외)
    const taxableIncome = monthlyBase - taxFree;

    // 4대보험료 계산 (총급여 기준)
    // 국민연금 (4.5%, 월 상한액 558,000원)
    const nationalPension = Math.min(monthlyBase * 0.045, 558000);

    // 건강보험 (3.545%)
    const healthInsurance = monthlyBase * 0.03545;

    // 장기요양보험 (건강보험의 12.95%)
    const longTermCare = healthInsurance * 0.1295;

    // 고용보험 (0.9%)
    const employmentInsurance = monthlyBase * 0.009;

    // 근로소득세 계산 (2024년 간이세액표 기준)
    const dependentsCount = parseInt(dependents) || 0;
    const childrenCount = parseInt(children) || 0;

    // 2024년 간이세액표에 따른 소득세 계산
    function getIncomeTaxByTable(monthlyIncome, deps) {
      // 1000원 단위로 반올림
      const roundedIncome = Math.round(monthlyIncome / 1000) * 1000;

      // 간이세액표 구간별 세액 (1000원 단위)
      const taxTable = {
        4160000: {
          // 4,160,000원
          1: 127220,
          2: 63610,
          3: 31805,
          4: 15903,
          5: 7952,
          6: 3976,
          7: 1988,
          8: 994,
          9: 497,
          10: 249,
          11: 125,
        },
        4170000: {
          // 4,170,000원
          1: 128500,
          2: 64250,
          3: 32125,
          4: 16063,
          5: 8032,
          6: 4016,
          7: 2008,
          8: 1004,
          9: 502,
          10: 251,
          11: 126,
        },
        // ... 더 많은 구간 추가 가능
      };

      // 정확한 구간 찾기
      const nearestBracket = Object.keys(taxTable)
        .map(Number)
        .reduce((prev, curr) => {
          return Math.abs(curr - roundedIncome) < Math.abs(prev - roundedIncome)
            ? curr
            : prev;
        });

      // 해당 구간의 세액표 적용
      if (taxTable[nearestBracket]) {
        const tax =
          taxTable[nearestBracket][deps] || taxTable[nearestBracket][1];
        return tax;
      }

      // 기본 세율 적용 (간이세액표에 없는 구간)
      if (roundedIncome <= 1060000) return 0;
      if (roundedIncome <= 1500000) return Math.round(roundedIncome * 0.06);
      if (roundedIncome <= 3000000) return Math.round(roundedIncome * 0.15);
      if (roundedIncome <= 5000000) return Math.round(roundedIncome * 0.24);
      if (roundedIncome <= 10000000) return Math.round(roundedIncome * 0.35);

      // 1000만원 초과 구간
      const baseAmount = 1507400; // 10,000천원일 때 공제대상가족 1명 기준 세액
      const excessAmount = roundedIncome - 10000000;

      if (roundedIncome <= 14000000) {
        return Math.round(baseAmount + excessAmount * 0.98 * 0.35 + 25000);
      } else if (roundedIncome <= 28000000) {
        return Math.round(
          baseAmount + 1397000 + (roundedIncome - 14000000) * 0.98 * 0.38
        );
      } else if (roundedIncome <= 30000000) {
        return Math.round(
          baseAmount + 6610600 + (roundedIncome - 28000000) * 0.98 * 0.4
        );
      } else if (roundedIncome <= 45000000) {
        return Math.round(
          baseAmount + 7394600 + (roundedIncome - 30000000) * 0.4
        );
      } else if (roundedIncome <= 87000000) {
        return Math.round(
          baseAmount + 13394600 + (roundedIncome - 45000000) * 0.42
        );
      } else {
        return Math.round(
          baseAmount + 31034600 + (roundedIncome - 87000000) * 0.45
        );
      }
    }

    // 자녀세액공제 (2024년 기준)
    function getChildTaxCredit(childCount) {
      if (childCount === 0) return 0;
      if (childCount === 1) return 12500;
      if (childCount === 2) return 29160;
      return 29160 + (childCount - 2) * 25000;
    }

    // 소득세 계산
    let incomeTax = getIncomeTaxByTable(taxableIncome, dependentsCount);

    // 자녀세액공제 적용
    const childTaxCredit = getChildTaxCredit(childrenCount);
    incomeTax = Math.max(0, incomeTax - childTaxCredit);

    // 지방소득세 (소득세의 10%)
    const localIncomeTax = incomeTax * 0.1;

    // 총 공제액
    const totalMonthlyDeductions =
      nationalPension +
      healthInsurance +
      longTermCare +
      employmentInsurance +
      incomeTax +
      localIncomeTax;

    // 실수령액 계산
    const monthlyNet = monthlyBase - totalMonthlyDeductions;
    const annualNet = monthlyNet * 12;

    setCalculationResult({
      monthlyBase,
      taxableIncome,
      nationalPension,
      healthInsurance,
      longTermCare,
      employmentInsurance,
      incomeTax,
      localIncomeTax,
      totalDeductions: totalMonthlyDeductions,
      monthlyNet,
      annualNet,
      basicDeduction: 0,
      childTaxCredit,
      taxableIncomeAfterDeduction: taxableIncome,
      pensionDeduction: nationalPension,
      insuranceDeduction: employmentInsurance,
    });
  };

  return (
    <>
      <Head>
        <title>연봉 실수령액 계산기 - 세금 공제 후 실수령액 계산</title>
        <meta
          name="description"
          content="연봉 실수령액을 계산해보세요. 국민연금, 건강보험, 고용보험 등 각종 세금과 공제액을 고려한 정확한 실수령액을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="연봉 계산기, 실수령액 계산, 세금 계산, 연봉 공제, 월급 계산기"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">연봉 실수령액 계산기</h1>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="text-sm">
            2023년부터 식대 비과세 한도가 10만 원에서 20만 원으로
            확대되었습니다.
            <br />
            비과세 수당이 많을수록, 부양가족이 많을수록 실수령액이 증가합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">기본 정보</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">퇴직금 구분</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="separate"
                      checked={salaryType === "separate"}
                      onChange={(e) => setSalaryType(e.target.value)}
                      className="mr-2"
                    />
                    퇴직금 별도
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="included"
                      checked={salaryType === "included"}
                      onChange={(e) => setSalaryType(e.target.value)}
                      className="mr-2"
                    />
                    퇴직금 포함
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">연봉</label>
                <input
                  type="number"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="연봉을 입력하세요"
                />
                {annualSalary && (
                  <span className="text-sm text-gray-500 mt-1 block">
                    {(parseInt(annualSalary) / 10000).toLocaleString()}만원
                  </span>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  비과세액 (식대포함)
                </label>
                <input
                  type="number"
                  value={taxFreeAmount}
                  onChange={(e) => setTaxFreeAmount(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="월 비과세액을 입력하세요"
                />
                {taxFreeAmount && (
                  <span className="text-sm text-gray-500 mt-1 block">
                    {(parseInt(taxFreeAmount) / 10000).toLocaleString()}만원
                  </span>
                )}
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  부양가족수 (본인포함)
                </label>
                <select
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(11)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}명
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  20세 이하 자녀수
                </label>
                <select
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}명
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {calculationResult && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">월 예상 실수령액</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(calculationResult.monthlyNet).toLocaleString()}
                    원
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">연 예상 실수령액</h3>
                  <p className="text-2xl font-bold text-blue-600">
                    {Math.round(calculationResult.annualNet).toLocaleString()}원
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold mb-4">공제 내역</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>부양가족 인적공제</span>
                      <span className="text-green-600">
                        -
                        {Math.round(
                          calculationResult.basicDeduction / 12
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>연금보험료공제</span>
                      <span className="text-green-600">
                        -
                        {Math.round(
                          calculationResult.pensionDeduction
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>보험료공제</span>
                      <span className="text-green-600">
                        -
                        {Math.round(
                          calculationResult.insuranceDeduction
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>국민연금 (4.5%)</span>
                      <span>
                        {Math.round(
                          calculationResult.nationalPension
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>건강보험 (3.545%)</span>
                      <span>
                        {Math.round(
                          calculationResult.healthInsurance
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>장기요양 (12.95%)</span>
                      <span>
                        {Math.round(
                          calculationResult.longTermCare
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>고용보험 (0.9%)</span>
                      <span>
                        {Math.round(
                          calculationResult.employmentInsurance
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>소득세</span>
                      <span>
                        {Math.round(
                          calculationResult.incomeTax
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>지방소득세</span>
                      <span>
                        {Math.round(
                          calculationResult.localIncomeTax
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                    <div className="flex justify-between font-bold pt-2 border-t">
                      <span>총 공제액</span>
                      <span>
                        {Math.round(
                          calculationResult.totalDeductions
                        ).toLocaleString()}
                        원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={calculateSalary}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            계산하기
          </button>
        </div>

        <CoupangBanner />

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">연봉 실수령액 계산 안내</h2>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-2">퇴직금 구분</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                퇴직금 별도: 연봉 계약서 금액에 퇴직금이 포함되지 않은 경우
                (월급 = 연봉/12)
              </li>
              <li>
                퇴직금 포함: 연봉 계약서 금액에 퇴직금이 포함된 경우 (월급 =
                연봉/13)
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">비과세액</h3>
            <p className="mb-2">
              월 소득액에서 세금을 공제하지 않는 금액입니다. 비과세 수당이
              많을수록 실수령액이 증가합니다.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>식대: 월 20만원까지 비과세</li>
              <li>자가운전보조금: 월 20만원까지 비과세</li>
              <li>연구활동비, 취재비: 월 20만원까지 비과세</li>
              <li>출장비, 여비</li>
              <li>학자금</li>
              <li>각종 위험수당, 벽지수당</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">부양가족수</h3>
            <p className="mb-2">
              기본공제 대상자(본인 포함)에 해당하는 부양가족의 수입니다.
              부양가족이 많을수록 소득세와 지방소득세를 적게 납부하게 됩니다.
            </p>
            <p className="mb-2 text-gray-600">
              다음 조건을 모두 만족하는 가족만 부양가족 공제 대상이 됩니다:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>연간 소득금액이 100만원 이하인 가족</li>
              <li>20세 이하 또는 60세 이상인 가족</li>
              <li>배우자, 직계존속(부모/조부모), 직계비속(자녀), 형제자매</li>
              <li>주민등록표의 동거가족으로서 실제 생계를 같이하는 가족</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">4대 보험료</h3>
            <p className="mb-2">
              4대 보험료는 과세대상 소득(비과세액 제외)을 기준으로 계산됩니다:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>국민연금: 4.5% (월 상한액 558,000원)</li>
              <li>건강보험: 3.545%</li>
              <li>장기요양보험: 건강보험료의 12.95%</li>
              <li>고용보험: 0.9%</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
