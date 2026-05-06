import {
  SEARCH_MOVIE_PARAMS,
  useSearchMovieContext,
} from '../../../searchContext';
import { FilterField } from '../filterField';

type SearchParamCheckboxFieldProps = {
  checkboxLabel: string;
  id: string;
  label: string;
};

export const SearchParamCheckboxField = ({
  checkboxLabel,
  id,
  label,
}: SearchParamCheckboxFieldProps) => {
  const { params, updateParam } = useSearchMovieContext();

  return (
    <FilterField label={label}>
      <div className='checkbox-field'>
        <input
          type='checkbox'
          id={id}
          checked={Boolean(params.include_adult)}
          onChange={(event) =>
            updateParam(
              SEARCH_MOVIE_PARAMS.includeAdult,
              event.target.checked || undefined,
            )
          }
        />
        <label htmlFor={id}>{checkboxLabel}</label>
      </div>
    </FilterField>
  );
};
