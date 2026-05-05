import { ImageWithFallback } from '@/shared';

import './style.css';

interface DetailedMovieCardProps {
  title: string;
  rate: number;
  year: string;
  overview: string;
  genres: number[];
  posterSrc?: string;
}

export const DetailedMovieCard = ({
  title,
  rate,
  year,
  overview,
  genres,
  posterSrc,
}: DetailedMovieCardProps) => {
  const moviePosterSrc = posterSrc
    ? `${import.meta.env.VITE_API_TOKEN}${posterSrc}`
    : undefined;

  const roundedRate = rate.toFixed(2);

  console.log(genres);

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <ImageWithFallback src={moviePosterSrc} alt={title} />

        <div className='movie-rating'>{roundedRate}</div>
      </div>

      <div className='movie-info'>
        <h3 className='movie-title'>{title}</h3>

        <div className='movie-year'>{year}</div>

        <p className='movie-overview'>{overview}</p>

        {/* <GenreList genreList={genres} /> */}
      </div>
    </div>
  );
};
