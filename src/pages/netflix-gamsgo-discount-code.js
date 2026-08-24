import Head from "next/head";
import Link from "next/link";

const affiliateUrl = "https://www.gamsgo.com/partner/xV82m";
const updatedAt = "2026년 8월 24일";
const faqs = [
  ["넷플릭스 요금제 할인 가격과 겜스고 쿠폰 코드는 어떻게 확인하나요?", "넷플릭스 요금제와 겜스고 이용 조건을 확인한 뒤 결제 단계에서 JMHR5를 입력하고 할인 가격이 반영되었는지 확인하세요."],
  ["넷플릭스 겜스고는 어떤 방식으로 이용하나요?", "서비스와 기간에 따라 개인 계정 활성화, 공유형 또는 다른 이용 방식이 제공될 수 있습니다. 결제 전 계정 방식과 보증 조건을 확인해야 합니다."],
  ["화질과 동시 시청 인원도 확인할 수 있나요?", "넷플릭스 요금제와 겜스고 이용 방식에 따라 화질, 동시 시청, 프로필과 기기 이용 조건이 달라질 수 있습니다. 최종 결제 전 이용 안내를 확인하세요."],
  ["넷플릭스 접속이 안 되면 어떻게 하나요?", "로그인 상태와 이용 기간을 먼저 확인하고, 계정 공유 방식이라면 프로필·기기 제한을 점검하세요. 문제가 계속되면 주문 번호와 함께 겜스고 고객지원에 문의하세요."],
];

export default function NetflixGamsgoDiscountCode() {
  const faqSchema = faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }));
  return (
    <>
      <Head>
        <title>넷플릭스 요금제 할인 가격 겜스고 쿠폰 코드 JMHR5</title>
        <meta name="description" content="넷플릭스 요금제 할인 가격과 겜스고 쿠폰 코드 JMHR5를 확인하세요. 한국 공식 요금, 화질·동시 시청, 계정 방식과 환불 조건을 안내합니다." />
        <meta name="keywords" content="넷플릭스 요금제 할인 가격 겜스고 쿠폰 코드, 넷플릭스 겜스고 할인, 넷플릭스 쿠폰, JMHR5" />
        <link rel="canonical" href="https://anteconomy.co.kr/넷플릭스-요금제-할인-가격-겜스고-쿠폰-코드" />
        <meta property="og:title" content="넷플릭스 요금제 할인 가격 겜스고 쿠폰 코드 JMHR5" />
        <meta property="og:description" content="넷플릭스 공식 요금과 겜스고 쿠폰 코드, 화질·동시 시청·계정 조건을 결제 전에 확인하세요." />
        <meta property="og:type" content="article" />
        <link rel="icon" href="/gamsgo-favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchema }) }} />
      </Head>
      <div className="gamsgo-page">
        <header className="gamsgo-header"><Link className="gamsgo-brand" href="/">겜스고 할인 <span>쿠폰 가이드</span></Link><nav aria-label="넷플릭스 겜스고 메뉴"><Link href="/gamsgo-discount-code">전체 할인 코드</Link><Link href="#conditions">이용 조건</Link><Link href="#how-to-use">사용 방법</Link><Link href="#faq">FAQ</Link></nav></header>
        <main id="top">
          <section className="gamsgo-hero"><div><p className="gamsgo-eyebrow">넷플릭스 · 겜스고 할인 정보</p><h1>넷플릭스 요금제 할인 가격<br /><strong>겜스고 쿠폰 코드 JMHR5</strong></h1><p className="gamsgo-lead">넷플릭스 요금제와 할인 가격을 비교하고, 겜스고 쿠폰 코드 JMHR5를 적용하기 전에 화질·동시 시청·계정 조건을 확인하세요.</p><p className="gamsgo-updated"><span className="status-dot" /> 마지막 확인 {updatedAt}</p></div><div className="coupon-card"><span className="coupon-card-label">확인할 프로모션 코드</span><div className="coupon-code">JMHR5</div><p>코드를 복사하고 겜스고 할인 링크에서 넷플릭스 이용 조건과 최종 금액을 확인하세요.</p><div className="coupon-actions"><a href={affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">넷플릭스 할인 정보 확인</a></div><small>할인·기간·계정 조건은 결제 화면에서 최종 확인하세요.</small></div></section>

          <section className="toc-section" aria-label="목차"><p className="section-kicker">CONTENTS</p><h2>넷플릭스 요금제 할인 가격과 겜스고 쿠폰 코드</h2><div className="toc-grid">{[["할인 코드 확인", "#coupon"], ["넷플릭스 공식 요금", "#official-price"], ["이용 조건", "#conditions"], ["사용 방법", "#how-to-use"], ["자주 묻는 질문", "#faq"]].map(([label, href], index) => <a href={href} key={label}><span>{String(index + 1).padStart(2, "0")}</span>{label}<b>→</b></a>)}</div></section>

          <section className="content-section intro-section" id="coupon"><p className="section-kicker">COUPON GUIDE</p><h2>넷플릭스 겜스고 할인 코드 JMHR5</h2><p>현재 안내하는 프로모션 코드는 JMHR5입니다. 겜스고에서 넷플릭스 이용 기간과 계정 방식을 선택한 뒤 결제 단계에서 코드를 입력하고 할인 금액이 반영되는지 확인하세요.</p><div className="notice-box"><strong>할인율보다 최종 조건이 중요합니다.</strong><br />서비스·기간·계정 방식에 따라 실제 할인 금액과 이용 조건이 달라질 수 있으므로 최종 결제 화면을 기준으로 확인하세요.</div></section>

          <section className="content-section" id="official-price"><p className="section-kicker">OFFICIAL PRICE</p><h2>넷플릭스 요금제 할인 가격 확인</h2><p>넷플릭스 요금제 할인 가격을 알아보는 분이라면 한국 공식 멤버십 요금과 겜스고 쿠폰 코드 적용 후 최종 금액을 따로 확인해야 합니다. 넷플릭스 한국 공식 페이지는 요금이 월 7,000원부터 시작한다고 안내하며, 광고 포함 여부·화질·동시 시청 인원에 따라 멤버십이 달라질 수 있습니다.</p><div className="notice-box"><strong>공식 요금과 최종 결제 금액은 변동될 수 있습니다.</strong><br />현재 요금과 멤버십별 제공 범위는 <a href="https://www.netflix.com/kr/" target="_blank" rel="noopener noreferrer">넷플릭스 한국 공식 페이지</a>에서 확인하세요.</div></section>

          <section className="content-section" id="conditions"><p className="section-kicker">CHECK CONDITIONS</p><h2>넷플릭스 겜스고 이용 전 확인할 조건</h2><div className="steps-grid"><div className="step-card"><span>1</span><p><strong>계정 방식</strong><br />개인 계정 활성화인지 공유형인지 확인하세요.</p></div><div className="step-card"><span>2</span><p><strong>화질·동시 시청</strong><br />제공되는 화질과 동시 시청 조건을 확인하세요.</p></div><div className="step-card"><span>3</span><p><strong>기간·보증</strong><br />이용 기간과 문제가 생겼을 때의 보증 조건을 확인하세요.</p></div><div className="step-card"><span>4</span><p><strong>환불·갱신</strong><br />자동 갱신과 환불 기준을 결제 전에 확인하세요.</p></div></div></section>

          <section className="content-section" id="how-to-use"><p className="section-kicker">HOW TO USE</p><h2>넷플릭스 겜스고 할인 코드 사용 방법</h2><div className="steps-grid">{["JMHR5 코드를 복사합니다.", "겜스고 할인 링크에서 넷플릭스 이용 기간과 조건을 확인합니다.", "결제 단계에서 코드를 입력하고 할인 금액을 확인합니다.", "화질·동시 시청·환불 조건을 확인한 뒤 결제합니다."].map((step, index) => <div className="step-card" key={step}><span>{index + 1}</span><p>{step}</p></div>)}</div><div className="coupon-actions"><a href={affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">넷플릭스 겜스고 할인 링크 바로가기</a><Link href="/gamsgo-discount-code">겜스고 전체 할인 정보</Link></div></section>

          <section className="content-section" id="faq"><p className="section-kicker">FAQ</p><h2>넷플릭스 요금제 할인 가격과 겜스고 쿠폰 코드 FAQ</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
          <section className="update-section"><div><p className="section-kicker">UPDATE LOG</p><h2>정보 확인 기준</h2></div><p><strong>{updatedAt}</strong><br />넷플릭스 공식 요금과 이용 조건 확인</p></section>
        </main>
        <footer className="gamsgo-footer"><strong>넷플릭스 요금제 할인 가격 겜스고 쿠폰 코드 안내</strong><p>본 페이지에는 겜스고 제휴 링크가 포함되어 있습니다. 넷플릭스 요금·이용 조건과 겜스고 할인 적용 여부는 공식 결제 화면을 기준으로 확인하세요.</p></footer>
      </div>
    </>
  );
}
