import React from 'react';
import './MoviesCardList.css';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
    SHOW_ON_DESKTOP,
    SHOW_ON_MOBILE,
    SHOW_ON_TABLET
} from '../../utils/constants';

function MoviesCardList({
    isSavedMovies,
    movies,
    isLoading,
    isReqErr,
    isNotFound,
    onMovieSave,
    userMovies,
    onMovieDelete
}) {
    const [shownMovies, setShownMovies] = React.useState(0);

    function showLimit() {
        const display = window.innerWidth;
        if (display > 1150) {
            setShownMovies(12);
        } else if (display > 700) {
            setShownMovies(8);
        } else if (display <= 700) {
            setShownMovies(5);
        }
    }

    React.useEffect(() => {
        showLimit();
    }, []);
    
    React.useEffect(() => {
        setTimeout(() => {
          window.addEventListener('resize', showLimit);
        }, 500);
    });


    function showMore() {
        const display = window.innerWidth;
        if (display > 1150) {
            setShownMovies(shownMovies + SHOW_ON_DESKTOP);
        } else if (display > 700) {
            setShownMovies(shownMovies + SHOW_ON_TABLET);
        }
        else if (display <= 700) {
            setShownMovies(shownMovies + SHOW_ON_MOBILE);
        }
    }

    function getSavedMovieCard(userMovies, movie) {
        return userMovies.find((userMovie) => userMovie.movieId === movie.id);
    }

    return (
        <section className='movies'>
            {isLoading && <Preloader isGlobal={false} />}
            {movies.length > 0 ? (
                <ul className='movies__list'>
                    {isSavedMovies ? (
                        movies.map((movie) => (
                            <MoviesCard
                                key={isSavedMovies ? movie._id : movie.id}
                                userMovies={userMovies}
                                movie={movie}
                                isSavedMovies={isSavedMovies}
                                onMovieSave={onMovieSave}
                                onMovieDelete={onMovieDelete}
                                saved={getSavedMovieCard(userMovies, movie)}
                            />
                        ))) : (movies.slice(0, shownMovies).map((movie) => (
                            <MoviesCard
                                key={isSavedMovies ? movie._id : movie.id}
                                userMovies={userMovies}
                                movie={movie}
                                isSavedMovies={isSavedMovies}
                                onMovieSave={onMovieSave}
                                onMovieDelete={onMovieDelete}
                                saved={getSavedMovieCard(userMovies, movie)}
                            />
                        )))}
                </ul>
            ) : (
                isNotFound && !isLoading && <p className='movies__message'>По вашему запросу ничего не найдено</p>
            )}
            {movies.length > shownMovies && (
                <button type='button' className='movies__button' onClick={showMore}>Ещё</button>
            )}
        </section>
    );
};

export default MoviesCardList;