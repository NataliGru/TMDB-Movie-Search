export type LanguageOption = {
  code: string;
  name: string;
};

export const LanguageSelectorStatus = {
  empty: 'empty',
  error: 'error',
  loading: 'loading',
  ready: 'ready',
} as const;
