import { ErrorMessage } from '@/shared';

import { SEARCH_MOVIE_PARAMS } from '../../../searchContext';
import { useSearchMovieContext } from '../../../searchContext/useSearchMovieContext';

import { STATUS_OPTION_LABELS } from './constants';
import { LanguageSelectorStatus } from './types';
import { useLanguageSelector } from './useLanguageSelector';

import './style.css';

export const LanguageSelector = () => {
  const { params, updateParam } = useSearchMovieContext();

  const { errorMessage, languages, status, warningMessage } =
    useLanguageSelector();

  const isReady = status === LanguageSelectorStatus.ready;

  const isDisabled = !isReady;

  return (
    <>
      <select
        aria-describedby='languageSelectorStatus'
        className='filter-select'
        disabled={isDisabled}
        value={params.language}
        onChange={(event) =>
          updateParam(SEARCH_MOVIE_PARAMS.language, event.target.value)
        }
      >
        {!isReady && <option value=''>{STATUS_OPTION_LABELS[status]}</option>}

        {status === LanguageSelectorStatus.ready &&
          languages.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
      </select>

      <ErrorMessage errorMessage={errorMessage || warningMessage} />
    </>
  );
};
