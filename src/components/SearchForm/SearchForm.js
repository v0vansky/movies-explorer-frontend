import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [request, setRequest] = React.useState('');
    const [error, setError] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        setRequest(value);
        setError('Нужно ввести ключевое слово');
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = React.useCallback(
        (newError = '', newIsValid = false) => {
            setError(newError);
            setIsValid(newIsValid);
        },
        [setError, setIsValid]
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        isValid ? props.onSearch(request) : setError('Нужно ввести ключевое слово');
    }

    React.useEffect(() => {
        if (!props.isSavedMovies && localStorage.getItem('movieSearch')) {
            const localRequest = localStorage.getItem('movieSearch');
            setRequest(localRequest);
            resetForm();
        }
    }, [props.isSavedMovies]);

    return (
        <section className='search-form'>
            <form className='search-form__form' onSubmit={handleSubmit} >
                <div className={`search-form__wrapper${!(error === '') && !isValid ? ' search-form__wrapper-error' : ''}`}>
                    <input
                        className='search-form__input'
                        placeholder='Фильм'
                        value={request || ''}
                        onChange={handleChange}
                        name="request"
                        id="request"
                        type="search"
                        required
                        autoComplete="off"
                        formNoValidate />
                    <label className='search-form__label'>
                        <button className='search-form__submit-button' disabled={!isValid} type='submit'>Поиск</button>
                    </label>
                
                </div>
                <FilterCheckbox
                    isSavedMovies={props.isSavedMovies}
                    onFilterShorts={props.onFilterShorts}
                    isShorts={props.isShorts}/>
                {!isValid && <span className='search-form__request-error'>{error}</span>}
            </form>
        </section>
    );
};

export default SearchForm;