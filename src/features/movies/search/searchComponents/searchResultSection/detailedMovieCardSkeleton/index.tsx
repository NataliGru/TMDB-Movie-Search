import './style.css';

export const DetailedMovieCardSkeleton = () => {
  return (
    <div className='skeleton-card'>
      <div className='skeleton-poster'></div>
      <div className='skeleton-info'>
        <div className='skeleton-line title'></div>
        <div className='skeleton-line year'></div>
        <div className='skeleton-line overview'></div>
        <div className='skeleton-line overview'></div>
        <div className='skeleton-line overview'></div>
      </div>
    </div>
  );
};
