import { CircleLoader, ProgressLoader } from '@/shared';

import { MoviesGrid } from '../moviesGrid';

export const SearchResults = () => {
  return (
    <section className='results-section'>
      {/* <!-- Progress Bar - Show during API requests --> */}
      <ProgressLoader />

      <div className='results-header'>
        <h2 className='results-title'>Search Results</h2>
        <span className='results-count' id='resultsCount'>
          0 movies found
        </span>
      </div>

      {/* <!-- Movies Grid - Populate with TMDB API data --> */}
      <MoviesGrid movies={[]} />

      {/* <!-- Loading State - Show while API request is in progress --> */}
      <CircleLoader>
        <p>Searching for movies...</p>
      </CircleLoader>

      {/* <!-- Empty State - Show when no results found --> */}
      <div className='empty-state'>
        <h3>No movies found</h3>
        <p>Try searching with different keywords or check your spelling.</p>
      </div>
    </section>
  );
};
