import { createPortal } from 'react-dom';

import { useSearchMovieContext } from '../../searchContext';
import { DetailedMovieCard } from '../searchResultSection/detailedMovieCard';

import './style.css';

export const MovieDetailsPortal = () => {
  const { selectedMovie, movieGenres, handleRemoveSelectedMovie } =
    useSearchMovieContext();

  if (!selectedMovie) return null;

  return createPortal(
    <div className='movie-modal-overlay' onClick={handleRemoveSelectedMovie}>
      <div className='movie-modal-content' onClick={(e) => e.stopPropagation()}>
        <button
          className='modal-close'
          type='button'
          onClick={handleRemoveSelectedMovie}
        >
          Close
        </button>

        <div className='modal-card-container'>
          <DetailedMovieCard
            title={selectedMovie.title}
            rate={selectedMovie.vote_average}
            date={selectedMovie.release_date}
            overview={selectedMovie.overview}
            genres={selectedMovie.genre_ids}
            posterSrc={selectedMovie?.poster_path}
            baseGenresList={movieGenres}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};
