import { type ReactNode, useEffect, useMemo, useState } from 'react';

import { useDebouncedValue } from '@/hooks';

import { useGetMoviesByParamsInfinite } from '../searchApi';
import { useGeMovieGenres } from '../searchApi/queries/useGetGenres';

import { FIRST_SEARCH_MOVIE_PAGE, SEARCH_MOVIE_PARAMS } from './constants';
import { SearchMovieContext } from './context';
import type { SearchMoviesParams } from './types';
import { getMovieParamsFromUrl, updateMovieUrlParams } from './utils';

type SearchMovieProviderProps = {
  children: ReactNode;
};

export const SearchMovieProvider = ({ children }: SearchMovieProviderProps) => {
  const [params, setParams] = useState<SearchMoviesParams>(
    getMovieParamsFromUrl,
  );
  const [shouldClearMovies, setShouldClearMovies] = useState(false);

  const { debouncedValue: debouncedParams, isDebouncing } = useDebouncedValue(
    params,
    500,
  );

  const updateParam = <K extends keyof SearchMoviesParams>(
    key: K,
    value: SearchMoviesParams[K],
  ) => {
    setParams((prev) => {
      const nextParams = {
        ...prev,
        [key]: value,
      };

      const shouldResetPage = key !== SEARCH_MOVIE_PARAMS.page;

      if (!shouldResetPage) {
        return nextParams;
      }

      return {
        ...nextParams,
        page: nextParams.query.trim() ? FIRST_SEARCH_MOVIE_PAGE : '',
      };
    });
  };

  const clearMovies = () => {
    setShouldClearMovies(true);
  };

  useEffect(() => {
    updateMovieUrlParams(debouncedParams);
  }, [debouncedParams]);

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetMoviesByParamsInfinite(debouncedParams);

  const {
    data: movieGenres,
    isError: isMovieGenresError,
    error: movieGenresError,
  } = useGeMovieGenres();

  useEffect(() => {
    if (!shouldClearMovies) {
      return;
    }

    const firstLoadedPage = data?.pages[0]?.page;
    const requestedPage = Number(debouncedParams.page) || 1;

    if (firstLoadedPage === requestedPage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldClearMovies(false);
    }
  }, [data?.pages, debouncedParams.page, shouldClearMovies]);

  useEffect(() => {
    const lastLoadedPage = data?.pages[data.pages.length - 1]?.page;

    if (!lastLoadedPage) {
      return;
    }

    updateMovieUrlParams({
      ...debouncedParams,
      page: String(lastLoadedPage),
    });
  }, [data?.pages, debouncedParams]);

  const movies = useMemo(() => {
    if (shouldClearMovies) {
      return [];
    }

    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data, shouldClearMovies]);

  const totalPages = useMemo(() => {
    return data?.pages?.[0]?.total_pages || 0;
  }, [data]);

  const totalMovies = useMemo(() => {
    return data?.pages?.[0]?.total_results || 0;
  }, [data]);

  return (
    <SearchMovieContext.Provider
      value={{
        params,
        updateParam,
        isDebouncing,

        movies,
        clearMovies,
        totalPages,
        totalMovies,
        isLoading,
        isError,
        isSuccess,
        error,

        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,

        movieGenres: movieGenres?.genres ?? [],
        isMovieGenresError,
        movieGenresError,
      }}
    >
      {children}
    </SearchMovieContext.Provider>
  );
};
