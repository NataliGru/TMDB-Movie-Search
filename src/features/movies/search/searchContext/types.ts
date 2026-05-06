import type { SEARCH_MOVIE_PARAMS } from './constants';

export type SearchMovieParamKey =
  (typeof SEARCH_MOVIE_PARAMS)[keyof typeof SEARCH_MOVIE_PARAMS];

export type SearchMoviesParams = {
  query: string;
  include_adult?: boolean;
  language?: string;
  primary_release_year?: string;
  region?: string;
  year?: string;
  page: string;
};

export interface Genre {
  id: number;
  name: string;
}
