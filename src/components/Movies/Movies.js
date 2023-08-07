import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies({savedMovies}) {
    return (
        <>
        <Header>
            <Navigation />
        </Header>
        <main style={{flex:1}}>
            <SearchForm />
            <MoviesCardList {...{ savedMovies }} />
        </main>
        <Footer />
        </>
    );
};

export default Movies;