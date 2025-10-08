

export function useMDXComponents(components) {
  return {
    h1: ({ children }) => (
      <h1 style={{ color: 'red', fontSize: '100px' }}>{children}</h1>
    ),
    // 🚨 이전에 img를 재정의했던 코드가 남아있다면 삭제해야 합니다.
    // img: (props) => ( ... ), 
    ...components,
  }
}