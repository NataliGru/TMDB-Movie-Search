import type { LanguageOption } from './types';

export const getLanguageOptionName = (
  code: string,
  languageNamesByCode: Map<string, string>,
) => {
  const [languageCode, regionCode] = code.split('-');
  const fallbackLanguageName = languageCode.toUpperCase();
  const languageName =
    languageNamesByCode.get(languageCode) || fallbackLanguageName;

  if (!regionCode) {
    return languageName;
  }

  return `${languageName} (${regionCode.toUpperCase()})`;
};

export const mapPrimaryTranslationsToLanguageOptions = (
  primaryTranslations: string[],
  languageNamesByCode: Map<string, string>,
): LanguageOption[] => {
  return Array.from(new Set(primaryTranslations))
    .filter(Boolean)
    .map((code) => ({
      code,
      name: getLanguageOptionName(code, languageNamesByCode),
    }))
    .sort((firstLanguage, secondLanguage) =>
      firstLanguage.name.localeCompare(secondLanguage.name),
    );
};
