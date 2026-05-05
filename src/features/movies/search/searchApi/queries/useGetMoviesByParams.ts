import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/api';

import { apiHandler } from '../apiHandler';
import type { SearchMoviesParams } from '../types';

export const useGetMoviesByParams = (params: SearchMoviesParams) => {
  return useQuery({
    queryKey: QUERY_KEYS.searchMovies(params),
    queryFn: () => apiHandler.movie.search(params),
  });
};
