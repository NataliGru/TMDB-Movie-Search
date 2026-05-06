import {
  getPosterUrlWithBase,
  getYearFromDate,
  ImageWithFallback,
} from '@/shared';

import type { MovieShort } from '../../../searchTypes';

import './style.css';

type SmallMovieCardProps = MovieShort & { onClick?: () => void };

export const ShortMovieCard = ({
  title,
  date,
  genres,
  posterUrl,
  onClick,
}: SmallMovieCardProps) => {
  const posterUrlWithBase = getPosterUrlWithBase(posterUrl);

  return (
    <div className='autocomplete-item' onClick={onClick}>
      <div className='autocomplete-poster'>
        <ImageWithFallback src={posterUrlWithBase} alt={title} />
      </div>

      <div className='autocomplete-info'>
        <h4>{title}</h4>
        <p>
          {getYearFromDate(date)} • {!!genres?.length && genres.join(', ')}
        </p>
      </div>
    </div>
  );
};
