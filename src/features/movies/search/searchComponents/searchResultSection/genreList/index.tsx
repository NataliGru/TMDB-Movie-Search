import { GenreLabel } from '../genreLabel';

import './style.css';

interface GenreListProps {
  genreList: string[];
}

export const GenreList = ({ genreList }: GenreListProps) => {
  if (!genreList?.length) return null;

  return (
    <div className='movie-genres'>
      {genreList.map((genre) => (
        <GenreLabel key={genre} genre={genre} />
      ))}
    </div>
  );
};
