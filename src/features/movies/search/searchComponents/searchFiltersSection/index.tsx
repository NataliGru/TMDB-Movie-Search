import { useState } from 'react';
import classNames from 'classnames';

import {
  SEARCH_MOVIE_PARAMS,
  useSearchMovieContext,
} from '../../searchContext';

import { FilterField } from './filterField';
import { LanguageSelector } from './languageSelector';
import { RegionSelector } from './regionSelector';
import { SearchParamCheckboxField } from './searchParamCheckboxField';
import { SearchParamNumberField } from './searchParamNumberField';

import './style.css';

export const SearchFilterSection = () => {
  const { clearMovies, totalPages } = useSearchMovieContext();

  const [openFilters, setOpenFilters] = useState(false);

  const handleToggleFiltersMenu = () => setOpenFilters((prev) => !prev);

  return (
    <div className='advanced-filters'>
      <button className='filters-toggle' onClick={handleToggleFiltersMenu}>
        🔽 Advanced Search Options
      </button>

      <div className={classNames('filters-content', openFilters && 'open')}>
        <FilterField label='Language'>
          <LanguageSelector />
        </FilterField>

        <SearchParamNumberField
          id='primaryReleaseYear'
          label='Release Year'
          max='2030'
          min='1900'
          paramKey={SEARCH_MOVIE_PARAMS.primaryReleaseYear}
          placeholder='e.g. 2024'
        />

        <SearchParamNumberField
          id='yearFilter'
          label='Year'
          max='2030'
          min='1900'
          paramKey={SEARCH_MOVIE_PARAMS.year}
          placeholder='e.g. 2024'
        />

        <FilterField label='Region'>
          <RegionSelector />
        </FilterField>

        <SearchParamNumberField
          id='pageFilter'
          label='Page'
          max={`${totalPages}`}
          min='1'
          onSendRequest={clearMovies}
          paramKey={SEARCH_MOVIE_PARAMS.page}
          placeholder='1'
          shouldResetOnParamChange
        />

        <SearchParamCheckboxField
          checkboxLabel='Include Adult Content'
          id='includeAdult'
          label='Content Filter'
        />
      </div>
    </div>
  );
};
