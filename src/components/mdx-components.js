export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: "red", fontSize: "30px" }}>{children}</h1>
    ),
    // h2: 섹션 소제목 스타일 (이미지의 '스타덤 앱 다운로드' 같은 구분선)
    h2: ({ children }) => (
      // border-b: 하단 선, border-orange-500: 주황색 선, pb-2: 선 아래 여백
      <h2 className="text-2xl !font-bold text-gray-800 mt-12 mb-6 border-b-4 border-orange-500 pb-2">
        {children}
      </h2>
    ),

    // p: 문단 스타일 (줄 간격, 폰트 색상)
    p: ({ children }) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),

    // ul: 목록 스타일 (점 모양을 기본으로 유지하되 여백 조정)f@next/mdx

    ul: (props) => (
      // !pl-6: 왼쪽 여백, !my-4: 상하 여백
      <ul className="list-disc pl-6 my-4" {...props} />
    ),

    // img: 이미지 스타일 (중앙 정렬, Next/Image 사용)
    img: (props) => (
      // 이미지처럼 이미지를 깔끔하게 중앙에 배치
      <div className="my-6 flex justify-center w-full">
        <Image
          sizes="100vw"
          className="max-w-full h-auto"
          {...props}
          width={props.width || 800}
          height={props.height || 450}
        />
      </div>
    ),

    ...components,
  };
}
