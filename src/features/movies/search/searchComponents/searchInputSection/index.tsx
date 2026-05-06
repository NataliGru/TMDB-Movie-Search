import { useCallback, useRef, useState } from 'react';

import { useClickOutside } from '@/hooks';

import { SearchAutocomplete } from './searchAutocomplete';
import { MovieSearchInput } from './searchInput';

import './style.css';

export const SearchInputSection = () => {
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpenAutocomplete = () => setIsAutocompleteOpen(true);

  const handleCloseAutocomplete = useCallback(() => {
    setIsAutocompleteOpen(false);
  }, []);

  useClickOutside({
    ref: containerRef,
    enabled: isAutocompleteOpen,
    onClickOutside: handleCloseAutocomplete,
  });

  return (
    <div className='search-container' ref={containerRef}>
      <MovieSearchInput
        onChange={handleOpenAutocomplete}
        onFocus={handleOpenAutocomplete}
      />

      {isAutocompleteOpen && <SearchAutocomplete />}
    </div>
  );
};
