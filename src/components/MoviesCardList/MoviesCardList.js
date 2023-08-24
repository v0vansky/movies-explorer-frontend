import React from 'react';
import './MoviesCardList.css';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
    SHOW_ON_DESKTOP,
    SHOW_ON_MOBILE,
    SHOW_ON_TABLET,
    DESKTOP_DEFAULT_CARDS,
    TABLET_DEFAULT_CARDS,
    MOBILE_DEFAULT_CARDS,
    DESKTOP_POINT,
    TABLET_POINT
} from '../../utils/constants';

function MoviesCardList({
    isSavedMovies,
    moviesData,
    isLoading,
    isNotFound,
    onMovieSave,
    userMovies,
    onMovieDelete
}) {
    const [movies, setMovies] = React.useState(moviesData);
    const [shownMovies, setShownMovies] = React.useState(0);
    const [width, setWidth] = React.useState(window.innerWidth);

    function showMovies() {
            if (width > DESKTOP_POINT) {
                setShownMovies(DESKTOP_DEFAULT_CARDS);
            } else if (width > TABLET_POINT) {
                setShownMovies(TABLET_DEFAULT_CARDS);
            } else if (width <= TABLET_POINT) {
                setShownMovies(MOBILE_DEFAULT_CARDS);
            }
    }

    React.useEffect(() => {
        const handleResizeWindow = () => {
            setWidth(window.innerWidth);
            showMovies();
        }
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    React.useEffect(() => {
        setMovies(moviesData);
        setShownMovies(0);
        showMovies();
    }, [moviesData]);

    function showMore() {
        if (width > DESKTOP_POINT) {
            setShownMovies(shownMovies + SHOW_ON_DESKTOP);
        } else if (width > TABLET_POINT) {
            setShownMovies(shownMovies + SHOW_ON_TABLET);
        } else if (width <= TABLET_POINT) {
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
            {movies.length > shownMovies && !isSavedMovies && (
                <button type='button' className='movies__button' onClick={showMore}>Ещё</button>
            )}
        </section>
    );
};

export default MoviesCardList;