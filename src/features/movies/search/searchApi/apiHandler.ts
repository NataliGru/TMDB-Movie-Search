import { getData } from '@/api/crudHandlers';

import { apiPath } from './apiPath';
import type {
  CountriesApi,
  GenreApi,
  LanguageApi,
  MoviesSearchResponseApi,
  SearchMoviesParamsApi,
} from './types';

export const apiHandler = {
  movie: {
    search: (params: SearchMoviesParamsApi) => {
      return getData<MoviesSearchResponseApi>(apiPath.movie.search(), {
        params,
      });
    },

    languages: () => getData<LanguageApi[]>(apiPath.movie.languages()),

    primaryTranslation: () =>
      getData<string[]>(apiPath.movie.primaryTranslation()),

    genres: () => getData<{ genres: GenreApi[] }>(apiPath.movie.genres()),
    countries: () => getData<CountriesApi[]>(apiPath.movie.countries()),
  },
};
