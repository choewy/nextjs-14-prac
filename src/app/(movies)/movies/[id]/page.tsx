import { Suspense } from 'react';

import { MovieInfo, MovieVideos } from './components';
import { MoviePageProps } from './types';

export default async function MoviePage(props: MoviePageProps) {
  return (
    <div>
      <Suspense fallback={<h2>Loading Movie info</h2>}>
        <MovieInfo {...props} />
      </Suspense>
      <Suspense fallback={<h2>Loading Movie Videos</h2>}>
        <MovieVideos {...props} />
      </Suspense>
    </div>
  );
}
