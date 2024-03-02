# NextJS 14 Practice

> You are using Node.js 18.16.0. For Next.js, Node.js version >= v18.17.0 is required.

## Setup(manually)

- install dependencies

```bash
npm init -y
npm i react@latest next@latest react-dom@latest
```

- make `app/`

```bash
mkdir app
```

- create `app/page.tsx`

```tsx
export default function App() {
  return <h1>NextJS App</h1>;
}
```

- edit package.json scripts

```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

- run

```bash
npm run dev
```
