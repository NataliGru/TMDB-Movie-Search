import { useMemo } from 'react';

import { getApiErrorMessage } from '@/shared/utils/getApiError';

import {
  useGeMovieLanguages,
  useGeMoviePrimaryTranslation,
} from '../../../searchApi';

import { LanguageSelectorStatus } from './types';
import { mapPrimaryTranslationsToLanguageOptions } from './utils';

export const useLanguageSelector = () => {
  const {
    isError: isMovieLanguagesError,
    isLoading: isMovieLanguagesLoading,
    data: movieLanguages = [],
    error: movieLanguagesError,
  } = useGeMovieLanguages();

  const {
    isError: isMoviePrimaryTranslationError,
    isLoading: isMoviePrimaryTranslationLoading,
    data: moviePrimaryTranslation = [],
    error: moviePrimaryTranslationError,
  } = useGeMoviePrimaryTranslation();

  const isLoading = isMovieLanguagesLoading || isMoviePrimaryTranslationLoading;
  const isPrimaryTranslationError = isMoviePrimaryTranslationError;
  const isLanguageNamesError = isMovieLanguagesError;

  const languages = useMemo(() => {
    const languageNamesByCode = new Map(
      movieLanguages.map(({ english_name, iso_639_1, name }) => [
        iso_639_1,
        english_name || name || iso_639_1.toUpperCase(),
      ]),
    );

    return mapPrimaryTranslationsToLanguageOptions(
      moviePrimaryTranslation,
      languageNamesByCode,
    );
  }, [movieLanguages, moviePrimaryTranslation]);

  const status = isLoading
    ? LanguageSelectorStatus.loading
    : isPrimaryTranslationError
      ? LanguageSelectorStatus.error
      : languages.length
        ? LanguageSelectorStatus.ready
        : LanguageSelectorStatus.empty;

  const errorMessage = isPrimaryTranslationError
    ? getApiErrorMessage(
        moviePrimaryTranslationError,
        'Unable to load language options.',
      )
    : null;

  const warningMessage =
    !isPrimaryTranslationError && isLanguageNamesError
      ? getApiErrorMessage(
          movieLanguagesError,
          'Language names are unavailable. Showing language codes instead.',
        )
      : null;

  return {
    error: moviePrimaryTranslationError,
    errorMessage,
    isError: isPrimaryTranslationError,
    isLoading,
    languages,
    status,
    warningMessage,
  };
};
