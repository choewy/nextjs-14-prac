import { PageParamsProps } from '@types';
import { MoviesService } from '@services';

import { MoviePageParams } from './types';

export default async function MoviePage({
  params,
}: Readonly<PageParamsProps<MoviePageParams>>) {
  const moviesService = new MoviesService();
  const [movie, videos] = await Promise.all([
    moviesService.getMovie(params.id, { lazySeconds: 1 }),
    moviesService.getVideos(params.id, { lazySeconds: 1 }),
  ]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <div>id : {params.id}</div>
      <div>
        <h3>Videos</h3>
        <ul>
          {videos.map((video) => (
            <li key={video.id}>{video.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
