import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='search-form__filter-checkbox'>
      <div className='search-form__filter-checkbox-container'>
        <input type='checkbox' className='search-form__filter-checkbox-input' />
        <span className='search-form__filter-checkbox-checkmark' />
      </div>
      <p className='search-form__filter-checkbox-text'>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;