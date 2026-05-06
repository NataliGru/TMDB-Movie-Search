import {
  getGenreNameFromId,
  getPosterUrlWithBase,
  getYearFromDate,
  ImageWithFallback,
} from '@/shared';

import type { Genre } from '../../../searchContext';
import { GenreList } from '../genreList';

import './style.css';

interface DetailedMovieCardProps {
  title: string;
  rate: number;
  date: string;
  overview: string;
  genres: number[];
  posterSrc?: string;
  baseGenresList: Genre[];
  onClick?: () => void;
}

export const DetailedMovieCard = ({
  title,
  rate,
  date,
  overview,
  genres,
  posterSrc,
  baseGenresList,
  onClick,
}: DetailedMovieCardProps) => {
  const posterUrlWithBase = getPosterUrlWithBase(posterSrc);

  const roundedRate = rate.toFixed(1);

  return (
    <div className='movie-card' onClick={onClick}>
      <div className='movie-poster'>
        <ImageWithFallback src={posterUrlWithBase} alt={title} />

        <div className='movie-rating'>{roundedRate}</div>
      </div>

      <div className='movie-info'>
        <h3 className='movie-title'>{title}</h3>

        <div className='movie-year'>{getYearFromDate(date)}</div>

        <p className='movie-overview'>{overview}</p>

        <GenreList
          genreList={genres.map((genreId) =>
            getGenreNameFromId(genreId, baseGenresList),
          )}
        />
      </div>
    </div>
  );
};
