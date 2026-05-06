import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/api';

import { apiHandler } from '../apiHandler';

export const useGeMovieCountries = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.movieCountries],
    queryFn: () => apiHandler.movie.countries(),
  });
};
