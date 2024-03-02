export default function MoviesPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>Movies Page</h1>
      {children}
    </div>
  );
}
