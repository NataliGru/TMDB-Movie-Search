import './style.css';

export const SearchQueryEmpty = () => {
  return (
    <div className='empty-query'>
      <h3>No results yet</h3>

      <p>Start typing in search field</p>
    </div>
  );
};
