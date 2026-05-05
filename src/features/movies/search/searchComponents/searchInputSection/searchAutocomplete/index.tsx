import type { MovieShort } from '../../../searchTypes';
import { ShortMovieCard } from '../shortMovieCard';

import './style.css';

interface SearchAutocompleteProps {
  movieList: MovieShort[];
}

export const SearchAutocomplete = ({ movieList }: SearchAutocompleteProps) => {
  return (
    <div className='autocomplete-dropdown'>
      {movieList?.length &&
        movieList.map((movie) => (
          <ShortMovieCard {...movie} key={movie.title} />
        ))}
    </div>
  );
};
