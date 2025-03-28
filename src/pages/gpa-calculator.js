import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import CoupangBanner from "../components/CoupangBanner";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "", credit: "3", grade: "A+" },
  ]);
  const [results, setResults] = useState(null);

  const grades = {
    "A+": 4.5,
    A: 4.0,
    "B+": 3.5,
    B: 3.0,
    "C+": 2.5,
    C: 2.0,
    "D+": 1.5,
    D: 1.0,
    F: 0.0,
  };

  const handleAddSubject = () => {
    const newId = subjects[subjects.length - 1].id + 1;
    setSubjects([
      ...subjects,
      { id: newId, name: "", credit: "3", grade: "A+" },
    ]);
  };

  const handleRemoveSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((subject) => subject.id !== id));
    }
  };

  const handleSubjectChange = (id, field, value) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const credit = parseFloat(subject.credit);
      const gradePoint = grades[subject.grade];
      totalPoints += credit * gradePoint;
      totalCredits += credit;
    });

    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

    setResults({
      totalPoints,
      totalCredits,
      gpa,
      subjects: subjects.map((subject) => ({
        ...subject,
        points: parseFloat(subject.credit) * grades[subject.grade],
      })),
    });
  };

  const formatNumber = (number) => {
    return number.toFixed(2);
  };

  return (
    <>
      <AdsenseInit />
      <Head>
        <title>학점 계산기 - 평균 평점(GPA) 계산</title>
        <meta
          name="description"
          content="과목별 학점과 성적을 입력하여 평균 평점(GPA)을 계산해보세요. 각 과목의 이수 학점과 성적을 고려한 정확한 학점 계산이 가능합니다."
        />
        <meta
          name="keywords"
          content="학점 계산기, GPA 계산기, 평균 평점, 성적 계산, 대학 성적"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/gpa-calculator"
        />
        <meta property="og:title" content="학점 계산기 - 평균 평점(GPA) 계산" />
        <meta
          property="og:description"
          content="과목별 학점과 성적을 입력하여 평균 평점(GPA)을 계산해보세요. 각 과목의 이수 학점과 성적을 고려한 정확한 학점 계산이 가능합니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://anteconomy.co.kr/gpa-calculator"
        />
        <meta
          property="twitter:title"
          content="학점 계산기 - 평균 평점(GPA) 계산"
        />
        <meta
          property="twitter:description"
          content="과목별 학점과 성적을 입력하여 평균 평점(GPA)을 계산해보세요. 각 과목의 이수 학점과 성적을 고려한 정확한 학점 계산이 가능합니다."
        />
        <meta
          property="twitter:image"
          content="https://anteconomy.co.kr/og-image.jpg"
        />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="anteconomy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://anteconomy.co.kr/gpa-calculator" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-green-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">학점 계산기</h1>

          <AdsenseAd slot="calculator-top" />

          <div className="bg-green-800 p-6 rounded-lg mb-8">
            <div className="overflow-x-auto">
              <table className="w-full mb-6">
                <thead>
                  <tr className="bg-green-700">
                    <th className="p-2 text-left">과목명</th>
                    <th className="p-2 text-center">학점</th>
                    <th className="p-2 text-center">성적</th>
                    <th className="p-2 text-center">삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject) => (
                    <tr key={subject.id} className="border-t border-green-700">
                      <td className="p-2">
                        <input
                          type="text"
                          value={subject.name}
                          onChange={(e) =>
                            handleSubjectChange(
                              subject.id,
                              "name",
                              e.target.value
                            )
                          }
                          className="w-full p-2 rounded bg-green-700 border border-green-600"
                          placeholder="과목명 입력"
                        />
                      </td>
                      <td className="p-2">
                        <select
                          value={subject.credit}
                          onChange={(e) =>
                            handleSubjectChange(
                              subject.id,
                              "credit",
                              e.target.value
                            )
                          }
                          className="w-full p-2 rounded bg-green-700 border border-green-600 text-center"
                        >
                          {[1, 2, 3, 4, 5].map((credit) => (
                            <option key={credit} value={credit}>
                              {credit}학점
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2">
                        <select
                          value={subject.grade}
                          onChange={(e) =>
                            handleSubjectChange(
                              subject.id,
                              "grade",
                              e.target.value
                            )
                          }
                          className="w-full p-2 rounded bg-green-700 border border-green-600 text-center"
                        >
                          {Object.keys(grades).map((grade) => (
                            <option key={grade} value={grade}>
                              {grade}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-2 text-center">
                        <button
                          onClick={() => handleRemoveSubject(subject.id)}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 transition-colors"
                          disabled={subjects.length === 1}
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleAddSubject}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
              >
                과목 추가
              </button>
              <button
                onClick={calculateGPA}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors"
              >
                계산하기
              </button>
            </div>
          </div>

          {results && (
            <div className="bg-green-800 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">계산 결과</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">평균 평점</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.gpa)}
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 학점</h3>
                  <p className="text-2xl font-bold">
                    {results.totalCredits}학점
                  </p>
                </div>
                <div className="bg-green-700 p-4 rounded">
                  <h3 className="text-lg font-medium mb-2">총 평점</h3>
                  <p className="text-2xl font-bold">
                    {formatNumber(results.totalPoints)}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-green-700">
                      <th className="p-2 text-left">과목명</th>
                      <th className="p-2 text-center">학점</th>
                      <th className="p-2 text-center">성적</th>
                      <th className="p-2 text-right">취득 평점</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.subjects.map((subject) => (
                      <tr
                        key={subject.id}
                        className="border-t border-green-700"
                      >
                        <td className="p-2">{subject.name}</td>
                        <td className="p-2 text-center">
                          {subject.credit}학점
                        </td>
                        <td className="p-2 text-center">{subject.grade}</td>
                        <td className="p-2 text-right">
                          {formatNumber(subject.points)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-green-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">학점 계산기 사용법</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">입력 항목</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>과목명: 수강한 과목의 이름</li>
                  <li>학점: 과목의 이수 학점 (1~5학점)</li>
                  <li>성적: 취득한 성적 (A+부터 F까지)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">성적 배점</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>A+: 4.5점</li>
                  <li>A: 4.0점</li>
                  <li>B+: 3.5점</li>
                  <li>B: 3.0점</li>
                  <li>C+: 2.5점</li>
                  <li>C: 2.0점</li>
                  <li>D+: 1.5점</li>
                  <li>D: 1.0점</li>
                  <li>F: 0.0점</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">계산 방법</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>각 과목의 (학점 × 성적 배점)의 합계를 구합니다.</li>
                  <li>총 이수 학점을 계산합니다.</li>
                  <li>
                    총 평점을 총 이수 학점으로 나누어 평균 평점을 계산합니다.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">주의사항</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>P/F 과목은 평점 계산에서 제외됩니다.</li>
                  <li>재수강한 과목은 최종 취득 성적으로 계산합니다.</li>
                  <li>소수점 둘째 자리까지 표시됩니다.</li>
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
