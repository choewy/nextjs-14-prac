import { MoviesService } from '@services';

import { MoviePageProps } from '../types';

import styles from '../../../../../styles/movie-info.module.css';

export default async function MovieInfo({ params }: MoviePageProps) {
  const moviesService = new MoviesService();
  const movie = await moviesService.getMovie(params.id, { lazySeconds: 1 });

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed()}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
