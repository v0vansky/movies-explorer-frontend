import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='filter-checkbox'>
      <div className='filter-checkbox__container'>
        <input type='checkbox' className='filter-checkbox__input' />
        <span className='filter-checkbox__checkmark' />
      </div>
      <p className='filter-checkbox__text'>Короткометражки</p>
    </label>
  );
};

export default FilterCheckbox;