export const updateUrlParams = (params: Record<string, unknown>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (
      value === '' ||
      value === null ||
      value === undefined ||
      value === false
    ) {
      return;
    }

    searchParams.set(key, String(value));
  });

  const queryString = searchParams.toString();

  window.history.replaceState(
    null,
    '',
    queryString ? `?${queryString}` : window.location.pathname,
  );
};
