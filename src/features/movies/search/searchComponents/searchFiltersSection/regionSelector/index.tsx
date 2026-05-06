import { ErrorMessage } from '@/shared';

import { SEARCH_MOVIE_PARAMS } from '../../../searchContext';
import { useSearchMovieContext } from '../../../searchContext/useSearchMovieContext';

import { useRegionSelector } from './useRegionSelector';

import './style.css';

export const RegionSelector = () => {
  const { params, updateParam } = useSearchMovieContext();

  const { errorMessage, regions, isLoading, isError } = useRegionSelector();

  const isDisabled = isLoading || isError;

  return (
    <>
      <select
        aria-describedby='regionSelectorStatus'
        className='filter-select'
        disabled={isDisabled}
        value={params.region}
        onChange={(event) =>
          updateParam(SEARCH_MOVIE_PARAMS.region, event.target.value)
        }
      >
        {!!regions?.length &&
          regions.map((region) => (
            <option key={region.iso_3166_1} value={region.english_name}>
              {region.english_name}
            </option>
          ))}
      </select>

      <ErrorMessage errorMessage={errorMessage} />
    </>
  );
};
