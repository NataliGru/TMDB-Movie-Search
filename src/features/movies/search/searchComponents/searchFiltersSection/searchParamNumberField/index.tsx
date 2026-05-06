import { useEffect, useState } from 'react';

import {
  type SearchMoviesParams,
  useSearchMovieContext,
} from '../../../searchContext';
import { FilterField } from '../filterField';

type NumberSearchParamKey = 'primary_release_year' | 'year' | 'page';

type SearchParamNumberFieldProps = {
  id: string;
  label: string;
  max: string;
  min: string;
  paramKey: NumberSearchParamKey;
  placeholder: string;
  shouldResetOnParamChange?: boolean;
  onSendRequest?: () => void;
};

export const SearchParamNumberField = ({
  id,
  label,
  max,
  min,
  paramKey,
  placeholder,
  shouldResetOnParamChange,
  onSendRequest,
}: SearchParamNumberFieldProps) => {
  const { params, updateParam } = useSearchMovieContext();

  const [inputValue, setInputValue] = useState(params[paramKey] ?? '');

  const handleNumberInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value);
  };

  const commitValue = () => {
    if (inputValue === '') {
      if (params[paramKey] !== '') {
        onSendRequest?.();
      }

      updateParam(paramKey, '' as SearchMoviesParams[typeof paramKey]);
      return;
    }

    const numericValue = Number(inputValue);
    const minValue = Number(min);
    const maxValue = Number(max);

    if (Number.isNaN(numericValue)) {
      setInputValue(params[paramKey] ?? '');
      return;
    }

    const clampedValue = Math.min(Math.max(numericValue, minValue), maxValue);

    const nextValue = String(clampedValue);

    setInputValue(nextValue);

    if (params[paramKey] !== nextValue) {
      onSendRequest?.();
    }

    updateParam(paramKey, nextValue as SearchMoviesParams[typeof paramKey]);
  };

  const handleNumberInputBlur = () => {
    commitValue();
  };

  const handleNumberInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
    }
  };

  useEffect(() => {
    if (!shouldResetOnParamChange) return;

    if (inputValue === params[paramKey]) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInputValue(params[paramKey]);
    // eslint-disable-next-line
  }, [shouldResetOnParamChange, params, paramKey]);

  return (
    <FilterField label={label}>
      <input
        type='number'
        className='filter-input'
        placeholder={placeholder}
        id={id}
        min={min}
        max={max}
        value={inputValue}
        onChange={handleNumberInputChange}
        onBlur={handleNumberInputBlur}
        onKeyDown={handleNumberInputKeyDown}
      />
    </FilterField>
  );
};
