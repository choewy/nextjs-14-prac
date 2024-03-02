import { PageParamsProps } from '@constants';

import { MoviePageParams } from './types';

export default function MoviePage({
  params,
}: Readonly<PageParamsProps<MoviePageParams>>) {
  return (
    <div>
      <h1>Movie </h1>
      <div>id : {params.id}</div>
    </div>
  );
}
