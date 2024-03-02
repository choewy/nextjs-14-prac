import { Metadata } from 'next';
import Link from 'next/link';

import { MoviesService } from '@services';
import { PageStaticPath } from '@constants';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const moviesService = new MoviesService();
  const movies = await moviesService.getMovies({ lazySeconds: 1 });

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`${PageStaticPath.Movies}/${movie.id}`}>
            [{movie.id}] {movie.title}
          </Link>
        </li>
      ))}
    </div>
  );
}
