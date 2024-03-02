export enum PageStaticPath {
  Home = '/',
  About = '/about',
  Sales = '/about/sales',
  Movies = '/movies',
}

export enum PageDynamicPath {
  Movie = '/movies/:id',
  MovieCredits = '/movies/:id/credits',
  MovieVideos = '/movies/:id/videos',
  MovieProviders = '/movies/:id/providers',
  MovieSimilar = '/movies/:id/similar',
}
