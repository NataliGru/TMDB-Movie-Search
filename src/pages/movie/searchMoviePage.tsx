import { SearchFilterSection, SearchInputSection } from '@/features';
import { MovieDetailsPortal } from '@/features/movies/search/searchComponents/detailsPortal';
import { SearchResults } from '@/features/movies/search/searchComponents/searchResultSection/searchResults';
import { PageHeader } from '@/shared';

export const SearchMoviePage = () => {
  return (
    <div className='container'>
      <PageHeader
        title='TMDB Movie Search'
        subtitle='Find your favorite movies with powerful search and autocomplete'
      />

      <section className='search-section'>
        <SearchInputSection />

        <SearchFilterSection />
      </section>

      <SearchResults />

      <MovieDetailsPortal />
    </div>
  );
};
