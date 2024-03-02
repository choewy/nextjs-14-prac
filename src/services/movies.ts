import { MovieModel } from '@constants';

const baseUrl = 'https://nomad-movies.nomadcoders.workers.dev';

export const fetchMovies = async (): Promise<MovieModel[]> =>
  fetch([baseUrl, 'movies'].join('/')).then((res) => res.json());
