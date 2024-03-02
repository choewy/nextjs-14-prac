import { MoviesService } from '@services';

import styles from '../../../../../styles/movie-videos.module.css';

import { MoviePageProps } from '../types';

export default async function MovideVideos({ params }: MoviePageProps) {
  const moviesService = new MoviesService();
  const videos = await moviesService.getVideos(params.id, { lazySeconds: 1 });

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
