import { ProgressLoader } from '@/shared';

import { useSearchMovieContext } from '../../../searchContext';
import { MoviesGrid } from '../moviesGrid';
import { MoviesGridSkeleton } from '../moviesGridSkeleton';
import { SearchQueryEmpty } from '../searchQueryEmpty';
import { SearchResultEmptyState } from '../searchResultEmptyState';
import { SearchResultHeader } from '../searchResultHeader';

export const SearchResults = () => {
  const { movies, params, totalMovies, isLoading, isSuccess } =
    useSearchMovieContext();

  return (
    <section className='results-section'>
      {isLoading && <ProgressLoader />}

      <SearchResultHeader
        moviesCount={totalMovies}
        isQueryExist={!!params.query}
      />

      {!params.query && <SearchQueryEmpty />}

      {isLoading ? <MoviesGridSkeleton /> : <MoviesGrid />}

      {isSuccess && !movies.length && <SearchResultEmptyState />}
    </section>
  );
};
