import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import AdsenseAd from "../components/AdsenseAd";
import AdsenseInit from "../components/AdsenseInit";

const couponCode = "JMHR5";
const gamsgoUrl = "https://www.gamsgo.com/partner/xV82m";
const youtubeUrl = "/youtube-premium-gamsgo-discount";

const services = [
  { title: "유튜브 프리미엄", detail: "광고 없는 영상·음악 구독", href: youtubeUrl, icon: "▶", color: "bg-red-500" },
  { title: "넷플릭스", detail: "영상 구독 할인 조건 확인", href: "/gamsgo-discount-code#services", icon: "N", color: "bg-slate-950" },
  { title: "챗GPT", detail: "AI 구독 할인 정보 확인", href: "/gamsgo-discount-code#services", icon: "✦", color: "bg-indigo-500" },
  { title: "포켓몬고·발로란트", detail: "게임 구독 할인 조건 확인", href: "/gamsgo-discount-code#services", icon: "◇", color: "bg-amber-500" },
];

const faqs = [
  ["할인 코드는 어떻게 사용하나요?", "겜스고에서 원하는 서비스를 선택한 뒤 결제 단계에서 JMHR5를 입력하고 할인 금액이 반영되었는지 확인합니다."],
  ["JMHR5는 모든 서비스에 적용되나요?", "서비스·기간·이용자 조건에 따라 적용 여부가 달라질 수 있습니다. 최종 결제 화면의 할인 금액을 기준으로 확인하세요."],
  ["결제 전에 무엇을 확인해야 하나요?", "이용 기간, 계정 방식, 자동 갱신, 환불 조건과 서비스별 이용 제한을 서비스 안내에서 확인해야 합니다."],
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyCoupon = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch { setCopied(false); }
  };

  const faqSchema = faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  }));

  return (
    <>
      <Head>
        <title>겜스고 할인 코드 JMHR5 | 유튜브 프리미엄·넷플릭스·챗GPT 할인</title>
        <meta name="description" content="겜스고 할인 코드 JMHR5를 복사하고 유튜브 프리미엄, 넷플릭스, 챗GPT 등 인기 구독 서비스의 할인 정보를 확인하세요." />
        <meta name="keywords" content="겜스고 할인 코드, 겜스고 쿠폰, 유튜브 프리미엄 겜스고, 넷플릭스 겜스고, 챗GPT 겜스고" />
        <link rel="canonical" href="https://anteconomy.co.kr/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="겜스고 할인 코드 JMHR5" />
        <meta property="og:description" content="JMHR5 할인 코드를 복사하고 인기 구독 서비스의 겜스고 할인 정보를 확인하세요." />
        <meta property="og:url" content="https://anteconomy.co.kr/" />
        <meta property="og:image" content="https://anteconomy.co.kr/og-image.svg" />
        <link rel="icon" href="/gamsgo-favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqSchema,
        }) }} />
      </Head>
      <AdsenseInit />
      <div className="homepage-shell min-h-screen text-slate-900">
        <header className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-xl font-black tracking-tight text-slate-950">겜스고 할인 <span className="text-red-500">쿠폰 가이드</span></Link>
          <nav className="flex gap-5 overflow-x-auto whitespace-nowrap text-sm font-bold text-slate-700" aria-label="겜스고 할인 메뉴">
            <a href="#coupon">할인 코드</a><a href="#services">인기 서비스</a><a href="#how-to-use">사용 방법</a><a href="#faq">자주 묻는 질문</a>
          </nav>
        </header>

        <main>
          <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black tracking-[0.18em] text-red-500">지금 바로 할인받기</p>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl">겜스고 할인 코드<br /><span className="text-red-500">JMHR5로 구독료 아끼기</span></h1>
              <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-slate-600">유튜브 프리미엄, 넷플릭스, 챗GPT 등 인기 구독 서비스를 확인하고, 결제 전에 프로모션 코드 JMHR5를 적용해보세요.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row"><a href={gamsgoUrl} target="_blank" rel="sponsored noopener noreferrer" className="rounded-full bg-red-500 px-7 py-4 text-center font-black text-white shadow-lg shadow-red-200">겜스고 할인 링크 바로가기</a><a href="#services" className="rounded-full bg-white px-7 py-4 text-center font-black text-slate-900 ring-1 ring-slate-200">할인 정보 먼저 보기</a></div>
              <p className="mt-4 text-sm font-bold text-slate-500">서비스·기간·이용 조건에 따라 할인 적용 결과가 달라질 수 있습니다.</p>
            </div>
            <div id="coupon" className="rounded-3xl bg-white p-7 shadow-2xl ring-1 ring-slate-200 sm:p-9">
              <span className="text-sm font-black text-slate-500">현재 프로모션 코드</span>
              <strong className="my-4 block text-5xl font-black tracking-widest text-red-500">{couponCode}</strong>
              <p className="font-semibold leading-7 text-slate-600">코드를 복사한 뒤 겜스고 할인 링크로 이동해 원하는 서비스의 최종 할인 금액을 확인하세요.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2"><button type="button" onClick={copyCoupon} className="rounded-full bg-red-500 px-5 py-4 font-black text-white">{copied ? "복사 완료 ✓" : "JMHR5 코드 복사"}</button><a href={gamsgoUrl} target="_blank" rel="sponsored noopener noreferrer" className="rounded-full bg-slate-950 px-5 py-4 text-center font-black text-white">할인 정보 보러가기</a></div>
              <small className="mt-4 block font-semibold text-slate-500">할인 금액은 결제 화면에서 최종 확인하세요.</small>
            </div>
          </section>

          <div className="mx-auto max-w-6xl px-5"><AdsenseAd slot="homepage-top" /></div>

          <section id="services" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
            <p className="mb-3 text-sm font-black tracking-[0.18em] text-red-500">인기 구독 서비스</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">어떤 서비스의 할인 정보를 찾으시나요?</h2>
            <p className="mt-4 max-w-2xl font-semibold leading-7 text-slate-600">원하는 서비스를 선택하면 할인 코드와 이용 조건을 확인할 수 있습니다. 바로 확인하려면 할인 링크 바로가기 버튼을 이용하세요.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map((service) => <article key={service.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><span className={`grid h-11 w-11 place-items-center rounded-xl text-xl font-black text-white ${service.color}`}>{service.icon}</span><h3 className="mt-5 text-xl font-black">{service.title}</h3><p className="mt-2 min-h-12 text-sm font-semibold leading-6 text-slate-600">{service.detail}</p><div className="mt-5 flex flex-col gap-2"><a href={gamsgoUrl} target="_blank" rel="sponsored noopener noreferrer" className="rounded-full bg-red-500 px-4 py-3 text-center text-sm font-black text-white">할인 링크 바로가기</a><Link href={service.href} className="rounded-full px-4 py-3 text-center text-sm font-black text-slate-700 ring-1 ring-slate-200">상세 조건 확인</Link></div></article>)}</div>
          </section>

          <section className="bg-slate-950 px-5 py-14 text-white sm:py-20"><div className="mx-auto max-w-6xl"><p className="mb-3 text-sm font-black tracking-[0.18em] text-red-400">겜스고 할인 혜택</p><h2 className="text-3xl font-black sm:text-4xl">할인 정보를 확인하고 원하는 서비스를 선택하세요</h2><div className="mt-8 grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-white/10 p-6"><h3 className="text-xl font-black">서비스별 할인 확인</h3><p className="mt-3 font-semibold leading-7 text-white/75">관심 있는 서비스의 할인 코드와 이용 기간별 조건을 확인하세요.</p></div><div className="rounded-2xl bg-white/10 p-6"><h3 className="text-xl font-black">프로모션 코드 적용</h3><p className="mt-3 font-semibold leading-7 text-white/75">결제 전 JMHR5를 입력하고 할인 금액이 실제로 반영되는지 확인하세요.</p></div><div className="rounded-2xl bg-white/10 p-6"><h3 className="text-xl font-black">이용 조건 확인</h3><p className="mt-3 font-semibold leading-7 text-white/75">자동 갱신, 환불, 계정 방식과 서비스별 제한을 확인하세요.</p></div></div><div className="mt-9 text-center"><a href={gamsgoUrl} target="_blank" rel="sponsored noopener noreferrer" className="inline-block rounded-full bg-red-500 px-8 py-4 font-black text-white shadow-lg shadow-red-950">JMHR5 할인 정보 확인하기</a></div></div></section>

          <section id="how-to-use" className="mx-auto max-w-6xl px-5 py-14 sm:py-20"><p className="mb-3 text-sm font-black tracking-[0.18em] text-red-500">간단한 확인 순서</p><h2 className="text-3xl font-black sm:text-4xl">겜스고 할인 코드 사용 방법</h2><div className="mt-8 grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><b className="text-3xl text-red-500">01</b><h3 className="mt-5 text-xl font-black">코드 복사</h3><p className="mt-3 font-semibold leading-7 text-slate-600">위의 JMHR5 코드 복사 버튼을 누릅니다.</p></div><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><b className="text-3xl text-red-500">02</b><h3 className="mt-5 text-xl font-black">서비스 선택</h3><p className="mt-3 font-semibold leading-7 text-slate-600">겜스고 할인 링크에서 원하는 서비스와 기간을 확인합니다.</p></div><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><b className="text-3xl text-red-500">03</b><h3 className="mt-5 text-xl font-black">할인 조건 확인</h3><p className="mt-3 font-semibold leading-7 text-slate-600">코드를 입력하고 할인·환불·갱신 조건을 확인한 뒤 결제합니다.</p></div></div><div className="mt-8 text-center"><a href={gamsgoUrl} target="_blank" rel="sponsored noopener noreferrer" className="inline-block rounded-full bg-slate-950 px-8 py-4 font-black text-white">겜스고 할인 링크 바로가기</a></div></section>

          <section id="notice" className="mx-auto max-w-6xl px-5 pb-14 sm:pb-20"><div className="rounded-3xl bg-red-50 p-7 ring-1 ring-red-100 sm:p-10"><h2 className="text-3xl font-black">결제 전 꼭 확인하세요</h2><div className="mt-6 grid gap-5 md:grid-cols-3"><div><h3 className="font-black">서비스·기간</h3><p className="mt-2 font-semibold leading-7 text-slate-700">서비스와 구독 기간에 따라 가격과 제공 범위가 달라질 수 있습니다.</p></div><div><h3 className="font-black">계정 이용 방식</h3><p className="mt-2 font-semibold leading-7 text-slate-700">개인 계정, 가족 그룹, 공유형 등 서비스별 이용 방식을 확인하세요.</p></div><div><h3 className="font-black">환불·갱신</h3><p className="mt-2 font-semibold leading-7 text-slate-700">자동 갱신과 환불 기준은 결제 전 공식 서비스 안내를 확인하세요.</p></div></div></div></section>

          <section id="faq" className="mx-auto max-w-6xl px-5 pb-14 sm:pb-20"><p className="mb-3 text-sm font-black tracking-[0.18em] text-red-500">자주 묻는 질문</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl">겜스고 할인 코드 FAQ</h2><div className="mt-7 divide-y divide-slate-200 rounded-2xl bg-white px-6 shadow-sm ring-1 ring-slate-200">{faqs.map(([question, answer]) => <details className="py-5" key={question}><summary className="cursor-pointer text-lg font-black">{question}</summary><p className="mt-3 font-semibold leading-7 text-slate-600">{answer}</p></details>)}</div></section>
        </main>
        <footer className="bg-slate-950 px-5 py-10 text-center text-sm font-semibold leading-7 text-white/60"><strong className="text-lg text-white">겜스고 할인 쿠폰 가이드</strong><p className="mx-auto mt-3 max-w-2xl">본 페이지에는 겜스고 제휴 링크가 포함되어 있습니다. 서비스·할인·이용 조건은 공식 결제 화면을 기준으로 확인하세요.</p></footer>
      </div>
    </>
  );
}
