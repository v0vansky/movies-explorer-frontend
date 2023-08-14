import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { moviesApi } from "../../utils/MoviesApi";
import { filterMovies, filterDuration } from '../../utils/utils';

function Movies({ isSavedMovies, userMovies, onMovieSave, onMovieDelete }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [initialMovies, setInitialMovies] = React.useState([]);
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [isShorts, setIsShorts] = React.useState(false);

    const [isReqErr, setIsReqErr] = React.useState(false);
    const [isNotFound, setIsNotFound] = React.useState(false);

    function handleFilterMovies(movies, query, short) {
        const moviesList = filterMovies(movies, query, short);
        setInitialMovies(moviesList);
        setFilteredMovies(short ? filterDuration(moviesList) : moviesList);
        localStorage.setItem("movies", JSON.stringify(moviesList));
        localStorage.setItem("allMovies", JSON.stringify(movies));
    }

    function handleFilterShorts() {
        setIsShorts(!isShorts);
        if (!isShorts) {
        if (filterDuration(initialMovies).length === 0) {
            setFilteredMovies(filterDuration(initialMovies));
        } else {
            setFilteredMovies(filterDuration(initialMovies));
        }
        } else {
        setFilteredMovies(initialMovies);
        }
        localStorage.setItem("shortMovies", !isShorts);
    }

    function onSearchMovies(query) {
        setIsLoading(true);
        localStorage.setItem("movieSearch", query);
        localStorage.setItem("shortMovies", isShorts);

        if (localStorage.getItem("allMovies")) {
            const movies = JSON.parse(localStorage.getItem("allMovies"));
            handleFilterMovies(movies, query, isShorts);
        } else {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((cardsData) => {
                    handleFilterMovies(cardsData, query, isShorts);
                    setIsReqErr(false);
                })
                    .catch((err) => {
                    setIsReqErr(true);
                    console.log(err);
                })
                    .finally(() => {
                    setIsLoading(false);
                });
        }
        setIsLoading(false);
    }

    React.useEffect(() => {
        if (localStorage.getItem("shortMovies") === "true") {
        setIsShorts(true);
        } else {
        setIsShorts(false);
        }
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem("movies")) {
        const movies = JSON.parse(localStorage.getItem("movies"));
        setInitialMovies(movies);
        if (localStorage.getItem("shortMovies") === "true") {
            setFilteredMovies(filterDuration(movies));
        } else {
            setFilteredMovies(movies);
        }
        }
    }, []);

    React.useEffect(() => {
        if (localStorage.getItem("movieSearch")) {
            if (filteredMovies.length === 0) {
                setIsNotFound(true);
            } else {
                setIsNotFound(false);
            }
        } else {
            setIsNotFound(false);
        }
    }, [filteredMovies]);

    return (
        <>
        <Header>
            <Navigation />
        </Header>
        <main>
            <SearchForm
                isSavedMovies={isSavedMovies}
                onSearch={onSearchMovies}
                onFilterShorts={handleFilterShorts}
                isShorts={isShorts}
            />
            <MoviesCardList
                userMovies={userMovies}
                movies={filteredMovies}
                isSavedMovies={isSavedMovies}
                isLoading={isLoading}
                isReqErr={isReqErr}
                isNotFound={isNotFound}
                onMovieSave={onMovieSave}
                onMovieDelete={onMovieDelete}
            />
        </main>
        <Footer />
        </>
    );
}

export default Movies;
