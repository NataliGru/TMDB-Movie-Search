export const getPosterUrlWithBase = (posterUrl?: string | null) => {
  if (!posterUrl) return undefined;

  const baseUrl = import.meta.env.VITE_API_BASE_IMAGE_URL;

  return `${baseUrl}/${posterUrl}`;
};
