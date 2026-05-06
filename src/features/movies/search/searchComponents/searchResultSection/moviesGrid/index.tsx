import { useSearchMovieContext } from '../../../searchContext';
import { DetailedMovieCard } from '../detailedMovieCard';

import './style.css';

export const MoviesGrid = () => {
  const { movies, movieGenres } = useSearchMovieContext();

  if (!movies?.length) return;

  return (
    <div className='movies-grid'>
      {movies.map((movie) => (
        <DetailedMovieCard
          key={movie.id}
          title={movie.title}
          rate={movie.vote_average}
          year={movie.release_date}
          overview={movie.overview}
          genres={movie.genre_ids}
          posterSrc={movie?.poster_path}
          baseGenresList={movieGenres}
        />
      ))}
    </div>
  );
};
