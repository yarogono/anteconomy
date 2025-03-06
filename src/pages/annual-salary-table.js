import Head from "next/head";
import Link from "next/link";

export default function AnnualSalaryTable() {
  const salaryData = [
    {
      range: "1천만원 ~ 2천만원",
      data: [
        {
          salary: 10000000,
          takeHome: 771033,
          total: 62300,
          pension: 32990,
          health: 22870,
          care: 1680,
          employment: 4760,
          tax: 0,
          localTax: 0,
        },
        {
          salary: 11000000,
          takeHome: 847286,
          total: 69380,
          pension: 36740,
          health: 25470,
          care: 1870,
          employment: 5300,
          tax: 0,
          localTax: 0,
        },
        {
          salary: 12000000,
          takeHome: 923500,
          total: 76500,
          pension: 40500,
          health: 28080,
          care: 2070,
          employment: 5850,
          tax: 0,
          localTax: 0,
        },
        {
          salary: 13000000,
          takeHome: 998863,
          total: 84470,
          pension: 44240,
          health: 30670,
          care: 2260,
          employment: 6390,
          tax: 830,
          localTax: 80,
        },
        {
          salary: 14000000,
          takeHome: 1073736,
          total: 92930,
          pension: 47990,
          health: 33270,
          care: 2450,
          employment: 6930,
          tax: 2090,
          localTax: 200,
        },
        {
          salary: 15000000,
          takeHome: 1148580,
          total: 101420,
          pension: 51750,
          health: 35880,
          care: 2640,
          employment: 7470,
          tax: 3350,
          localTax: 330,
        },
        {
          salary: 16000000,
          takeHome: 1223463,
          total: 109870,
          pension: 55490,
          health: 38470,
          care: 2830,
          employment: 8010,
          tax: 4610,
          localTax: 460,
        },
        {
          salary: 17000000,
          takeHome: 1297826,
          total: 118840,
          pension: 59240,
          health: 41070,
          care: 3030,
          employment: 8550,
          tax: 6320,
          localTax: 630,
        },
        {
          salary: 18000000,
          takeHome: 1372040,
          total: 127960,
          pension: 63000,
          health: 43680,
          care: 3220,
          employment: 9100,
          tax: 8150,
          localTax: 810,
        },
        {
          salary: 19000000,
          takeHome: 1446313,
          total: 137020,
          pension: 66740,
          health: 46270,
          care: 3410,
          employment: 9640,
          tax: 9970,
          localTax: 990,
        },
        {
          salary: 20000000,
          takeHome: 1520566,
          total: 146100,
          pension: 70490,
          health: 48870,
          care: 3600,
          employment: 10180,
          tax: 11790,
          localTax: 1170,
        },
      ],
    },
    {
      range: "2천만원 ~ 3천만원",
      data: [
        {
          salary: 21000000,
          takeHome: 1594790,
          total: 155210,
          pension: 74250,
          health: 51480,
          care: 3790,
          employment: 10720,
          tax: 13610,
          localTax: 1360,
        },
        {
          salary: 22000000,
          takeHome: 1669043,
          total: 164290,
          pension: 77990,
          health: 54070,
          care: 3990,
          employment: 11260,
          tax: 15440,
          localTax: 1540,
        },
        {
          salary: 23000000,
          takeHome: 1743296,
          total: 173370,
          pension: 81740,
          health: 56670,
          care: 4180,
          employment: 11800,
          tax: 17260,
          localTax: 1720,
        },
        {
          salary: 24000000,
          takeHome: 1817310,
          total: 182690,
          pension: 85500,
          health: 59280,
          care: 4370,
          employment: 12350,
          tax: 19270,
          localTax: 1920,
        },
        {
          salary: 25000000,
          takeHome: 1890463,
          total: 192870,
          pension: 89240,
          health: 61870,
          care: 4560,
          employment: 12890,
          tax: 22100,
          localTax: 2210,
        },
        {
          salary: 26000000,
          takeHome: 1963596,
          total: 203070,
          pension: 92990,
          health: 64470,
          care: 4750,
          employment: 13430,
          tax: 24940,
          localTax: 2490,
        },
        {
          salary: 27000000,
          takeHome: 2036710,
          total: 213290,
          pension: 96750,
          health: 67080,
          care: 4950,
          employment: 13970,
          tax: 27770,
          localTax: 2770,
        },
        {
          salary: 28000000,
          takeHome: 2109853,
          total: 223480,
          pension: 100490,
          health: 69670,
          care: 5140,
          employment: 14510,
          tax: 30610,
          localTax: 3060,
        },
        {
          salary: 29000000,
          takeHome: 2179916,
          total: 236750,
          pension: 104240,
          health: 72270,
          care: 5330,
          employment: 15050,
          tax: 36240,
          localTax: 3620,
        },
        {
          salary: 30000000,
          takeHome: 2248340,
          total: 251660,
          pension: 108000,
          health: 74880,
          care: 5520,
          employment: 15600,
          tax: 43330,
          localTax: 4330,
        },
      ],
    },
    {
      range: "3천만원 ~ 4천만원",
      data: [
        {
          salary: 31000000,
          takeHome: 2316813,
          total: 266520,
          pension: 111740,
          health: 77470,
          care: 5710,
          employment: 16140,
          tax: 50420,
          localTax: 5040,
        },
        {
          salary: 32000000,
          takeHome: 2384896,
          total: 281770,
          pension: 115490,
          health: 80070,
          care: 5900,
          employment: 16680,
          tax: 57850,
          localTax: 5780,
        },
        {
          salary: 33000000,
          takeHome: 2451470,
          total: 298530,
          pension: 119250,
          health: 82680,
          care: 6100,
          employment: 17220,
          tax: 66620,
          localTax: 6660,
        },
        {
          salary: 34000000,
          takeHome: 2515923,
          total: 317410,
          pension: 122990,
          health: 85270,
          care: 6290,
          employment: 17760,
          tax: 77370,
          localTax: 7730,
        },
        {
          salary: 35000000,
          takeHome: 2580346,
          total: 336320,
          pension: 126740,
          health: 87870,
          care: 6480,
          employment: 18300,
          tax: 88120,
          localTax: 8810,
        },
        {
          salary: 36000000,
          takeHome: 2656670,
          total: 343330,
          pension: 130500,
          health: 90480,
          care: 6670,
          employment: 18850,
          tax: 88030,
          localTax: 8800,
        },
        {
          salary: 37000000,
          takeHome: 2723873,
          total: 359460,
          pension: 134240,
          health: 93070,
          care: 6860,
          employment: 19390,
          tax: 96280,
          localTax: 9620,
        },
        {
          salary: 38000000,
          takeHome: 2788286,
          total: 378380,
          pension: 137990,
          health: 95670,
          care: 7060,
          employment: 19930,
          tax: 107030,
          localTax: 10700,
        },
        {
          salary: 39000000,
          takeHome: 2852700,
          total: 397300,
          pension: 141750,
          health: 98280,
          care: 7250,
          employment: 20470,
          tax: 117780,
          localTax: 11770,
        },
        {
          salary: 40000000,
          takeHome: 2917143,
          total: 416190,
          pension: 145490,
          health: 100870,
          care: 7440,
          employment: 21010,
          tax: 128530,
          localTax: 12850,
        },
      ],
    },
    {
      range: "4천만원 ~ 5천만원",
      data: [
        {
          salary: 41000000,
          takeHome: 2981576,
          total: 435090,
          pension: 149240,
          health: 103470,
          care: 7630,
          employment: 21550,
          tax: 139280,
          localTax: 13920,
        },
        {
          salary: 42000000,
          takeHome: 3045970,
          total: 454030,
          pension: 153000,
          health: 106080,
          care: 7820,
          employment: 22100,
          tax: 150030,
          localTax: 15000,
        },
        {
          salary: 43000000,
          takeHome: 3110423,
          total: 472910,
          pension: 156740,
          health: 108670,
          care: 8010,
          employment: 22640,
          tax: 160780,
          localTax: 16070,
        },
        {
          salary: 44000000,
          takeHome: 3174836,
          total: 491830,
          pension: 160490,
          health: 111270,
          care: 8210,
          employment: 23180,
          tax: 171530,
          localTax: 17150,
        },
        {
          salary: 45000000,
          takeHome: 3239250,
          total: 510750,
          pension: 164250,
          health: 113880,
          care: 8400,
          employment: 23720,
          tax: 182280,
          localTax: 18220,
        },
        {
          salary: 46000000,
          takeHome: 3303693,
          total: 529640,
          pension: 167990,
          health: 116470,
          care: 8590,
          employment: 24260,
          tax: 193030,
          localTax: 19300,
        },
        {
          salary: 47000000,
          takeHome: 3362136,
          total: 554530,
          pension: 171740,
          health: 119070,
          care: 8780,
          employment: 24800,
          tax: 209220,
          localTax: 20920,
        },
        {
          salary: 48000000,
          takeHome: 3425500,
          total: 574500,
          pension: 175500,
          health: 121680,
          care: 8970,
          employment: 25350,
          tax: 220910,
          localTax: 22090,
        },
        {
          salary: 49000000,
          takeHome: 3488923,
          total: 594410,
          pension: 179240,
          health: 124270,
          care: 9170,
          employment: 25890,
          tax: 232590,
          localTax: 23250,
        },
        {
          salary: 50000000,
          takeHome: 3552316,
          total: 614350,
          pension: 182990,
          health: 126870,
          care: 9360,
          employment: 26430,
          tax: 244280,
          localTax: 24420,
        },
      ],
    },
    {
      range: "5천만원 ~ 6천만원",
      data: [
        {
          salary: 51000000,
          takeHome: 3615690,
          total: 634310,
          pension: 186750,
          health: 129480,
          care: 9550,
          employment: 26970,
          tax: 255970,
          localTax: 25590,
        },
        {
          salary: 52000000,
          takeHome: 3679103,
          total: 654230,
          pension: 190490,
          health: 132070,
          care: 9740,
          employment: 27510,
          tax: 267660,
          localTax: 26760,
        },
        {
          salary: 53000000,
          takeHome: 3742506,
          total: 674160,
          pension: 194240,
          health: 134670,
          care: 9930,
          employment: 28050,
          tax: 279340,
          localTax: 27930,
        },
        {
          salary: 54000000,
          takeHome: 3805860,
          total: 694140,
          pension: 198000,
          health: 137280,
          care: 10130,
          employment: 28600,
          tax: 291030,
          localTax: 29100,
        },
        {
          salary: 55000000,
          takeHome: 3869273,
          total: 714060,
          pension: 201740,
          health: 139870,
          care: 10320,
          employment: 29140,
          tax: 302720,
          localTax: 30270,
        },
        {
          salary: 56000000,
          takeHome: 3932666,
          total: 734000,
          pension: 205490,
          health: 142470,
          care: 10510,
          employment: 29680,
          tax: 314410,
          localTax: 31440,
        },
        {
          salary: 57000000,
          takeHome: 3993290,
          total: 756710,
          pension: 209250,
          health: 145080,
          care: 10700,
          employment: 30220,
          tax: 328600,
          localTax: 32860,
        },
        {
          salary: 58000000,
          takeHome: 4056723,
          total: 776610,
          pension: 212990,
          health: 147670,
          care: 10890,
          employment: 30760,
          tax: 340280,
          localTax: 34020,
        },
        {
          salary: 59000000,
          takeHome: 4120116,
          total: 796550,
          pension: 216740,
          health: 150270,
          care: 11080,
          employment: 31300,
          tax: 351970,
          localTax: 35190,
        },
        {
          salary: 60000000,
          takeHome: 4183470,
          total: 816530,
          pension: 220500,
          health: 152880,
          care: 11280,
          employment: 31850,
          tax: 363660,
          localTax: 36360,
        },
      ],
    },
    {
      range: "6천만원 ~ 7천만원",
      data: [
        {
          salary: 61000000,
          takeHome: 4246893,
          total: 836440,
          pension: 224240,
          health: 155470,
          care: 11470,
          employment: 32390,
          tax: 375340,
          localTax: 37530,
        },
        {
          salary: 62000000,
          takeHome: 4310286,
          total: 856380,
          pension: 227990,
          health: 158070,
          care: 11660,
          employment: 32930,
          tax: 387030,
          localTax: 38700,
        },
        {
          salary: 63000000,
          takeHome: 4373660,
          total: 876340,
          pension: 231750,
          health: 160680,
          care: 11850,
          employment: 33470,
          tax: 398720,
          localTax: 39870,
        },
        {
          salary: 64000000,
          takeHome: 4437073,
          total: 896260,
          pension: 235490,
          health: 163270,
          care: 12040,
          employment: 34010,
          tax: 410410,
          localTax: 41040,
        },
        {
          salary: 65000000,
          takeHome: 4500476,
          total: 916190,
          pension: 239240,
          health: 165870,
          care: 12240,
          employment: 34550,
          tax: 422090,
          localTax: 42200,
        },
        {
          salary: 66000000,
          takeHome: 4562980,
          total: 937020,
          pension: 243000,
          health: 168480,
          care: 12430,
          employment: 35100,
          tax: 434560,
          localTax: 43450,
        },
        {
          salary: 67000000,
          takeHome: 4618693,
          total: 964640,
          pension: 246740,
          health: 171070,
          care: 12620,
          employment: 35640,
          tax: 453250,
          localTax: 45320,
        },
        {
          salary: 68000000,
          takeHome: 4674376,
          total: 992290,
          pension: 250490,
          health: 173670,
          care: 12810,
          employment: 36180,
          tax: 471950,
          localTax: 47190,
        },
        {
          salary: 69000000,
          takeHome: 4730080,
          total: 1019920,
          pension: 254250,
          health: 176280,
          care: 13000,
          employment: 36720,
          tax: 490610,
          localTax: 49060,
        },
        {
          salary: 70000000,
          takeHome: 4785823,
          total: 1047510,
          pension: 257990,
          health: 178870,
          care: 13200,
          employment: 37260,
          tax: 509270,
          localTax: 50920,
        },
      ],
    },
    {
      range: "7천만원 ~ 8천만원",
      data: [
        {
          salary: 71000000,
          takeHome: 4841546,
          total: 1075120,
          pension: 261740,
          health: 181470,
          care: 13390,
          employment: 37800,
          tax: 527930,
          localTax: 52790,
        },
        {
          salary: 72000000,
          takeHome: 4869760,
          total: 1130240,
          pension: 265500,
          health: 184080,
          care: 13580,
          employment: 38350,
          tax: 571580,
          localTax: 57150,
        },
        {
          salary: 73000000,
          takeHome: 4925283,
          total: 1158050,
          pension: 269240,
          health: 186670,
          care: 13770,
          employment: 38890,
          tax: 590440,
          localTax: 59040,
        },
        {
          salary: 74000000,
          takeHome: 4980786,
          total: 1185880,
          pension: 272990,
          health: 189270,
          care: 13960,
          employment: 39430,
          tax: 609300,
          localTax: 60930,
        },
        {
          salary: 75000000,
          takeHome: 5036270,
          total: 1213730,
          pension: 276750,
          health: 191880,
          care: 14160,
          employment: 39970,
          tax: 628160,
          localTax: 62810,
        },
        {
          salary: 76000000,
          takeHome: 5091793,
          total: 1241540,
          pension: 280490,
          health: 194470,
          care: 14350,
          employment: 40510,
          tax: 647020,
          localTax: 64700,
        },
        {
          salary: 77000000,
          takeHome: 5147306,
          total: 1269360,
          pension: 284240,
          health: 197070,
          care: 14540,
          employment: 41050,
          tax: 665880,
          localTax: 66580,
        },
        {
          salary: 78000000,
          takeHome: 5202780,
          total: 1297220,
          pension: 288000,
          health: 199680,
          care: 14730,
          employment: 41600,
          tax: 684740,
          localTax: 68470,
        },
        {
          salary: 79000000,
          takeHome: 5258303,
          total: 1325030,
          pension: 291740,
          health: 202270,
          care: 14920,
          employment: 42140,
          tax: 703600,
          localTax: 70360,
        },
        {
          salary: 80000000,
          takeHome: 5313816,
          total: 1352850,
          pension: 295490,
          health: 204870,
          care: 15110,
          employment: 42680,
          tax: 722460,
          localTax: 72240,
        },
      ],
    },
    // ... 더 많은 구간 데이터 추가 가능
  ];

  return (
    <>
      <Head>
        <title>
          2025 연봉 실수령액 표 - 연봉별 실수령액과 공제액 상세 정보
        </title>
        <meta
          name="description"
          content="2025년 연봉별 실수령액과 4대보험, 소득세 등 상세 공제액 정보를 확인할 수 있습니다."
        />
        <meta
          name="keywords"
          content="2025 연동 실수령액 표, 연봉 실수령액, 연봉 공제액, 4대보험, 소득세, 지방소득세"
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">2025년 연봉 실수령액 표</h1>
          <Link
            href="/annual-salary-calculator"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            연봉 계산기로 이동
          </Link>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <p className="text-sm">
            2025년 기준 연봉별 실수령액과 공제액 정보입니다.
            <br />
            4대보험, 소득세, 지방소득세 등 상세 공제 내역을 확인할 수 있습니다.
          </p>
        </div>

        {salaryData.map((range, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold mb-4">{range.range}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">연봉</th>
                    <th className="px-4 py-2 text-right">실수령액</th>
                    <th className="px-4 py-2 text-right">공제액계</th>
                    <th className="px-4 py-2 text-right">국민연금</th>
                    <th className="px-4 py-2 text-right">건강보험</th>
                    <th className="px-4 py-2 text-right">장기요양</th>
                    <th className="px-4 py-2 text-right">고용보험</th>
                    <th className="px-4 py-2 text-right">소득세</th>
                    <th className="px-4 py-2 text-right">지방소득세</th>
                  </tr>
                </thead>
                <tbody>
                  {range.data.map((item, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-2 text-left">
                        {(item.salary / 10000).toLocaleString()}만원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.takeHome.toLocaleString()}원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.total.toLocaleString()}원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.pension.toLocaleString()}원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.health.toLocaleString()}원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.care.toLocaleString()}원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.employment.toLocaleString()}원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.tax.toLocaleString()}원
                      </td>
                      <td className="px-4 py-2 text-right">
                        {item.localTax.toLocaleString()}원
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">참고사항</h2>
          <div className="prose max-w-none">
            <ul className="list-disc list-inside space-y-2">
              <li>
                위 금액은 근로소득 간이세액표 기준으로 계산된 금액이며, 실제
                수령액과는 차이가 있을 수 있습니다.
              </li>
              <li>
                4대보험료는 과세대상 소득(비과세액 제외)을 기준으로 계산됩니다.
              </li>
              <li>국민연금: 4.5% (월 상한액 558,000원)</li>
              <li>건강보험: 3.545%</li>
              <li>장기요양보험: 건강보험료의 12.95%</li>
              <li>고용보험: 0.9%</li>
              <li>
                소득세와 지방소득세는 부양가족 수에 따라 달라질 수 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
