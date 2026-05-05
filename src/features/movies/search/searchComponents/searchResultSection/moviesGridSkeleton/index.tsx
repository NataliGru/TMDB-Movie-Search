import { DetailedMovieCardSkeleton } from '../detailedMovieCardSkeleton';

export const MoviesGridSkeleton = () => {
  return (
    <div className='skeleton-grid'>
      {[...Array(4)].map((_, index) => (
        <DetailedMovieCardSkeleton key={index} />
      ))}
    </div>
  );
};
