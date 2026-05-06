import { getApiErrorMessage } from '@/shared';

import { useGeMovieCountries } from '../../../searchApi';

export const useRegionSelector = () => {
  const { isError, isLoading, data, error } = useGeMovieCountries();

  const errorMessage = isError
    ? getApiErrorMessage(error, 'Unable to load region options.')
    : null;

  return {
    error,
    errorMessage,
    isError,
    isLoading,
    regions: data,
  };
};
