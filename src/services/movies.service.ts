import { MovieModel } from '@types';
import { Fetch, FetchOptions } from '@utils';

export class MoviesService {
  private readonly fetch = new Fetch(
    'https://nomad-movies.nomadcoders.workers.dev/movies',
  );

  async getMovies(
    opt?: Pick<FetchOptions, 'lazySeconds'>,
  ): Promise<MovieModel[]> {
    return this.fetch.get(opt);
  }
}
