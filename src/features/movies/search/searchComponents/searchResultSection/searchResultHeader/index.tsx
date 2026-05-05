import './style.css';

interface SearchResultHeaderProps {
  moviesCount: number;
}

export const SearchResultHeader = ({
  moviesCount,
}: SearchResultHeaderProps) => {
  return (
    <div className='results-header'>
      <h2 className='results-title'>Search Results</h2>

      <span className='results-count'>{moviesCount} movies found</span>
    </div>
  );
};
