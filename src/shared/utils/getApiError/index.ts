import { isAxiosError } from 'axios';

export const getResponseMessage = (data: unknown) => {
  if (!data || typeof data !== 'object') {
    return null;
  }

  if ('status_message' in data && typeof data.status_message === 'string') {
    return data.status_message;
  }

  if ('message' in data && typeof data.message === 'string') {
    return data.message;
  }

  return null;
};

export const getApiErrorMessage = (
  error: Error | null,
  fallbackMessage: string,
) => {
  if (!error) {
    return fallbackMessage;
  }

  if (!isAxiosError(error)) {
    return error.message || fallbackMessage;
  }

  if (!error.response) {
    return 'Network error. Check your internet connection and try again.';
  }

  const apiMessage = getResponseMessage(error.response.data);

  if (apiMessage) {
    return apiMessage;
  }

  switch (error.response.status) {
    case 401:
    case 403:
      return 'Authorization failed.';
    case 404:
      return 'Endpoint was not found.';
    case 429:
      return 'Too many requests. Please try again later.';
    default:
      if (error.response.status >= 500) {
        return 'Server is unavailable. Please try again later.';
      }

      return fallbackMessage;
  }
};
