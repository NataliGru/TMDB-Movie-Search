import './style.css';

export const SearchResultEmptyState = () => {
  return (
    <div className='empty-state'>
      <h3>No movies found</h3>

      <p>Try searching with different keywords or check your spelling.</p>
    </div>
  );
};
