import QueryString from 'querystring';

export type FetchOptions<D = any> = {
  path?: string | number | boolean;
  body?: D;
  params?: Record<string, string | string[]>;
  lazySeconds?: number;
};

export class Fetch {
  constructor(readonly baseUrl: string) {}

  private createUrlWithPath(
    path: string,
    params?: Pick<FetchOptions, 'params'>['params'],
  ): string {
    let url = this.baseUrl;

    if (path) {
      url += path.startsWith('/') ? path : `/${path}`;
    }

    if (params) {
      url += `?${QueryString.stringify(params)}`;
    }

    return url;
  }

  private getLazySeconds(lazySeconds?: number): number {
    if (lazySeconds == null) {
      return 0;
    } else {
      return lazySeconds * 1000;
    }
  }

  private fetch<R>(
    method: 'get' | 'post' | 'patch' | 'put' | 'delete' | 'head' | 'options',
    opt?: FetchOptions,
  ): Promise<R> {
    return new Promise(async (resolve) => {
      const url = this.createUrlWithPath(String(opt?.path ?? ''), opt?.params);

      console.log(url);

      setTimeout(() => {
        fetch(url, {
          method,
          body: opt?.body,
        })
          .then((res) => res.json())
          .then(resolve);
      }, this.getLazySeconds(opt?.lazySeconds));
    });
  }

  async get<R, D = any>(opt?: FetchOptions<D>): Promise<R> {
    return this.fetch<R>('get', opt);
  }

  async post<R, D = any>(opt?: FetchOptions<D>): Promise<R> {
    return this.fetch<R>('post', opt);
  }

  async patch<R, D = any>(opt?: FetchOptions<D>): Promise<R> {
    return this.fetch<R>('patch', opt);
  }

  async put<R, D = any>(opt?: FetchOptions<D>): Promise<R> {
    return this.fetch<R>('put', opt);
  }

  async delete<R, D = any>(opt?: FetchOptions<D>): Promise<R> {
    return this.fetch<R>('delete', opt);
  }
}
