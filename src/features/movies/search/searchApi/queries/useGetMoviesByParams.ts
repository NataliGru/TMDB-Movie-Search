import { useInfiniteQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/api';

import { apiHandler } from '../apiHandler';
import type { SearchMoviesParamsApi } from '../types';

export const useGetMoviesByParamsInfinite = (params: SearchMoviesParamsApi) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.searchMovies(params),
    queryFn: ({ pageParam }) =>
      apiHandler.movie.search({
        ...params,
        page: String(pageParam),
      }),
    initialPageParam: Number(params.page) || 1,
    enabled: Boolean(params.query.trim()),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;

      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
  });
};
