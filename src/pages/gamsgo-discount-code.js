import { useState } from "react";
import Head from "next/head";

const couponCode = "JMHR5";
const gamsgoUrl = "https://www.gamsgo.com/partner/xV82m";
const updatedAt = "2026년 8월 22일";

const services = [
  { name: "ChatGPT", label: "챗GPT", icon: "✦", tone: "violet" },
  { name: "YouTube Premium", label: "유튜브 프리미엄", icon: "▶", tone: "red" },
  { name: "Netflix", label: "넷플릭스", icon: "N", tone: "black" },
  { name: "Pokémon GO", label: "포켓몬고", icon: "⌁", tone: "yellow" },
  { name: "VALORANT", label: "발로란트", icon: "◇", tone: "pink" },
];

const faqs = [
  ["겜스고 할인 코드는 어디에 입력하나요?", "겜스고에서 원하는 상품을 선택한 뒤 결제 단계에서 프로모션 코드 입력란에 코드를 입력하고 Apply 버튼을 누르면 됩니다. 할인 금액과 최종 결제 금액이 반영되었는지 확인한 뒤 결제를 진행하세요."],
  ["JMHR5 코드는 모든 상품에 적용되나요?", "프로모션 코드는 상품, 기간, 이용자 조건에 따라 적용 범위가 달라질 수 있습니다. 결제 전 코드 적용 여부와 최종 금액을 반드시 확인하세요."],
  ["주문을 완료한 뒤에도 할인 코드를 적용할 수 있나요?", "일반적으로 프로모션 코드는 주문 전에만 적용할 수 있습니다. 결제 완료 후에는 할인 코드가 소급 적용되지 않을 수 있으므로 결제 전 확인이 필요합니다."],
  ["겜스고에서 챗GPT·유튜브·넷플릭스를 이용할 수 있나요?", "겜스고의 판매 상품과 재고는 시점에 따라 달라질 수 있습니다. 이용하려는 서비스가 현재 판매 중인지 공식 상품 페이지에서 먼저 확인하세요."],
  ["겜스고 이용 시 주의할 점은 무엇인가요?", "공유형 구독 상품은 계정 이용 방식과 서비스 약관이 공식 개인 구독과 다를 수 있습니다. 자동 갱신, 환불 조건, 프로필·기기 제한을 결제 전에 확인하는 것이 좋습니다."],
];

export default function GamsgoDiscountCode() {
  const [copied, setCopied] = useState(false);

  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const faqSchema = faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  }));

  return (
    <>
      <Head>
        <html lang="ko" />
        <title>겜스고 할인 코드 쿠폰 GamsGo 프로모션 | 2026년 8월</title>
        <meta name="description" content="2026년 8월 겜스고 할인 코드와 쿠폰을 확인하세요. GamsGo 프로모션 코드 사용 방법과 챗GPT, 유튜브, 넷플릭스, 포켓몬고, 발로란트 관련 상품 이용 전 주의사항을 정리했습니다." />
        <meta name="keywords" content="겜스고 할인 코드, 겜스고 할인코드, 겜스고 쿠폰, gamsgo 프로모션, 챗gpt, 유튜브, 넷플릭스, 포켓몬고, 발로란트" />
        <link rel="canonical" href="https://anteconomy.co.kr/겜스고-할인-코드-쿠폰-gamsgo-프로모션" />
        <meta property="og:title" content="겜스고 할인 코드 쿠폰 GamsGo 프로모션" />
        <meta property="og:description" content="겜스고 할인 코드와 프로모션 적용 방법을 한 페이지에서 확인하세요." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSchema,
        }) }} />
      </Head>

      <div className="gamsgo-page">
        <header className="gamsgo-header">
          <a className="gamsgo-brand" href="#top" aria-label="겜스고 할인 코드 홈">GamsGo <span>쿠폰 가이드</span></a>
          <nav aria-label="페이지 메뉴">
            <a href="#coupon">할인 코드</a>
            <a href="#how-to-use">사용 방법</a>
            <a href="#services">서비스</a>
            <a href="#faq">FAQ</a>
          </nav>
        </header>

        <main id="top">
          <section className="gamsgo-hero">
            <div className="gamsgo-hero-copy">
              <p className="gamsgo-eyebrow">GAMSGO PROMOTION · COUPON GUIDE</p>
              <h1>겜스고 할인 코드<br /><strong>쿠폰·프로모션 한눈에 보기</strong></h1>
              <p className="gamsgo-lead">겜스고에서 사용할 수 있는 할인 코드와 쿠폰 정보를 정리했습니다. 결제 전 코드를 적용하고 최종 할인 금액을 확인해보세요.</p>
              <div className="gamsgo-updated"><span className="status-dot" /> 최신 확인일 {updatedAt}</div>
            </div>
            <div className="coupon-card" id="coupon">
              <span className="coupon-card-label">지금 확인할 프로모션 코드</span>
              <div className="coupon-code">{couponCode}</div>
              <p>결제 단계에서 프로모션 코드 입력 후 할인 적용 여부를 확인하세요.</p>
              <div className="coupon-actions">
                <button type="button" onClick={copyCoupon}>{copied ? "복사 완료 ✓" : "코드 복사하기"}</button>
                <a href={gamsgoUrl} target="_blank" rel="sponsored noopener noreferrer">겜스고에서 사용하기 ↗</a>
              </div>
              <small>상품·기간별 적용 조건이 다를 수 있습니다.</small>
            </div>
          </section>

          <section className="toc-section" aria-label="목차">
            <p className="section-kicker">CONTENTS</p>
            <h2>겜스고 할인 코드 안내</h2>
            <div className="toc-grid">
              {["겜스고 할인 코드", "GamsGo 프로모션 코드", "겜스고 이용 방법", "서비스별 확인 사항", "겜스고 FAQ"].map((item, index) => (
                <a href={["#coupon", "#coupon", "#how-to-use", "#services", "#faq"][index]} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{item}<b>→</b>
                </a>
              ))}
            </div>
          </section>

          <section className="content-section intro-section">
            <p className="section-kicker">ABOUT GAMSGO</p>
            <h2>겜스고(GamsGo)란?</h2>
            <p>겜스고는 영상·음악·AI 등 디지털 구독 상품을 비교하고 이용할 수 있는 플랫폼입니다. 상품별 이용 방식과 가격, 적용 가능한 프로모션이 다르므로 할인 코드만 확인하기보다 결제 조건까지 함께 살펴보는 것이 좋습니다.</p>
            <div className="notice-box"><strong>잠깐 확인하세요</strong><br />이 페이지의 할인 정보는 변동될 수 있습니다. 결제 화면에서 할인 코드가 적용되고 최종 금액이 변경되는지 확인한 후 결제하세요.</div>
          </section>

          <section className="content-section" id="how-to-use">
            <p className="section-kicker">HOW TO USE</p>
            <h2>겜스고 할인 코드 사용 방법</h2>
            <div className="steps-grid">
              {["겜스고 공식 사이트에서 원하는 서비스를 선택합니다.", "기간과 상품 조건을 확인한 뒤 결제 화면으로 이동합니다.", "프로모션 코드 입력란에 JMHR5를 붙여넣고 Apply를 누릅니다.", "할인 적용 문구와 최종 결제 금액을 확인하고 결제를 진행합니다."].map((step, index) => (
                <div className="step-card" key={step}><span>{index + 1}</span><p>{step}</p></div>
              ))}
            </div>
          </section>

          <section className="content-section" id="services">
            <p className="section-kicker">POPULAR SERVICES</p>
            <h2>서비스별 겜스고 할인 확인</h2>
            <p className="section-description">아래 서비스의 상품 판매 여부와 프로모션 적용 조건은 공식 상품 페이지에서 확인하세요.</p>
            <div className="service-grid">
              {services.map((service) => <a href={gamsgoUrl} target="_blank" rel="sponsored noopener noreferrer" className={`service-card ${service.tone}`} key={service.name}><span>{service.icon}</span><div><strong>{service.label}</strong><small>{service.name}</small></div><b>확인 →</b></a>)}
            </div>
          </section>

          <section className="content-section" id="faq">
            <p className="section-kicker">FAQ</p>
            <h2>겜스고 할인 코드 자주 묻는 질문</h2>
            <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </section>

          <section className="update-section">
            <div><p className="section-kicker">UPDATE LOG</p><h2>업데이트 내역</h2></div>
            <p><strong>{updatedAt}</strong><br />겜스고 할인 코드 및 서비스 안내 업데이트</p>
          </section>
        </main>
        <footer className="gamsgo-footer"><strong>GamsGo 쿠폰 가이드</strong><p>본 페이지는 겜스고 할인 코드와 프로모션 정보를 정리한 안내 페이지입니다. 제휴 링크가 포함될 수 있으며, 상품 이용 전 공식 판매 조건과 서비스 약관을 확인하세요.</p></footer>
      </div>
    </>
  );
}
