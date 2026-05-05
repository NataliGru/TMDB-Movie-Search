import { ImageWithFallback } from '@/shared';

import type { MovieShort } from '../../../searchTypes';

import './style.css';

type SmallMovieCardProps = MovieShort;

export const ShortMovieCard = ({
  title,
  year,
  genres,
  posterUrl,
}: SmallMovieCardProps) => {
  return (
    <div className='autocomplete-item'>
      <div className='autocomplete-poster'>
        <ImageWithFallback src={posterUrl} alt={title} />
      </div>

      <div className='autocomplete-info'>
        <h4>{title}</h4>
        <p>
          {year} • {!!genres?.length && genres.join(', ')}
        </p>
      </div>
    </div>
  );
};
