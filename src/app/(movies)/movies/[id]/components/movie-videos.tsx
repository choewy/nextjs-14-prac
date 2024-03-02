import { MoviesService } from '@services';

import { MoviePageProps } from '../types';

export default async function MovideVideos({ params }: MoviePageProps) {
  const moviesService = new MoviesService();
  const videos = await moviesService.getVideos(params.id, { lazySeconds: 1 });

  return (
    <div>
      <h3>Videos</h3>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.name}</li>
        ))}
      </ul>
    </div>
  );
}
