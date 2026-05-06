import {
  CircleLoader,
  ErrorMessage,
  getApiErrorMessage,
  ProgressLoader,
} from '@/shared';

import { useSearchMovieContext } from '../../../searchContext';
import { MoviesGrid } from '../moviesGrid';
import { MoviesGridSkeleton } from '../moviesGridSkeleton';
import { SearchQueryEmpty } from '../searchQueryEmpty';
import { SearchResultEmptyState } from '../searchResultEmptyState';
import { SearchResultHeader } from '../searchResultHeader';

export const SearchResults = () => {
  const {
    movies,
    params,
    totalMovies,
    isLoading,
    isSuccess,
    isDebouncing,
    isError,
    error,
  } = useSearchMovieContext();

  const errorMessage = isError
    ? getApiErrorMessage(error, 'Unable to load region options.')
    : null;

  return (
    <section className='results-section'>
      {isDebouncing && params.query.trim() && <ProgressLoader />}

      {isLoading && (
        <CircleLoader>
          <p>Searching for movies...</p>
        </CircleLoader>
      )}

      <SearchResultHeader
        moviesCount={totalMovies}
        isQueryExist={!!params.query}
      />

      {!params.query && <SearchQueryEmpty />}

      {isLoading ? <MoviesGridSkeleton /> : <MoviesGrid />}

      {isSuccess && !movies.length && <SearchResultEmptyState />}

      <ErrorMessage errorMessage={errorMessage} />
    </section>
  );
};
