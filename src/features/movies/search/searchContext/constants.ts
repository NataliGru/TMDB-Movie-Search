import type { SearchMoviesParams } from './types';

export const SEARCH_MOVIE_PARAMS = {
  query: 'query',
  includeAdult: 'include_adult',
  language: 'language',
  primaryReleaseYear: 'primary_release_year',
  region: 'region',
  year: 'year',
  page: 'page',
} as const;

export const FIRST_SEARCH_MOVIE_PAGE = '1';

export const DEFAULT_SEARCH_MOVIE_PARAMS: SearchMoviesParams = {
  query: '',
  include_adult: false,
  language: '',
  primary_release_year: '',
  region: '',
  year: '',
  page: '',
};
