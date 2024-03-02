import { Metadata } from 'next';

import { MoviesService } from '@services';

export const metadata: Metadata = {
  title: 'Movies',
};

const moviesService = new MoviesService();

export default async function MoviesPage() {
  const movies = await moviesService.getMovies();

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{JSON.stringify(movies, null, 2)}</div>
    </div>
  );
}
