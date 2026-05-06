import { getBooleanUrlParam, getUrlParam } from '@/shared';

import { SEARCH_MOVIE_PARAMS } from './constants';
import type { SearchMoviesParams } from './types';

export const getMovieParamsFromUrl = (): SearchMoviesParams => {
  return {
    query: getUrlParam(SEARCH_MOVIE_PARAMS.query),
    include_adult: getBooleanUrlParam(SEARCH_MOVIE_PARAMS.includeAdult, false),
    language: getUrlParam(SEARCH_MOVIE_PARAMS.language, ''),
    primary_release_year: getUrlParam(SEARCH_MOVIE_PARAMS.primaryReleaseYear),
    region: getUrlParam(SEARCH_MOVIE_PARAMS.region),
    year: getUrlParam(SEARCH_MOVIE_PARAMS.year),
    page: getUrlParam(SEARCH_MOVIE_PARAMS.page),
  };
};

export const updateMovieUrlParams = (params: SearchMoviesParams) => {
  const searchParams = new URLSearchParams();
  const hasQuery = params.query.trim();

  Object.entries(params).forEach(([key, value]) => {
    if (key === SEARCH_MOVIE_PARAMS.page && !hasQuery) {
      return;
    }

    if (value === '' || value === null || value === undefined) {
      return;
    }

    searchParams.set(key, String(value));
  });

  const queryString = searchParams.toString();

  window.history.replaceState(
    null,
    '',
    queryString ? `?${queryString}` : window.location.pathname,
  );
};
