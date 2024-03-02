export type MovieDetailsPageProps = Readonly<{
  params: { id: number };
  searchParams: {};
}>;

export default function MovieDetailsPage({ params }: MovieDetailsPageProps) {
  console.log(params.id);

  return (
    <div>
      <h1>Movie Details</h1>
      <div>id : {params.id}</div>
    </div>
  );
}
