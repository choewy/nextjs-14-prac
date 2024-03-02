import { PageParamsProps } from '@constants';

import { MoviePageParams } from '../types';

export default function MovieProvidersPage({
  params,
}: Readonly<PageParamsProps<MoviePageParams>>) {
  return (
    <div>
      <h1>Movie Providers</h1>
      <div>id : {params.id}</div>
    </div>
  );
}
