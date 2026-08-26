import { useState } from "react";
import Head from "next/head";

const couponCode = "JMHR5";
const affiliateUrl = "https://www.gamsgo.com/details/youtube/partner/xV82m";
const updatedAt = "2026년 8월 23일";

const faqs = [
  ["유튜브 프리미엄 겜스고 할인 코드는 무엇인가요?", "현재 안내하는 프로모션 코드는 JMHR5입니다. 상품·기간·이용자 조건에 따라 적용 여부가 달라질 수 있으므로 결제 화면에서 할인 반영 여부를 확인하세요."],
  ["겜스고 유튜브 프리미엄은 어떻게 활성화하나요?", "겜스고에서 유튜브 상품을 구매한 뒤 구독 메뉴에서 유튜브 로그인 이메일을 제출하고, 안내받은 초대 링크를 시크릿 창에서 열어 가족 그룹 참여를 진행하는 방식입니다."],
  ["유튜브 프리미엄을 겜스고에서 최대 70% 싸게 구독할 수 있나요?", "겜스고 상품의 할인 폭은 상품 유형, 기간, 환율, 프로모션에 따라 달라집니다. ‘최대 70%’는 모든 상품에 항상 적용되는 고정 할인율이 아니며, 실제 할인율은 결제 전 상품 페이지에서 확인해야 합니다."],
  ["유튜브 뮤직도 함께 이용할 수 있나요?", "유튜브 상품은 상품 유형에 따라 제공 범위가 다를 수 있습니다. 유튜브 프리미엄과 유튜브 뮤직 포함 여부를 결제 전 상품 설명에서 확인하세요."],
  ["이미 다른 가족 그룹에 가입한 계정도 이용할 수 있나요?", "구글 가족 그룹 가입 이력이나 국가 설정에 따라 초대가 거절될 수 있습니다. 이미 가족 그룹에 속해 있거나 최근 12개월 내 변경 이력이 있다면 결제 전에 조건을 확인하세요."],
  ["코드 JMHR5가 적용되지 않으면 어떻게 하나요?", "상품이 코드 적용 대상인지, 코드를 결제 전에 입력했는지, 할인 금액이 최종 결제 화면에 반영됐는지 확인하세요. 계속 적용되지 않으면 주문 전 겜스고 고객지원에 문의하는 것이 좋습니다."],
  ["겜스고 유튜브 구독을 환불받을 수 있나요?", "환불 가능 여부와 절차는 상품 유형과 주문 상태에 따라 달라질 수 있습니다. 결제 전 환불 정책을 확인하고, 문제가 발생하면 주문 번호와 함께 겜스고 고객지원에 문의하세요."],
  ["유튜브 가족 그룹 초대가 거절되면 어떻게 하나요?", "국가가 다르다는 안내, 이미 가족 그룹에 가입했다는 안내, 초대 링크 오류가 발생할 수 있습니다. 계정의 국가·가족 그룹 상태를 확인한 뒤 공식 고객지원의 해당 해결 방법을 참고하세요."],
];

export default function YoutubePremiumGamsgoDiscount() {
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
        <title>유튜브 프리미엄 겜스고 최대 70% 할인 코드 JMHR5 | 쿠폰·구독 방법</title>
        <link rel="icon" href="/gamsgo-favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/gamsgo-favicon.svg" type="image/svg+xml" />
        <meta name="description" content="유튜브 프리미엄 겜스고 최대 70% 할인 코드 JMHR5를 확인하세요. 한국 공식 요금과 원화 환산 가격을 비교하고, 싸게 구독·결제하는 방법과 쿠폰 적용 조건을 안내합니다." />
        <link rel="canonical" href="https://anteconomy.co.kr/유튜브-프리미엄-겜스고-70-할인-코드-싸게-구독-결제-쿠폰" />
        <meta property="og:image" content="https://anteconomy.co.kr/youtube-premium-gamsgo-og.png" />
        <meta property="og:image:alt" content="유튜브 프리미엄 겜스고 할인 코드 JMHR5" />
        <meta name="twitter:image" content="https://anteconomy.co.kr/youtube-premium-gamsgo-og.png" />
        <meta property="og:title" content="유튜브 프리미엄 겜스고 최대 70% 할인 코드 JMHR5" />
        <meta property="og:description" content="겜스고 유튜브 프리미엄 할인 코드와 싸게 구독·결제하는 방법을 확인하세요." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "유튜브 프리미엄 겜스고 최대 70% 할인 코드 JMHR5",
          url: "https://anteconomy.co.kr/유튜브-프리미엄-겜스고-70-할인-코드-싸게-구독-결제-쿠폰",
          inLanguage: "ko-KR",
          dateModified: "2026-08-23",
          author: { "@type": "Organization", name: "안트이코노미 편집팀", url: "https://anteconomy.co.kr" },
          mainEntity: { "@type": "FAQPage", mainEntity: faqSchema },
        }) }} />
      </Head>
      <div className="youtube-gamsgo-page">
        <header className="youtube-gamsgo-header">
          <a href="#top" className="youtube-gamsgo-brand">유튜브 프리미엄 <span>겜스고 쿠폰</span></a>
          <nav aria-label="유튜브 프리미엄 겜스고 메뉴"><a href="#coupon">할인 코드</a><a href="#how-to-use">사용 방법</a><a href="#conditions">조건·주의사항</a><a href="#faq">자주 묻는 질문</a></nav>
        </header>
        <main id="top">
          <section className="youtube-gamsgo-hero">
            <div><p className="youtube-gamsgo-eyebrow">유튜브 프리미엄 · 겜스고 할인 쿠폰</p><h1>유튜브 프리미엄<br /><strong>겜스고 최대 70% 할인 코드</strong></h1><p className="youtube-gamsgo-lead">한국 공식 월 구독료 14,900원과 겜스고 원화 환산 월 환산가 약 6,400원을 비교해보세요. 월 약 8,500원 절약 가능 여부와 프로모션 쿠폰 JMHR5를 결제 전에 확인할 수 있습니다.</p><p className="youtube-gamsgo-updated"><span /> 마지막 확인 {updatedAt}</p></div>
            <div className="youtube-coupon-card" id="coupon"><span>현재 안내 프로모션 코드</span><strong>{couponCode}</strong><p>결제 단계에서 코드를 입력하고 할인 반영 여부를 확인하세요.</p><button type="button" onClick={copyCoupon}>{copied ? "복사 완료 ✓" : "JMHR5 코드 복사"}</button><a href={affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">겜스고 할인 링크 바로가기</a><small>할인율은 상품·기간별로 달라질 수 있습니다.</small></div>
          </section>
          <section className="youtube-gamsgo-section youtube-summary"><p className="youtube-kicker">핵심 요약</p><h2>유튜브 프리미엄 겜스고 할인 한눈에 보기</h2><div className="youtube-summary-grid"><div><b>프로모션 코드</b><strong>JMHR5</strong></div><div><b>할인 표현</b><strong>최대 70% 수준</strong></div><div><b>확인 항목</b><strong>최종 결제 금액</strong></div></div><p className="youtube-disclosure">※ ‘70% 할인’은 모든 상품에 고정 적용되는 할인율이 아닙니다. 판매 상품, 구독 기간, 환율, 프로모션 조건에 따라 실제 할인 금액이 달라집니다.</p></section>
          <section className="youtube-gamsgo-section youtube-price-section" id="price-compare"><p className="youtube-kicker">가격 비교</p><h2>한국 공식 요금과 겜스고 가격 비교</h2><p>유튜브 한국 공식 월 요금 14,900원과 겜스고 상품 페이지 표시 가격을 원화로 환산한 예시를 비교했습니다. 실제 결제 금액은 상품 유형, 구독 기간, 환율, 프로모션에 따라 달라질 수 있으므로 결제 화면에서 다시 확인하세요.</p><div className="youtube-price-table"><div className="youtube-price-row youtube-price-head"><b>구분</b><b>한국 공식 유튜브</b><b>겜스고 원화 환산 예시</b><b>절약률</b></div><div className="youtube-price-row"><span>월 환산</span><strong>14,900원</strong><strong>약 6,400원</strong><em>약 57%</em></div><div className="youtube-price-row"><span>12개월</span><strong>178,800원</strong><strong>약 83,400원</strong><em>약 53%</em></div></div><p className="youtube-price-hook"><strong>월 약 8,500원, 12개월 약 95,400원 절약 가능</strong><br />JMHR5 적용 후 최종 금액은 결제 단계에서 확인하세요.</p><p className="youtube-price-note">한국 공식 요금은 유튜브의 국내 안내를 기준으로 했으며, 겜스고 금액은 2026년 8월 23일 환율을 적용한 원화 환산 예시입니다.</p><a className="youtube-price-link" href={affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">겜스고 할인 링크 바로가기</a></section>
          <section className="youtube-gamsgo-section" id="how-to-use"><p className="youtube-kicker">사용 방법</p><h2>겜스고 유튜브 프리미엄 할인 코드 사용 방법</h2><div className="youtube-steps">{["겜스고 제휴 페이지에서 유튜브 상품을 선택합니다.", "구독 기간과 상품 설명을 확인하고 결제 화면으로 이동합니다.", "프로모션 코드 입력란에 JMHR5를 입력한 뒤 적용을 누릅니다.", "할인 금액과 최종 결제 금액을 확인한 뒤 결제를 진행합니다."].map((step, index) => <div key={step}><span>{index + 1}</span><p>{step}</p></div>)}</div></section>
          <section className="youtube-gamsgo-section" id="conditions"><p className="youtube-kicker">결제 전 확인</p><h2>싸게 구독하기 전에 확인할 조건</h2><div className="youtube-condition-grid"><article><strong>가족 그룹 방식</strong><p>겜스고 유튜브 상품은 본인 계정으로 가족 그룹 초대 링크에 참여하는 방식일 수 있습니다.</p></article><article><strong>국가·계정 조건</strong><p>구글 계정의 국가 설정이나 기존 가족 그룹 가입 이력에 따라 초대가 제한될 수 있습니다.</p></article><article><strong>뮤직 포함 여부</strong><p>상품 설명에 유튜브 프리미엄과 유튜브 뮤직의 제공 범위가 어떻게 적혀 있는지 확인하세요.</p></article><article><strong>갱신·환불 조건</strong><p>자동 갱신 가능 여부, 이용 기간, 환불 정책은 결제 전에 공식 안내에서 확인해야 합니다.</p></article></div></section>
          <section className="youtube-gamsgo-section youtube-source-section"><p className="youtube-kicker">정보 확인</p><h2>정보 확인 기준</h2><p><strong>작성자: 안트이코노미 편집팀</strong><br />겜스고 제휴 링크와 공식 고객지원 안내를 기준으로 이 페이지를 작성했습니다. 겜스고 고객지원은 유튜브 구독 활성화 과정에서 로그인 이메일 제출, 초대 링크 복사, 시크릿 창에서 가족 그룹 참여 절차를 안내하고 있습니다.</p><div className="youtube-source-links"><a href="https://help.gamsgo.com/ko/article/youtubegamsgo-youtube-8hupwq/" target="_blank" rel="noopener noreferrer">겜스고 유튜브 활성화 방법 ↗</a><a href="https://help.gamsgo.com/ko/" target="_blank" rel="noopener noreferrer">겜스고 공식 고객지원센터 ↗</a></div><p className="youtube-source-note">마지막 확인: {updatedAt} · 프로모션 코드: JMHR5 · 결제 전 상품 페이지 재확인 권장</p><div className="youtube-update-log"><strong>업데이트 이력</strong><span>2026년 8월 23일 · 유튜브 전용 제휴 링크와 JMHR5 코드 확인</span></div></section>
          <section className="youtube-gamsgo-section" id="faq"><p className="youtube-kicker">자주 묻는 질문</p><h2>유튜브 프리미엄 겜스고 자주 묻는 질문</h2><div className="youtube-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
        </main>
        <footer className="youtube-gamsgo-footer"><strong>유튜브 프리미엄 겜스고 쿠폰 안내</strong><p>본 페이지는 겜스고 유튜브 프리미엄 할인 코드와 결제 방법을 안내하는 제휴 콘텐츠입니다. 제휴 링크가 포함되어 있으며, 할인·상품·이용 조건은 공식 결제 화면을 기준으로 확인하세요.</p></footer>
      </div>
    </>
  );
}
