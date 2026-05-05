import { STATUS_OPTION_LABELS } from './constants';
import { LanguageSelectorStatus } from './types';
import { useLanguageSelector } from './useLanguageSelector';

import './style.css';

export const LanguageSelector = () => {
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
      >
        {!isReady && <option value=''>{STATUS_OPTION_LABELS[status]}</option>}

        {status === LanguageSelectorStatus.ready &&
          languages.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
      </select>

      {(errorMessage || warningMessage) && (
        <p
          className='language-selector-message'
          id='languageSelectorStatus'
          role='status'
        >
          {errorMessage || warningMessage}
        </p>
      )}
    </>
  );
};
