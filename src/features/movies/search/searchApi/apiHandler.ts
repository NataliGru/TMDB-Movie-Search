import { getData } from '@/api/crudHandlers';

import { apiPath } from './apiPath';
import type {
  LanguageApi,
  MoviesSearchResponseApi,
  SearchMoviesParams,
} from './types';

export const apiHandler = {
  movie: {
    search: ({ query }: SearchMoviesParams) => {
      return getData<MoviesSearchResponseApi>(apiPath.movie.search(), {
        params: {
          query,
        },
      });
    },

    languages: () => getData<LanguageApi[]>(apiPath.movie.languages()),

    primaryTranslation: () =>
      getData<string[]>(apiPath.movie.primaryTranslation()),
  },
};
