import { createContext } from 'react';

import type { MovieApi } from '../searchApi';

import type { Genre, SearchMoviesParams } from './types';

export type SearchMovieContextValue = {
  params: SearchMoviesParams;
  updateParam: <K extends keyof SearchMoviesParams>(
    key: K,
    value: SearchMoviesParams[K],
  ) => void;

  movies: MovieApi[];
  clearMovies: () => void;
  totalPages: number;
  totalMovies: number;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
  isDebouncing: boolean;

  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;

  movieGenres: Genre[];
  isMovieGenresError: boolean;
  movieGenresError: Error | null;

  selectedMovie: MovieApi | null;
  handleSelectMovie: (movie: MovieApi) => void;
  handleRemoveSelectedMovie: () => void;
};

export const SearchMovieContext = createContext<SearchMovieContextValue | null>(
  null,
);
