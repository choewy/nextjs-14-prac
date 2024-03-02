import { Metadata } from 'next';

import { MoviesService } from '@services';

export const metadata: Metadata = {
  title: 'Movies',
};

const moviesService = new MoviesService();

export default async function MoviesPage() {
  const movies = await moviesService.getMovies({ lazySeconds: 3 });

  return <div>{JSON.stringify(movies, null, 2)}</div>;
}
