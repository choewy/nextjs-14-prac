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

`/navigation` --> Button(0, SSR pre render, dehydrated) --> client --> init(Button, for interactive with React, hydrated)

### 예시

- 웹 브라우저에서 JS 비활성화 시(또는, 클라이언트가 JS를 받지 못한 경우) Navigator는 순수 `<a>` 태그로 동작함(새로고침 됨)
- 웹 브라우저에서 JS 활성화 시(또는, 클라이언트가 JS를 받은 경우) Navigator는 React가 통제하고 있는 `<a>` 태그로 동작함(새로고침 안 됨)
- hydration 과정은 맨 위에 `use client` 지시어가 입력된 component에만 동작한다.

- `/components/navigation.tsx`

```tsx
'use client';

import Link from 'next/link';

import { PageStaticPath } from '../constants';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const hereIcon = (path: PageStaticPath) => (pathname === path ? '👈' : '');

  const [count, setCount] = useState<number>(0);

  return (
    <nav>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <ul>
        <li>
          <Link href={PageStaticPath.Home}>
            Home {hereIcon(PageStaticPath.Home)}
          </Link>
        </li>
        <li>
          <Link href={PageStaticPath.About}>
            About {hereIcon(PageStaticPath.About)}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
```

> `use client` 지시어를 사용한다는 것은 서버에서 render 된 후 front에서 hydrate된다는 것을 의미한다(client에서만 render된다는 의미가 아님).
> 이는 클라이언트가 JS를 더 적게 다운로드받아도 된다는 의미가 된다. -> 페이지 로딩 속도 빨라짐
> 이번 버전에는 모든 component가 hydrate 되었음
> 반면, NextJS 14에서 `use client` 지시어가 없는 컴포넌트는 server component로, hydrate 되지 않음.

## Server Component, Client Component

- server component 안에 client component를 포함시킬 수 있는 반면, 그 반대는 안 됨.
- 쉽게 말해서 NextJS 14에서의 server component는 흰색 물감, client component는 검정색 물감으로 비유할 수 있음(추후 업데이트하면서 어떻게 바뀔지는 미지수임). 흰색 물감 위에 다른 색을 덫칠할 수 있지만, 검정색 물감 위에 다른 색을 덫칠할 수 없음.

## Layouts

- initialize Next.js --> render Layout --> check URL --> render Page

```tsx
<html>
  <body>
    <RootLayout>
      <Pages />
    </RootLayout>
  </body>
</html>
```

- 특정 페이지에만 해당하는 layout을 추가할 수 있음(예 : `/app/about/layout.tsx`)(대체가 아님)
- 페이지 단위의 layout은 하위 페이지까지 적용됨

```tsx
<html>
  <body>
    <RootLayout>
      <PageLayout>
        <Page />
      </PageLayout>
    </RootLayout>
  </body>
</html>
```

## Route Groups & Metadata

- route groups는 폴더명을 괄호로 묶어주어야 한다.
- 괄호로 묶어준 폴더는 라우팅에 영향을 받지 않는다.
- Metadata는 대체가 아니라 병합이다.
- Page마다 Metadata를 설정할 수 있고, Layout에서 페이지에 따른 metadata generation까지 가능하다.

## Dynamic Routes

- 동적 라우팅은 대괄호 안에 파라미터명을 적은 폴더 안에 page.tsx를 위치시키면 된다.
- 이때, 해당 페이지로 넘어오는 props는 path paramas인 `params`, query string params인 `searchParams` 가 넘어온다.
- 그리고, 이 props를 console로 찍어보면 웹 브라우저 콘솔이 아닌 서버 쪽 콘솔에 찍히는 것을 확인할 수 있다(SSR).

- `/app/(movies)/movies/[id]/page.tsx`

```tsx
export type MovieDetailsPageProps = Readonly<{
  params: { id: number };
  searchParams: {};
}>;

export default function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  return (
    <div>
      <h1>Movie Details</h1>
      <div>id : {params.id}</div>
    </div>
  );
}
```
