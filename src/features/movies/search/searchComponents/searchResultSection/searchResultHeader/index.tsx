import './style.css';

interface SearchResultHeaderProps {
  moviesCount: number;
  isQueryExist: boolean;
}

export const SearchResultHeader = ({
  moviesCount,
  isQueryExist,
}: SearchResultHeaderProps) => {
  return (
    <div className='results-header'>
      <h2 className='results-title'>Search Results</h2>

      {isQueryExist && (
        <span className='results-count'>{moviesCount} movies found</span>
      )}
    </div>
  );
};
