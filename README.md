# NextJS 14 Practice

NextJS 14를 실행하기 위해서는 Node.js 버전이 18.17.0 이상이어야 함.

> You are using Node.js 18.16.0. For Next.js, Node.js version >= v18.17.0 is required.

## Setup(manually)

- 의존성 설치

```bash
npm init -y
npm i react@latest next@latest react-dom@latest
```

- make `app/`

```bash
mkdir app
```

- `app/page.tsx` 생성 후 아래와 같은 코드 작성

```tsx
export default function App() {
  return <h1>NextJS App</h1>;
}
```

- package.json의 scripts 추가 후 실행

```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

```bash
npm run dev
```

> 앱을 실행하면 NextJS에서 알아서 TypeScript 설정 및 `/app/layout.tsx` 파일 생성

## Routing

- `app/page.tsx` : root page
- `{path}/page.tsx` : child page
- `{path}/[:params]/page.tsx` : child page(with. path params)

### 예시

- `/about/page.tsx`
  - http://localhost:3000/about -> 200
- `/about/teams/sales/page.tsx`
  - http://localhost:3000/teams -> 404
  - http://localhost:3000/teams/sales -> 200
- `/about/teams/components/avatar.tsx`
  - http://localhost:3000/components -> 404

### Not Found Page

- `/app/not-found.tsx` : 커스텀 404 page

## CSR vs SSR

> `usePathname` 훅 사용 시 컴포넌트 상단에 입력하는 `"use client"`는 CSR과는 아무런 상관 없음
> 웹 브라우저에서 JS 비활성화 해놓고 웹 소스코드를 보면 이미 렌더링 되어있는 것을 볼 수 있음
> 정리하자면, NextJS의 모든 컴포넌트는 우선적으로 SSR임

## Hydration

`/navigation` --> Button(0, dehydrated) --> client --> init(Button, for interactive with React, hydrated)

### 예시

- 웹 브라우저에서 JS 비활성화 시(또는, 클라이언트가 JS를 받지 못한 경우) Navigator는 순수 `<a>` 태그로 동작함(새로고침 됨)
- 웹 브라우저에서 JS 활성화 시(또는, 클라이언트가 JS를 받은 경우) Navigator는 React가 통제하고 있는 `<a>` 태그로 동작함(새로고침 안 됨)
