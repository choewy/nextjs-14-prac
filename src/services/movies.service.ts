import { MovieModel } from '@types';
import { Fetch } from '@utils';

export class MoviesService {
  private readonly fetch = new Fetch(
    'https://nomad-movies.nomadcoders.workers.dev/movies',
  );

  async getMovies(lazySeconds = 0): Promise<MovieModel[]> {
    return this.fetch.get({ lazySeconds });
  }
}
