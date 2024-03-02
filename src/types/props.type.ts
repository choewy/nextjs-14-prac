import { Dispatch, SetStateAction } from 'react';

export type PageParamsProps<
  Params extends Record<string, string> = {},
  SearchParams extends Record<string, string | string[]> = {},
> = Readonly<{
  params: Params;
  searchParams: SearchParams;
}>;

export type SetState<T> = Dispatch<SetStateAction<T>>;
