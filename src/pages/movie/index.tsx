export const MoviePage = () => {
  return (
    <div className='container'>
      {/* <!-- Header Section --> */}
      <header className='header'>
        <h1>TMDB Movie Search</h1>
        <p>Find your favorite movies with powerful search and autocomplete</p>
      </header>

      {/* <!-- Search Section --> */}
      <section className='search-section'>
        <div className='search-container'>
          <input
            type='text'
            className='search-input'
            placeholder='Search for movies...'
            id='movieSearch'
          />

          {/* <!-- Autocomplete Dropdown - Connect to TMDB API for real-time suggestions --> */}
          <div className='autocomplete-dropdown' id='autocompleteDropdown'>
            {/* <!-- Example autocomplete items - replace with API data --> */}
            <div className='autocomplete-item'>
              <div className='autocomplete-poster'></div>
              <div className='autocomplete-info'>
                <h4>Example Movie Title</h4>
                <p>2024 • Action, Adventure</p>
              </div>
            </div>
            {/* <!-- Add more autocomplete items here from API response --> */}
          </div>
        </div>

        {/* <!-- Advanced Filters Section --> */}
        <div className='advanced-filters'>
          <button className='filters-toggle' id='filtersToggle'>
            🔽 Advanced Search Options
          </button>

          <div className='filters-content' id='filtersContent'>
            <div className='filter-field'>
              <label className='filter-label'>Language</label>
              <select className='filter-select' id='languageFilter'>
                <option value='en-US'>English (US)</option>
                <option value='en-GB'>English (UK)</option>
                <option value='es-ES'>Spanish</option>
                <option value='fr-FR'>French</option>
                <option value='de-DE'>German</option>
                <option value='it-IT'>Italian</option>
                <option value='ja-JP'>Japanese</option>
                <option value='ko-KR'>Korean</option>
                <option value='zh-CN'>Chinese</option>
                {/* <!-- TODO: Populate with all TMDB supported languages --> */}
              </select>
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
        <div className='movies-grid' id='moviesGrid'>
          {/* <!-- Example Movie Cards - Replace with real data from TMDB API --> */}
          <div className='movie-card'>
            <div className='movie-poster'>
              {/* <!-- Replace with: <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"> --> */}
              <div className='movie-rating'>8.5</div>
            </div>
            <div className='movie-info'>
              <h3 className='movie-title'>Example Movie Title</h3>
              <div className='movie-year'>2024</div>
              <p className='movie-overview'>
                This is an example movie overview that would come from the TMDB
                API. Replace this with actual movie.overview from the API
                response.
              </p>
              <div className='movie-genres'>
                {/* <!-- Map through movie.genre_ids and show genre names --> */}
                <span className='genre-tag'>Action</span>
                <span className='genre-tag'>Adventure</span>
                <span className='genre-tag'>Sci-Fi</span>
              </div>
            </div>
          </div>

          {/* <!-- Add more movie cards here programmatically --> */}
        </div>

        {/* <!-- Skeleton Loading - Show while loading --> */}
        <div
          className='skeleton-grid'
          id='skeletonGrid'
          // style="display: none;"
        >
          {/* <!-- Example skeleton cards - duplicate as needed --> */}
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
          {/* <!-- TODO: Add more skeleton cards programmatically based on expected results --> */}
        </div>

        {/* <!-- Loading State - Show while API request is in progress --> */}
        <div
          className='loading'
          id='loadingState'
          // style="display: none;"
        >
          <div className='loading-spinner'></div>
          <p>Searching for movies...</p>
        </div>

        {/* <!-- Empty State - Show when no results found --> */}
        <div
          className='empty-state'
          id='emptyState'
          // style="display: none;"
        >
          <h3>No movies found</h3>
          <p>Try searching with different keywords or check your spelling.</p>
        </div>
      </section>
    </div>
  );
};
