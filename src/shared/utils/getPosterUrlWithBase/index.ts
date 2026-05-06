export const getPosterUrlWithBase = (posterUrl: string) => {
  if (!posterUrl) return null;

  const baseUrl = import.meta.env.VITE_API_BASE_IMAGE_URL;

  return `${baseUrl}/${posterUrl}`;
};
