import {
  getPosterUrlWithBase,
  getYearFromDate,
  ImageWithFallback,
} from '@/shared';

import type { MovieShort } from '../../../searchTypes';

import './style.css';

type SmallMovieCardProps = MovieShort;

export const ShortMovieCard = ({
  title,
  date,
  genres,
  posterUrl,
}: SmallMovieCardProps) => {
  const posterUrlWithBase = getPosterUrlWithBase(posterUrl);

  return (
    <div className='autocomplete-item'>
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
