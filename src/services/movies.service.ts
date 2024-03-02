import { MovieDetailModel, MovieModel, MovieVideoModel } from '@types';
import { Fetch, FetchOptions } from '@utils';

export class MoviesService {
  private readonly fetch = new Fetch(
    'https://nomad-movies.nomadcoders.workers.dev/movies',
  );

  async getMovies(opt?: Pick<FetchOptions, 'lazySeconds'>) {
    return this.fetch.get<MovieModel[]>(opt);
  }

  async getMovie(id: string, opt?: Pick<FetchOptions, 'lazySeconds'>) {
    return this.fetch.get<MovieDetailModel>({ ...opt, path: id });
  }

  async getVideos(id: string, opt?: Pick<FetchOptions, 'lazySeconds'>) {
    return this.fetch.get<MovieVideoModel[]>({ ...opt, path: `${id}/videos` });
  }
}
