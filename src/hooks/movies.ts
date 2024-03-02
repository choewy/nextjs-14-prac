import { useEffect } from 'react';

import { fetchMovies } from '@services';
import { MovieModel, SetState } from '@types';

export const useFetchMovies = (
  setMovies: SetState<MovieModel[]>,
  setIsLoading: SetState<boolean>,
) => {
  useEffect(() => {
    fetchMovies().then((movies) => {
      setMovies(movies);
      setIsLoading(false);
    });
  }, []);
};
