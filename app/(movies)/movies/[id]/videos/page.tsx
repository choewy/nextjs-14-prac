import { PageParamsProps } from '@constants';

import { MoviePageParams } from '../types';

export default function MovieVideosPage({
  params,
}: Readonly<PageParamsProps<MoviePageParams>>) {
  return (
    <div>
      <h1>Movie Videos</h1>
      <div>id : {params.id}</div>
    </div>
  );
}
