import { useState } from 'react';

import { useDebouncedValue } from '@/hooks';

import './style.css';

export const MovieSearchInput = () => {
  const [query, setQuery] = useState('');

  // const debouncedQuery = useDebouncedValue(query, 500);
  useDebouncedValue(query, 500);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => setQuery(e.target.value);

  return (
    <div>
      <input
        type='text'
        className='search-input'
        value={query}
        onChange={handleInputChange}
        placeholder='Search for movies...'
      />
    </div>
  );
};
