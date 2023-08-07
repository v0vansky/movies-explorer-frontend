import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className='search-form'>
        <form className='search-form__form'>
            <div className='search-form__wrapper'>
            <div className='search-form__label'>
                <input className='search-form__input' type='search' placeholder='Фильм' required/>
                <button className='search-form__submit-button' type='submit'>Поиск</button>
            </div>
            <FilterCheckbox />
            </div>
        </form>
        </section>
    );
};

export default SearchForm;