import React from 'react';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
    const userHardData = {
        _id: "64cf89b5f1b82131b862ca1f",
        name: "Виталий",
        email: "pochta@yandex.ru"
    }
    const [currentUser, setCurrentUser] = React.useState((userHardData));
    const [loggedIn, setLoggedIn] = React.useState(true);
    const navigate = useNavigate();

    function handleUpdateProfile() {
        setLoggedIn(true);
        setCurrentUser(userHardData)
    }

    function handleLogout() {
        navigate("/", { replace: true });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
                <Routes>
                    <Route path="/" element={
                        <Main />
                    } />
                    <Route path="/movies" element={
                        <Movies savedMovies={false} />
                    } />
                    <Route path="/saved-movies" element={
                        <Movies savedMovies={true} />
                    } />
                    <Route path="/profile" element={
                        <Profile loggedIn={loggedIn} onEditProfile={handleUpdateProfile} onLogout={handleLogout} />
                    } />
                    <Route path="/sign-in" element={
                        <Login />
                    } />
                    <Route path="/sign-up" element={
                        <Register />
                    } />
                    <Route path="/404" element={
                        <NotFound />
                    } />
                    <Route path="*" element={
                        <Navigate to="/404" replace />
                    } />
                </Routes>
        </CurrentUserContext.Provider>
    );
}

export default App;