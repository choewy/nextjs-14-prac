export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>this is about page</h1>
      {children}
    </div>
  );
}
