import Head from "next/head";
import Link from "next/link";

const affiliateUrl = "https://www.gamsgo.com/partner/xV82m";
const updatedAt = "2026년 8월 24일";
const faqs = [
  ["겜스고 할인 코드가 적용되지 않는 가장 흔한 이유는 무엇인가요?", "프로모션 대상이 아닌 서비스이거나 이용 기간·계정 조건이 맞지 않는 경우가 많습니다. 결제 화면에서 적용 대상과 최종 금액을 먼저 확인하세요."],
  ["주문 후 할인 코드를 추가할 수 있나요?", "프로모션 코드는 일반적으로 결제 전에 입력해야 합니다. 주문 완료 후 소급 적용 가능 여부는 겜스고 고객지원에 주문 번호와 함께 문의하세요."],
  ["JMHR5를 입력했는데 금액이 바뀌지 않으면 어떻게 하나요?", "코드 오탈자, 적용 대상, 입력 시점을 확인한 뒤 페이지를 새로고침하세요. 계속 적용되지 않으면 할인 없이 결제하지 말고 공식 고객지원에 문의하는 것이 좋습니다."],
];

export default function GamsgoDiscountCodeNotWorking() {
  const faqSchema = faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  }));

  return (
    <>
      <Head>
        <title>겜스고 할인 코드 적용 안됨 | JMHR5 오류 해결 방법</title>
        <meta name="description" content="겜스고 할인 코드가 적용되지 않을 때 확인할 입력 위치, 서비스 조건, 기간, 계정 조건과 고객지원 문의 방법을 정리했습니다." />
        <meta name="keywords" content="겜스고 할인 코드 적용 안됨, 겜스고 쿠폰 오류, JMHR5 적용 안됨, 겜스고 프로모션 코드 오류" />
        <link rel="canonical" href="https://anteconomy.co.kr/겜스고-할인-코드-적용-안됨" />
        <meta property="og:title" content="겜스고 할인 코드 적용 안됨 | 해결 방법" />
        <meta property="og:description" content="겜스고 할인 코드가 적용되지 않을 때 확인할 사항을 단계별로 안내합니다." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSchema,
        }) }} />
      </Head>
      <div className="gamsgo-page">
        <header className="gamsgo-header"><Link className="gamsgo-brand" href="/">겜스고 할인 <span>쿠폰 가이드</span></Link><nav aria-label="겜스고 할인 메뉴"><Link href="/gamsgo-discount-code">전체 할인 코드</Link><Link href="#checklist">확인 순서</Link><Link href="#faq">FAQ</Link></nav></header>
        <main id="top">
          <section className="gamsgo-hero"><div><p className="gamsgo-eyebrow">겜스고 할인 코드 오류 해결</p><h1>겜스고 할인 코드<br /><strong>적용 안될 때 해결 방법</strong></h1><p className="gamsgo-lead">JMHR5를 입력했는데 할인 금액이 바뀌지 않거나 프로모션 코드가 거절되나요? 결제 전에 확인해야 할 조건과 해결 순서를 정리했습니다.</p><p className="gamsgo-updated"><span className="status-dot" /> 마지막 확인 {updatedAt}</p></div><div className="coupon-card"><span className="coupon-card-label">현재 확인할 코드</span><div className="coupon-code">JMHR5</div><p>코드를 다시 입력하기 전에 적용 대상 서비스와 최종 결제 금액을 확인하세요.</p><div className="coupon-actions"><a href={affiliateUrl} target="_blank" rel="sponsored noopener noreferrer">겜스고 할인 링크 확인</a></div><small>코드 적용 여부는 결제 화면을 기준으로 확인하세요.</small></div></section>

          <section className="toc-section" aria-label="목차"><p className="section-kicker">CONTENTS</p><h2>겜스고 코드 오류 확인 순서</h2><div className="toc-grid">{[["입력 위치 확인", "#location"], ["적용 조건 확인", "#conditions"], ["오류 해결 순서", "#checklist"], ["고객지원 문의", "#support"], ["자주 묻는 질문", "#faq"]].map(([label, href], index) => <a href={href} key={label}><span>{String(index + 1).padStart(2, "0")}</span>{label}<b>→</b></a>)}</div></section>

          <section className="content-section intro-section" id="location"><p className="section-kicker">CODE LOCATION</p><h2>할인 코드는 어디에 입력하나요?</h2><p>겜스고에서 이용하려는 서비스를 선택한 뒤 구독 기간과 이용 조건을 확인하고 결제 단계로 이동합니다. 결제 화면의 프로모션 코드 또는 쿠폰 입력란에 JMHR5를 입력한 다음 적용 버튼을 누르세요.</p><div className="notice-box"><strong>중요</strong><br />코드를 입력한 뒤 할인 문구만 보지 말고 최종 결제 금액이 실제로 줄었는지 확인하세요. 금액이 그대로라면 결제를 완료하지 않는 것이 안전합니다.</div></section>

          <section className="content-section" id="conditions"><p className="section-kicker">CHECK CONDITIONS</p><h2>겜스고 할인 코드가 적용되지 않는 이유</h2><div className="steps-grid"><div className="step-card"><span>1</span><p><strong>적용 대상 확인</strong><br />모든 서비스·기간에 같은 프로모션이 적용되는 것은 아닙니다.</p></div><div className="step-card"><span>2</span><p><strong>코드 입력 시점 확인</strong><br />결제 완료 후에는 코드가 소급 적용되지 않을 수 있습니다.</p></div><div className="step-card"><span>3</span><p><strong>오탈자 확인</strong><br />대문자·숫자를 포함해 JMHR5를 정확하게 입력하세요.</p></div><div className="step-card"><span>4</span><p><strong>최종 금액 확인</strong><br />할인 적용 후 결제 금액이 변경되었는지 확인하세요.</p></div></div></section>

          <section className="content-section" id="checklist"><p className="section-kicker">TROUBLESHOOTING</p><h2>JMHR5 적용 안됨 해결 순서</h2><div className="steps-grid"><div className="step-card"><span>1</span><p>입력한 코드가 <strong>JMHR5</strong>인지 다시 확인합니다.</p></div><div className="step-card"><span>2</span><p>선택한 서비스와 기간이 프로모션 대상인지 확인합니다.</p></div><div className="step-card"><span>3</span><p>결제 화면을 새로 열고 코드를 다시 적용합니다.</p></div><div className="step-card"><span>4</span><p>할인 금액이 반영되지 않으면 결제를 중단하고 문의합니다.</p></div></div><div className="notice-box"><strong>할인 없이 결제하지 마세요.</strong><br />적용 결과가 확인되지 않는 상태에서 결제를 진행하면 코드가 사후 적용되지 않을 수 있습니다.</div></section>

          <section className="content-section" id="support"><p className="section-kicker">SUPPORT</p><h2>계속 적용되지 않을 때 문의하는 방법</h2><p>주문 전이라면 선택한 서비스, 구독 기간, 입력한 코드와 오류 화면을 정리해 겜스고 공식 고객지원에 문의하세요. 이미 주문했다면 주문 번호와 결제 시각을 함께 전달하면 확인에 도움이 됩니다.</p><div className="coupon-actions"><a href="https://help.gamsgo.com/ko/" target="_blank" rel="noopener noreferrer">겜스고 공식 고객지원센터</a><Link href="/gamsgo-discount-code">전체 할인 코드 안내</Link></div></section>

          <section className="content-section" id="faq"><p className="section-kicker">FAQ</p><h2>겜스고 할인 코드 적용 오류 FAQ</h2><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
          <section className="update-section"><div><p className="section-kicker">UPDATE LOG</p><h2>정보 확인 기준</h2></div><p><strong>{updatedAt}</strong><br />JMHR5 적용 조건과 오류 해결 순서 업데이트</p></section>
        </main>
        <footer className="gamsgo-footer"><strong>겜스고 할인 코드 오류 해결 안내</strong><p>본 페이지는 겜스고 할인 코드 적용 과정에서 확인할 수 있는 일반적인 해결 방법을 안내합니다. 실제 적용·환불 기준은 공식 결제 화면과 고객지원 안내를 기준으로 확인하세요.</p></footer>
      </div>
    </>
  );
}
