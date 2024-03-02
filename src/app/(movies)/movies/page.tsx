'use client';

import { useState } from 'react';

import { MovieModel } from '@constants';
import { useFetchMovies } from '@hooks';

export default function MoviesPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MovieModel[]>([]);

  useFetchMovies(setMovies, setIsLoading);

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{isLoading ? 'Loading...' : JSON.stringify(movies, null, 2)}</div>
    </div>
  );
}
