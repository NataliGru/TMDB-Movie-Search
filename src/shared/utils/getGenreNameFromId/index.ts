import type { Genre } from '@/features';

export const getGenreNameFromId = (genreId: number, genres: Genre[]) => {
  if (!genreId || !genres?.length) return '';

  return genres.find((genre) => genre.id === genreId)?.name || '';
};
