import { Metadata } from 'next';

import { MoviesService } from '@services';

import styles from '../../styles/home.module.css';
import Movie from './components/movie';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const moviesService = new MoviesService();
  const movies = await moviesService.getMovies({ lazySeconds: 1 });

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
