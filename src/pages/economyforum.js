import { useState, useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";

export async function getStaticProps() {
  const forumData = {
    marketOverview: {
      topics: {
        macro: "거시경제",
        market: "금융시장",
        policy: "정책동향",
        industry: "산업분석",
      },
    },
    lastUpdated: new Date().toISOString(),
    author: "경제분석팀",
    category: "경제포럼",
  };

  return {
    props: {
      forumData,
    },
  };
}

export default function EconomicForum({ forumData }) {
  return (
    <div className="min-h-screen bg-green-900 text-white flex flex-col items-center justify-center p-4">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>2025년 경제 전망: 글로벌 시장 트렌드 분석</title>
        <meta
          name="description"
          content="2025년 경제 전망 및 글로벌 시장 트렌드를 분석합니다. 인플레이션, 금리 정책, 기술 혁신 등 핵심 경제 이슈를 다룹니다."
        />
        <meta
          name="keywords"
          content="2025년 경제 전망, 글로벌 시장 트렌드, 인플레이션, 금리 정책, 주식 시장, 경제 성장"
        />
        <meta name="author" content="경제 블로그" />

        {/* Open Graph 태그 */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="2025년 경제 전망: 글로벌 시장 트렌드 분석"
        />
        <meta
          property="og:description"
          content="2025년 경제 전망 및 글로벌 시장 트렌드를 분석합니다. 인플레이션, 금리 정책, 기술 혁신 등 핵심 경제 이슈를 다룹니다."
        />
        <meta
          property="og:image"
          content="https://anteconomy.co.kr/images/economy-2025.jpg"
        />
        <meta
          property="og:url"
          content="https://anteconomy.co.kr/economyforum"
        />
        <meta property="og:site_name" content="경제 블로그" />

        {/* Twitter 카드 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="2025년 경제 전망: 글로벌 시장 트렌드 분석"
        />
        <meta
          name="twitter:description"
          content="2025년 경제 전망 및 글로벌 시장 트렌드를 분석합니다."
        />
        <meta
          name="twitter:image"
          content="https://anteconomy.co.kr/images/economy-2025.jpg"
        />
      </Head>
      <body>
        <header>
          <h1>2025년 경제 전망: 글로벌 시장 트렌드 분석</h1>
          <p>
            <strong>2025년 세계 경제는 어떻게 변화할까요?</strong> 금리 정책,
            인플레이션, 기술 혁신 등 주요 이슈를 분석하고 글로벌 경제 흐름을
            전망합니다.
          </p>
        </header>

        <section>
          <h2>1. 2025년 세계 경제 성장 전망</h2>
          <p>
            국제통화기금(IMF)과 세계은행(World Bank)의 최근 보고서에 따르면,
            2025년 세계 경제 성장률은 약 <strong>2.9%~3.2%</strong>로
            예측됩니다. 이는 2024년 대비 소폭 상승한 수치로, 경기 침체 우려가
            완화되면서 안정적인 성장이 기대됩니다.
          </p>
          <ul>
            <li>미국: 인플레이션 둔화와 소비 회복으로 경제 성장 예상</li>
            <li>유럽: 에너지 위기 완화 및 내수 회복이 관건</li>
            <li>중국: 부동산 시장 조정과 내수 확대 정책이 경제 성장을 견인</li>
          </ul>
        </section>

        <section>
          <h2>2. 글로벌 인플레이션과 금리 정책</h2>
          <p>
            인플레이션은 2023~2024년 정점을 찍고 하락세로 접어들었으나, 여전히
            높은 수준을 유지하고 있습니다. 이에 따라{" "}
            <strong>각국 중앙은행의 금리 정책</strong>이 2025년 경제 흐름을
            결정짓는 중요한 요소가 될 것입니다.
          </p>
          <h3>▶ 미국 연방준비제도(Fed)의 금리 정책</h3>
          <p>
            미국은 2025년 상반기부터 점진적인 금리 인하를 고려할 가능성이
            큽니다. 이는 금융 시장에 긍정적인 영향을 미칠 것으로 예상됩니다.
          </p>
          <h3>▶ 유럽과 아시아의 금리 정책</h3>
          <p>
            유럽중앙은행(ECB)과 한국은행도 완화적 통화정책을 검토할 수 있으며,
            이에 따라 대출 시장과 주택 시장에 변화가 있을 전망입니다.
          </p>
        </section>

        <section>
          <h2>3. 주식 시장과 금융 시장 전망</h2>
          <p>
            2025년 주식 시장은{" "}
            <strong>기술주, 친환경 산업, 인공지능(AI) 관련 기업</strong>을
            중심으로 강세를 보일 가능성이 큽니다.
          </p>
          <h3>▶ 유망한 산업과 투자 기회</h3>
          <ul>
            <li>
              <strong>AI & 핀테크:</strong> ChatGPT와 같은 AI 기술이
              금융·헬스케어 시장에 미치는 영향 증가
            </li>
            <li>
              <strong>친환경 에너지:</strong> 전기차, 태양광, 수소에너지 관련
              기업 주목
            </li>
            <li>
              <strong>반도체 산업:</strong> 데이터 센터, AI 칩 개발 증가로
              지속적 성장 기대
            </li>
          </ul>
        </section>

        <section>
          <h2>4. 주요 리스크 요인</h2>
          <p>
            2025년에도 글로벌 경제를 위협하는 다양한 리스크 요인이 존재합니다.
          </p>
          <h3>▶ 지정학적 리스크</h3>
          <p>
            러시아-우크라이나 전쟁, 미중 갈등, 중동 지역의 정치 불안정이 글로벌
            경제에 영향을 미칠 수 있습니다.
          </p>
          <h3>▶ 공급망 불안정</h3>
          <p>
            반도체, 원자재 수급 문제가 지속될 경우, 특정 산업의 성장이 제한될 수
            있습니다.
          </p>
          <h3>▶ 기후 변화와 ESG 규제</h3>
          <p>
            탄소 배출 규제와 친환경 정책 강화로 기업들이 새로운 대응 전략을
            필요로 합니다.
          </p>
        </section>

        <section>
          <h2>5. 2025년 경제 전망 요약</h2>
          <ul>
            <li>
              <strong>경제 성장:</strong> 글로벌 경제 성장률 2.9%~3.2% 예상
            </li>
            <li>
              <strong>금리 정책:</strong> 미국, 유럽 등 주요 국가의 금리 인하
              가능성
            </li>
            <li>
              <strong>유망 산업:</strong> AI, 핀테크, 친환경 에너지, 반도체
            </li>
            <li>
              <strong>위험 요소:</strong> 지정학적 리스크, 공급망 문제, ESG 규제
              강화
            </li>
          </ul>
          <p>
            2025년은 <strong>기술 혁신과 금융 정책의 변화</strong>에 따라 새로운
            투자 기회가 생길 것입니다. 글로벌 경제 흐름을 주의 깊게 살피며 대응
            전략을 세우는 것이 중요합니다.
          </p>
        </section>

        <footer>
          <p>
            📢 더 많은 경제 전망 및 투자 전략 정보를 원하시면{" "}
            <a href="#">경제 블로그 구독</a>을 추천드립니다!
          </p>
        </footer>
      </body>
    </div>
  );
}
