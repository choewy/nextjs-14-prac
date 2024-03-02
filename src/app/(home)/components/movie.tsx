'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MovieModel } from '@types';

import styles from '../../../styles/movie.module.css';

export default function Movie({ movie }: Readonly<{ movie: MovieModel }>) {
  const router = useRouter();

  return (
    <div className={styles.movie}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        onClick={() => router.push(`/movies/${movie.id}`)}
      />
      <Link prefetch href={`/movies/${movie.id}`}>
        {movie.title}
      </Link>
    </div>
  );
}
