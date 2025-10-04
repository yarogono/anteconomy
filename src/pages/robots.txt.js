// pages/robots.txt.js

function Robots() {
  // 이 함수는 실제 robots.txt 파일 내용만 반환하므로 빈 컴포넌트입니다.
  return null;
}

export async function getServerSideProps({ res }) {
  const robots = `User-agent: *
Allow: /

# 표준 권장 사항에 따라 프로토콜 없이 Host를 설정
Host: anteconomy.co.kr

Sitemap: https://anteconomy.co.kr/sitemap.xml

# 다음 웹 마스터 인증 코드 (가장 앞의 #만 제거)
DaumWebMasterTool:0135631b57b24f4f1df466bfe9abf1d86897d8e25d0289c3b4c759fb81c9c255:a52ifj9BuAwykHvnxiKKPA==
`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robots);
  res.end();

  return {
    props: {},
  };
}

export default Robots;
