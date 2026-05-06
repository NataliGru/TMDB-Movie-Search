// Centralized React Query keys to avoid duplication

import type { SearchMoviesParams } from '@/features';

export const QUERY_KEYS = {
  movies: 'movies',
  search: 'search',
  searchMovies: (params: SearchMoviesParams) =>
    [...QUERY_KEYS.movies, 'search', params] as const,
  movieLanguages: 'movieLanguages',
  moviePrimaryTranslations: 'moviePrimaryTranslations',
  movieGenres: 'movieGenres',
  movieCountries: 'movieCountries',
} as const;
