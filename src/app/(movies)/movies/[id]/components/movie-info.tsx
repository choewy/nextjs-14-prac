import { MoviesService } from '@services';

import { MoviePageProps } from '../types';

export default async function MovieInfo({ params }: MoviePageProps) {
  const moviesService = new MoviesService();
  const movie = await moviesService
    .getMovie(params.id, { lazySeconds: 1 })
    .finally(() => {
      throw new Error('Not Found Error');
    });

  return (
    <div>
      <h1>{movie.title}</h1>
      <div>id : {params.id}</div>
    </div>
  );
}
