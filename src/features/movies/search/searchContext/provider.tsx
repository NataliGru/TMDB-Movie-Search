import type { ReactNode } from 'react';

import { SearchMovieContext } from './context';

interface SearchMovieProviderProps {
  children: ReactNode;
}

export const SearchMovieProvider = ({ children }: SearchMovieProviderProps) => {
  return (
    <SearchMovieContext.Provider
      value={{
        query: '',
      }}
    >
      {children}
    </SearchMovieContext.Provider>
  );
};
