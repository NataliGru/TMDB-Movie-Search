import type { MovieApi } from '../../../searchApi';
import { DetailedMovieCard } from '../detailedMovieCard';

interface MoviesGridProps {
  movies: MovieApi[];
}

export const MoviesGrid = ({ movies }: MoviesGridProps) => {
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
        />
      ))}
    </div>
  );
};
