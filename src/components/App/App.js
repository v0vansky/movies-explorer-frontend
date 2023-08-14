import React from 'react';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userMovies, setUserMovies] = React.useState({});
    const navigate = useNavigate();

    React.useEffect(() => {
        if (loggedIn) {
            setIsLoading(true);
            Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
                .then(([userData, userMovies]) => {
                    setCurrentUser(userData);
                    setUserMovies(userMovies);
                })
                .catch((err) => {
                    console.log(err);
                }).finally(() => {
                    setIsLoading(false);
                })
        }
    }, [loggedIn]);

    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            mainApi.checkToken(jwt).then(res => {
                if (res) {
                    setLoggedIn(true);
                }
            }).catch((err) => {
                console.log(err);
            })
        } setIsLoading(false)
    }, []);

    function handleRegister(name, email, password) {
        setIsLoading(true);
        mainApi.register(name, email, password)
        .then((res) => {
            handleLogin(email, password)
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        })
    }

    function handleLogin(email, password) {
        setIsLoading(true);
        mainApi.signin(email, password)
        .then((data) => {
            localStorage.setItem('jwt', data.token);
            navigate('/movies');
            setLoggedIn(true);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        })
    }

    function handleUpdateProfile(name, email) {
        setIsLoading(true);
        mainApi.patchUserInfo(name, email)
        .then((data) => {
            setCurrentUser(data);
        })
        .catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    function handleLogout() {
        setLoggedIn(false);
        localStorage.removeItem("jwt");
        localStorage.removeItem('movies');
        localStorage.removeItem('movieSearch');
        localStorage.removeItem('shortMovies');
        localStorage.removeItem('allMovies');
        navigate("/", { replace: true });
    }

    function handleMovieSave(movie) {
        mainApi.saveMovie(movie)
          .then((newMovie) => {
            setUserMovies([newMovie, ...userMovies]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    
      function handleMovieDelete(movie) {
        mainApi.deleteMovie(movie._id)
          .then(() => {
            setUserMovies((userMovies) => userMovies.filter((item) => item._id !== movie._id));
          })
          .catch((err) => {
            console.log(err);
          });
      }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {isLoading ? (<Preloader />) : (
            <Routes>
                <Route path="/" element={
                    <Main loggedIn={loggedIn} />
                } />
                <Route path="/movies" element={
                    <ProtectedRoute
                        element={Movies}
                        loggedIn={loggedIn}
                        isSavedMovies={false}
                        userMovies={userMovies}
                        /* onSearch={handleSearch} */
                        onMovieDelete={handleMovieDelete}
                        onMovieSave={handleMovieSave}
                    />
                } />
                <Route path="/saved-movies" element={
                    <ProtectedRoute
                        element={SavedMovies}
                        loggedIn={loggedIn}
                        isSavedMovies={true}
                        userMovies={userMovies}
                        onMovieDelete={handleMovieDelete}
                        onMovieSave={handleMovieSave}
                    />
                } />
                <Route path="/profile" element={
                    <ProtectedRoute
                        element={Profile}
                        loggedIn={loggedIn}
                        onEditProfile={handleUpdateProfile}
                        onLogout={handleLogout}
                    />
                } />
                <Route path="/sign-in" element={
                    !loggedIn ? (
                        <Login onLogin={handleLogin} />
                    ) : (
                        <Navigate to="/" replace />
                    )} />
                <Route path="/sign-up" element={
                    !loggedIn ? (
                        <Register onRegister={handleRegister} />
                    ) : (
                        <Navigate to="/" replace />
                    )} />
                <Route path="/404" element={
                    <NotFound />
                } />
                <Route path="*" element={
                    <Navigate to="/404" replace />
                } />
            </Routes>
            )}
        </CurrentUserContext.Provider>
    );
}

export default App;