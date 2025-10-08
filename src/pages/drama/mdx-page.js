import Welcome from '@/pages/drama/genie-final.mdx';
import { useMDXComponents } from '@/components/mdx-components';
import { MDXProvider } from '@mdx-js/react';
 
export default function Page() {
  const components = useMDXComponents({}); // 함수를 호출하여 컴포넌트 객체를 얻음
  return (
    <MDXProvider components={components}>
      <Welcome />
    </MDXProvider>
  );
}