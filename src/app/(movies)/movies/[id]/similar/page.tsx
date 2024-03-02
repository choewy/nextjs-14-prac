import { PageParamsProps } from '@constants';

import { MoviePageParams } from '../types';

export default function MovieSimilarPage({
  params,
}: Readonly<PageParamsProps<MoviePageParams>>) {
  return (
    <div>
      <h1>Movie Similar</h1>
      <div>id : {params.id}</div>
    </div>
  );
}
