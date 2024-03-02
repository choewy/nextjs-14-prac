import { PageParamsProps } from '@constants';

import { MoviePageParams } from '../types';

export default function MovieCreditsPage({
  params,
}: Readonly<PageParamsProps<MoviePageParams>>) {
  return (
    <div>
      <h1>Movie Credits</h1>
      <div>id : {params.id}</div>
    </div>
  );
}
