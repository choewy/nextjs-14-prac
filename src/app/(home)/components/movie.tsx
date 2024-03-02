'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MovieModel } from '@types';
import { PageDynamicPath } from '@constants';

import styles from '../../../styles/movie.module.css';

export default function Movie({ movie }: Readonly<{ movie: MovieModel }>) {
  const path = PageDynamicPath.Movies.replace(':id', String(movie.id));
  const router = useRouter();

  return (
    <div className={styles.movie}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        onClick={() => router.push(path)}
      />
      <Link prefetch href={path}>
        {movie.title}
      </Link>
    </div>
  );
}
