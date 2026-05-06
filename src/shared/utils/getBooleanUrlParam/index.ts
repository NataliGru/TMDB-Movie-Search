export const getBooleanUrlParam = (key: string, fallback?: boolean) => {
  const searchParams = new URLSearchParams(window.location.search);

  const value = searchParams.get(key);

  if (value === null) return fallback;

  return value === 'true';
};
