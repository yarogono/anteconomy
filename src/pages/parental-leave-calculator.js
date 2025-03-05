import { useState } from "react";
import Head from "next/head";
import CoupangBanner from "../components/CoupangBanner";

export default function ParentalLeaveCalculator() {
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("1");
  const [childAge, setChildAge] = useState("under12");
  const [isSingleParent, setIsSingleParent] = useState(false);
  const [isSpecialCase, setIsSpecialCase] = useState(false);
  const [spouseDuration, setSpouseDuration] = useState("0");
  const [workingHours, setWorkingHours] = useState("8");
  const [workingDays, setWorkingDays] = useState("5");
  const [baseSalary, setBaseSalary] = useState("");
  const [fixedAllowance, setFixedAllowance] = useState("");
  const [annualBonus, setAnnualBonus] = useState("");
  const [calculationResult, setCalculationResult] = useState(null);

  const calculateBenefit = () => {
    if (!baseSalary) return;

    const monthlyWage = parseInt(baseSalary) + parseInt(fixedAllowance || 0);
    const dailyWage = (monthlyWage * 12 + parseInt(annualBonus || 0)) / 365;
    const workingHoursPerDay = parseInt(workingHours);
    const workingDaysPerWeek = parseInt(workingDays);
    const hourlyWage = dailyWage / workingHoursPerDay;

    let benefit = 0;
    const durationMonths = parseInt(duration);

    // 6+6 부모육아휴직제 적용
    if (isSpecialCase && durationMonths <= 6) {
      const maxBenefit = {
        1: 2500000,
        2: 2500000,
        3: 3000000,
        4: 3500000,
        5: 4000000,
        6: 4500000,
      };
      benefit = Math.min(monthlyWage, maxBenefit[durationMonths] || 4500000);
    } else {
      // 일반 육아휴직급여 계산
      benefit = monthlyWage * 0.8;
      benefit = Math.min(benefit, 1600000); // 상한액
      benefit = Math.max(benefit, 700000); // 하한액
    }

    const totalBenefit = benefit * durationMonths;

    setCalculationResult({
      monthlyBenefit: benefit,
      totalBenefit: totalBenefit,
      duration: durationMonths,
      hourlyWage: hourlyWage,
      dailyWage: dailyWage,
    });
  };

  return (
    <>
      <Head>
        <title>육아휴직 급여 계산기 - 육아휴직 기간 동안의 급여 계산</title>
        <meta
          name="description"
          content="육아휴직 기간 동안 받을 수 있는 급여를 계산해보세요. 6+6 부모육아휴직제 등 다양한 혜택을 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="육아휴직 급여 계산기, 육아휴직 계산, 6+6 부모육아휴직제, 육아휴직 혜택"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">육아휴직 급여 계산기</h1>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <ul className="list-disc list-inside space-y-2">
            <li>
              육아휴직은 한 자녀당 최대 1년간 남자, 여자 모두 신청하실 수
              있습니다.
            </li>
            <li>
              육아휴직 전날까지 해당 사업장에서 6개월 이상 근로하였다면 누구나
              받을 수 있습니다.
            </li>
            <li>
              2025년 1월 1일부터 육아휴직 사후 지급 방식이 폐지되고 기준금액
              상한액이 인상되었습니다.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">기본 정보</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  육아휴직 시작일
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  육아휴직 기간
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}개월
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">자녀 나이</label>
                <select
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="under12">생후 12개월 이하</option>
                  <option value="under18">생후 18개월 이하</option>
                  <option value="under8">만 8세 이하</option>
                  <option value="elementary2">초등학교 2학년 이하</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">근무 정보</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">일 근무시간</label>
                <select
                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(8)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}시간
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">주 근무일수</label>
                <select
                  value={workingDays}
                  onChange={(e) => setWorkingDays(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(7)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}일
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <CoupangBanner />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">급여 정보</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">월 기본급</label>
                <input
                  type="number"
                  value={baseSalary}
                  onChange={(e) => setBaseSalary(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="월 기본급을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  월 고정수당 합계
                </label>
                <input
                  type="number"
                  value={fixedAllowance}
                  onChange={(e) => setFixedAllowance(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="월 고정수당 합계를 입력하세요"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  연간 상여금 합계
                </label>
                <input
                  type="number"
                  value={annualBonus}
                  onChange={(e) => setAnnualBonus(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="연간 상여금 합계를 입력하세요"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">추가 옵션</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="singleParent"
                  checked={isSingleParent}
                  onChange={(e) => setIsSingleParent(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="singleParent">한부모 근로자</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="specialCase"
                  checked={isSpecialCase}
                  onChange={(e) => setIsSpecialCase(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="specialCase">6+6 부모육아휴직제 적용</label>
              </div>
              {isSpecialCase && (
                <div>
                  <label className="block text-gray-700 mb-2">
                    배우자 육아휴직 기간
                  </label>
                  <select
                    value={spouseDuration}
                    onChange={(e) => setSpouseDuration(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(13)].map((_, i) => (
                      <option key={i} value={i}>
                        {i}개월
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={calculateBenefit}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            계산하기
          </button>
        </div>

        {calculationResult && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">월 육아휴직 급여</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {calculationResult.monthlyBenefit.toLocaleString()}원
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">총 육아휴직 급여</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {calculationResult.totalBenefit.toLocaleString()}원
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">시간당 통상임금</h3>
                <p className="text-lg">
                  {Math.round(calculationResult.hourlyWage).toLocaleString()}원
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">1일 통상임금</h3>
                <p className="text-lg">
                  {Math.round(calculationResult.dailyWage).toLocaleString()}원
                </p>
              </div>
            </div>
          </div>
        )}

        <CoupangBanner />

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">육아휴직 급여 안내</h2>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-2">
              6+6 부모육아휴직제란?
            </h3>
            <p className="mb-4">
              같은 자녀에 대하여 자녀 생후 18개월 내 부모가 동시에 또는
              순차적으로 육아휴직 사용하는 경우, 첫 6개월에 대해 부모 각각의
              육아휴직 급여를 상향하여 지급합니다.
            </p>

            <h3 className="text-xl font-semibold mb-2">지원 대상</h3>
            <ul className="list-disc list-inside mb-4">
              <li>
                남녀고용평등법상에 따른 육아휴직을 30일 이상 부여 받은 근로자
              </li>
              <li>피보험 단위기간이 180일 이상인 경우</li>
              <li>
                육아휴직을 시작한 날 이후 1개월부터 끝난 날 이후 12개월 이내에
                신청
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">신청 방법</h3>
            <p className="mb-4">
              육아휴직이 종료 후 1년 이내에 고용24 홈페이지, 모바일 앱 또는
              가까운 고용센터를 방문하여 육아휴직급여 신청서를 제출합니다.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
