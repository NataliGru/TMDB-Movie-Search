import { createContext } from 'react';

interface SearchMovieContextProps {
  query: string;
}

export const SearchMovieContext = createContext<SearchMovieContextProps>({
  query: '',
});
