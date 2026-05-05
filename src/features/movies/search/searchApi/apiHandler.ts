import { getData } from '@/api/crudHandlers';

import { apiPath } from './apiPath';
import type { MoviesSearchResponseApi, SearchMoviesParams } from './types';

export const apiHandler = {
  movie: {
    search: ({ query }: SearchMoviesParams) => {
      return getData<MoviesSearchResponseApi>(apiPath.movie.search(), {
        params: {
          query,
        },
      });
    },
  },
};
