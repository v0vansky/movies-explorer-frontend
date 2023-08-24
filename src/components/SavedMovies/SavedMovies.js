import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies, filterDuration } from '../../utils/utils';

function SavedMovies({ isSavedMovies, userMovies, onMovieDelete }) {
    const [filteredMovies, setFilteredMovies] = React.useState([]);
    const [isShorts, setIsShorts] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isNotFound, setIsNotFound] = React.useState(false);

    function handleFilterShorts() {
        setIsShorts(!isShorts);
    }

    function onSearchMovies(query) {
        setSearchQuery(query);
    }

    React.useEffect(() => {
        const moviesList = filterMovies(userMovies, searchQuery);
        setFilteredMovies(isShorts ? filterDuration(moviesList) : moviesList);
    }, [userMovies, isShorts, searchQuery]);
    
    React.useEffect(() => {
        if (filteredMovies.length === 0) {
            setIsNotFound(true);
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
            />
            <MoviesCardList
                userMovies={userMovies}
                moviesData={filteredMovies}
                isSavedMovies={isSavedMovies}
                onMovieDelete={onMovieDelete}
                isNotFound={isNotFound}
            />
        </main>
        <Footer />
        </>
    );
}

export default SavedMovies;