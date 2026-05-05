import './style.css';

export const LanguageSelector = () => {
  return (
    <select className='filter-select'>
      <option value='en-US'>English (US)</option>
      {/* <!-- TODO: Populate with all TMDB supported languages --> */}
    </select>
  );
};
