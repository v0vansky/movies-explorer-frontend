import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section>
        <form className='search-form'>
            <div className='search-form__wrapper'>
            <label className='search-form__label'>
                <input className='search-form__input' type='search' placeholder='Фильм' required/>
                <button className='search-form__submit-button' type='submit'>Поиск</button>
            </label>
            <FilterCheckbox />
            </div>
        </form>
        </section>
    );
};

export default SearchForm;