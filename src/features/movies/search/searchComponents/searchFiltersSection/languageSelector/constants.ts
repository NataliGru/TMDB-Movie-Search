import { LanguageSelectorStatus } from './types';

export const STATUS_OPTION_LABELS = {
  [LanguageSelectorStatus.loading]: 'Loading languages...',
  [LanguageSelectorStatus.error]: 'Failed to load languages',
  [LanguageSelectorStatus.empty]: 'No languages available',
};
