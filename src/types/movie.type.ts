export type MovieModel = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieGenreModel = {
  id: number;
  name: string;
};

export type MovieProductionCompanyModel = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type MovieProductionCountryModel = {
  name: string;
  iso_3166_1: string;
};

export type MovieSpokenLanguageModel = {
  name: string;
  english_name: string;
  iso_639_1: string;
};

export type MovieStatus = 'Released';

export type MovieDetailModel = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  genres: MovieGenreModel[];
  original_language: string;
  original_title: string;
  overview: string;
  budget: number;
  homepage: string;
  imdb_id: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieProductionCompanyModel[];
  production_countries: MovieProductionCountryModel[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: MovieSpokenLanguageModel[];
  status: MovieStatus;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieVideoModel = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: 'YouTube';
  size: string;
  type: 'Clip';
  official: boolean;
  published_at: string;
};
