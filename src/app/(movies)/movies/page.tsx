import { Metadata } from 'next';

import { fetchMovies } from '@services';

export const metadata: Metadata = {
  title: 'Movies',
};

export default async function MoviesPage() {
  const movies = await fetchMovies();

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{JSON.stringify(movies, null, 2)}</div>
    </div>
  );
}
