import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/api';

import { apiHandler } from '../apiHandler';

export const useGeMovieGenres = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.movieGenres],
    queryFn: () => apiHandler.movie.genres(),
  });
};
