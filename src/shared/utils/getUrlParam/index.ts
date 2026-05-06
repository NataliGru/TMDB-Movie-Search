export const getUrlParam = (key: string, fallback = '') => {
  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get(key) ?? fallback;
};
