import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [request, setRequest] = React.useState('');
    const [isRequestError, setIsRequestError] = React.useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (request.trim().length === 0) {
            setIsRequestError(true)
        } else {
            setIsRequestError(false)
            props.onSearch(request);
        }
    }

    React.useEffect(() => {
        if (!props.isSavedMovies && localStorage.getItem('movieSearch')) {
            const localRequest = localStorage.getItem('movieSearch');
            setRequest(localRequest);
        }
    }, [props.isSavedMovies]);

    return (
        <section className='search-form'>
        <form className='search-form__form' onSubmit={handleSubmit} >
            <div className='search-form__wrapper'>
                <input
                    className='search-form__input'
                    placeholder='Фильм'
                    value={request || ''}
                    onChange={(e) => {setRequest(e.target.value)}}
                    name="request"
                    id="request"
                    type="search"
                    required />
                <label className='search-form__label'>
                    <button className='search-form__submit-button' type='submit'>Поиск</button>
                </label>
               
            </div>
            <FilterCheckbox
                isSavedMovies={props.isSavedMovies}
                onFilterShorts={props.onFilterShorts}
                isShorts={props.isShorts}/>
            {isRequestError && <span className='search-form__request-error'>Введите поисковый запрос</span>}
        </form>
        </section>
    );
};

export default SearchForm;