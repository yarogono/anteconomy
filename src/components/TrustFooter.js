export default function TrustFooter() {
  return (
    <footer className="border-t border-green-200 bg-white px-4 py-8 text-sm text-gray-600">
      <div className="mx-auto max-w-6xl space-y-3">
        <p className="font-semibold text-gray-800">안트이코노미</p>
        <p>
          계산 결과는 입력값과 공개된 산정 기준에 따른 참고용 결과입니다. 세금,
          고용, 대출, 투자 상품의 실제 적용 기준은 변경될 수 있으므로 신청 전
          공식 기관과 금융기관의 최신 안내를 확인하세요.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-2">
          <a href="https://www.nts.go.kr" target="_blank" rel="noreferrer" className="underline">국세청</a>
          <a href="https://www.moel.go.kr" target="_blank" rel="noreferrer" className="underline">고용노동부</a>
          <a href="https://www.fss.or.kr" target="_blank" rel="noreferrer" className="underline">금융감독원</a>
          <a href="/sitemap.xml" className="underline">사이트맵</a>
          <a href="/rss.xml" className="underline">RSS</a>
        </p>
        <p>© {new Date().getFullYear()} 안트이코노미. All rights reserved.</p>
      </div>
    </footer>
  );
}
