import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='search-form__filter-checkbox'>
      <label className='search-form__toggler-wrapper'>
        <input type='checkbox' />
        <my-checkbox class="search-form__toggler-slider">
          <my-checkbox class="search-form__toggler-knob"></my-checkbox>
        </my-checkbox>
      </label>
      <p className='search-form__filter-checkbox-text'>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;