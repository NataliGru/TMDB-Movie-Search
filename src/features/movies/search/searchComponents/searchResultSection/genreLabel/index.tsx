import './style.css';

interface GenreLabelProps {
  genre: string;
}

export const GenreLabel = ({ genre }: GenreLabelProps) => {
  if (!genre) return;

  return <span className='genre-tag'>{genre}</span>;
};
