import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/api';

import { apiHandler } from '../apiHandler';

export const useGeMoviePrimaryTranslation = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.moviePrimaryTranslations],
    queryFn: () => apiHandler.movie.primaryTranslation(),
  });
};
