import { useContext } from 'react';

import { SearchMovieContext } from './context';

export const useSearchMovieContext = () => {
  const context = useContext(SearchMovieContext);

  if (!context) {
    throw new Error(
      'useSearchMovieContext must be used within SearchMovieProvider',
    );
  }

  return context;
};
