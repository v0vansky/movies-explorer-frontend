import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <Header />
            <main className='profile'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <div className="profile__info">
                    <div className="profile__container">
                        <p className="profile__text">Имя</p>
                        <p className="profile__text">{currentUser.name}</p>
                    </div>
                    <div className="profile__container">
                        <p className="profile__text">E-mail</p>
                        <p className="profile__text">{currentUser.email}</p>
                    </div>
                </div>
                <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>Редактировать</button>
                <Link to="/"><button type="button" className="profile__logout-button" onClick={props.onLogout}>Выйти из аккаунта</button></Link>
            </main>
        </>
    )
}
export default Profile;