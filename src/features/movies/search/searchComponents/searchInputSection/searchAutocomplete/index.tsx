import { useRef } from 'react';

import { useInfiniteScroll } from '@/hooks';
import { ErrorMessage, getApiErrorMessage, getGenreNameFromId } from '@/shared';

import { useSearchMovieContext } from '../../../searchContext';
import { SearchAutocompleteEmptyStatus } from '../searchAutocompleteEmptyStatus';
import { ShortMovieCard } from '../shortMovieCard';

import './style.css';

export const SearchAutocomplete = () => {
  const {
    movies,
    movieGenres,
    params,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    isError,
    error,
    handleSelectMovie,
  } = useSearchMovieContext();

  const errorMessage = isError
    ? getApiErrorMessage(error, 'Unable to load region options.')
    : null;

  const dropdownRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    rootRef: dropdownRef,
    targetRef: loadMoreRef,
    enabled: hasNextPage,
    isLoading: isFetchingNextPage,
    onLoadMore: fetchNextPage,
    rootMargin: '80px',
  });

  if (!params.query.trim()) return;

  if (!movies.length && isSuccess) return <SearchAutocompleteEmptyStatus />;

  return (
    <div className='autocomplete-dropdown' ref={dropdownRef}>
      {isLoading && <div className='autocomplete-loader'>Loading...</div>}

      {movies.map((movie) => (
        <ShortMovieCard
          key={`${movie.title}-${movie.original_title}-${movie.release_date}`}
          title={movie.title}
          posterUrl={movie.poster_path}
          date={movie.release_date}
          genres={movie.genre_ids.map((genreId) =>
            getGenreNameFromId(genreId, movieGenres),
          )}
          onClick={() => handleSelectMovie(movie)}
        />
      ))}

      {hasNextPage && (
        <div className='autocomplete-loader' ref={loadMoreRef}>
          {isFetchingNextPage && 'Loading...'}
        </div>
      )}

      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};
