import { LanguageSelector } from '@/features/movies/search/searchComponents/searchFiltersSection/languageSelector';
import { MovieSearchInput } from '@/features/movies/search/searchComponents/searchInputSection/searchInput';
import { ShortMovieCard } from '@/features/movies/search/searchComponents/searchInputSection/shortMovieCard';
import { MoviesGrid } from '@/features/movies/search/searchComponents/searchResultSection/moviesGrid';
import { CircleLoader, PageHeader } from '@/shared';

export const SearchMoviePage = () => {
  return (
    <div className='container'>
      {/* <!-- Header Section --> */}

      <PageHeader
        title='TMDB Movie Search'
        subtitle='Find your favorite movies with powerful search and autocomplete'
      />

      <MovieSearchInput />
      {/* <!-- Search Section --> */}
      <section className='search-section'>
        <div className='search-container'>
          <MovieSearchInput />

          {/* <!-- Autocomplete Dropdown - Connect to TMDB API for real-time suggestions --> */}
          <div className='autocomplete-dropdown' id='autocompleteDropdown'>
            {/* <!-- Example autocomplete items - replace with API data --> */}
            <ShortMovieCard
              title='Example Movie Title'
              year={11}
              genres={['ddd']}
            />

            {/* <!-- Add more autocomplete items here from API response --> */}
          </div>
        </div>

        <LanguageSelector />

        {/* <!-- Advanced Filters Section --> */}
        <div className='advanced-filters'>
          <button className='filters-toggle' id='filtersToggle'>
            🔽 Advanced Search Options
          </button>

          <div className='filters-content' id='filtersContent'>
            <div className='filter-field'>
              <label className='filter-label'>Language</label>

              <LanguageSelector />
            </div>

            <div className='filter-field'>
              <label className='filter-label'>Release Year</label>
              <input
                type='number'
                className='filter-input'
                placeholder='e.g. 2024'
                id='primaryReleaseYear'
                min='1900'
                max='2030'
              />
            </div>

            <div className='filter-field'>
              <label className='filter-label'>Year</label>
              <input
                type='number'
                className='filter-input'
                placeholder='e.g. 2024'
                id='yearFilter'
                min='1900'
                max='2030'
              />
            </div>

            <div className='filter-field'>
              <label className='filter-label'>Region</label>
              <select className='filter-select' id='regionFilter'>
                <option value=''>All Regions</option>
                <option value='US'>United States</option>
                <option value='GB'>United Kingdom</option>
                <option value='CA'>Canada</option>
                <option value='AU'>Australia</option>
                <option value='DE'>Germany</option>
                <option value='FR'>France</option>
                <option value='ES'>Spain</option>
                <option value='IT'>Italy</option>
                <option value='JP'>Japan</option>
                <option value='KR'>South Korea</option>
                {/* <!-- TODO: Populate with all ISO country codes --> */}
              </select>
            </div>

            <div className='filter-field'>
              <label className='filter-label'>Page</label>
              <input
                type='number'
                className='filter-input'
                placeholder='1'
                id='pageFilter'
                min='1'
                max='1000'
                value='1'
              />
            </div>

            <div className='filter-field'>
              <label className='filter-label'>Content Filter</label>
              <div className='checkbox-field'>
                <input type='checkbox' id='includeAdult' />
                <label htmlFor='includeAdult'>Include Adult Content</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Results Section --> */}
      <section className='results-section'>
        {/* <!-- Progress Bar - Show during API requests --> */}
        <div className='progress-bar' id='progressBar'>
          <div className='progress-bar-fill'></div>
        </div>

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
    </div>
  );
};
