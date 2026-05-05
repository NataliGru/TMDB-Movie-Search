import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/api';

import { apiHandler } from '../apiHandler';

export const useGeMovieLanguages = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.movieLanguages],
    queryFn: () => apiHandler.movie.languages(),
  });
};
