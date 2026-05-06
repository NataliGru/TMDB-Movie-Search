import { useEffect, useState } from 'react';

import {
  SEARCH_MOVIE_PARAMS,
  useSearchMovieContext,
} from '../../../searchContext';

import './style.css';

type MovieSearchInputProps = {
  onFocus?: () => void;
  onChange?: () => void;
};

export const MovieSearchInput = ({
  onChange,
  onFocus,
}: MovieSearchInputProps) => {
  const { updateParam } = useSearchMovieContext();

  const [query, setQuery] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setQuery(e.target.value);
    onChange?.();
  };

  useEffect(() => {
    updateParam(SEARCH_MOVIE_PARAMS.query, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div>
      <input
        type='text'
        className='search-input'
        value={query}
        onChange={handleInputChange}
        onFocus={onFocus}
        placeholder='Search for movies...'
      />
    </div>
  );
};
