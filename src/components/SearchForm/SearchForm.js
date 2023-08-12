import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className='search-form'>
        <form className='search-form__form'>
            <div className='search-form__wrapper'>
                <input className='search-form__input' type='search' placeholder='Фильм' required/>
                <label className='search-form__label'>
                    <button className='search-form__submit-button' type='submit'>Поиск</button>
                </label>
               
            </div>
            <FilterCheckbox />
        </form>
        </section>
    );
};

export default SearchForm;