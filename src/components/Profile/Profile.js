import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';


function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [values, setValues] = React.useState({ name: currentUser.name, email: currentUser.email });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const enableEditing = (e) => {
        e.preventDefault();
        setIsEditing(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onEditProfile(values.name, values.email);
    }

    return (
        <>
            <Header>
                <Navigation />
            </Header>
            <main className='profile'>
                <form className="profile__form" onSubmit={handleSubmit}>
                    <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                    <div className="profile__info">
                        <div className="profile__container">
                            <label className="profile__text">Имя</label>
                            <input
                                className={`profile__input${errors.name ? ' profile__input_invalid' : ''}`}
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                                id="name"
                                type="text"
                                maxLength={30}
                                minLength={2}
                                disabled={!isEditing}
                                required
                                autoComplete="off" />
                            <span className="profile__error">{errors.name}</span>
                        </div>
                        <div className="profile__container">
                            <label className="profile__text">E-mail</label>
                            <input
                                className={`profile__input${errors.email ? ' profile__input_invalid' : ''}`}
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                id="email"
                                type="email"
                                disabled={!isEditing}
                                required
                                autoComplete="off" />
                            <span className="profile__error">{errors.email}</span>
                        </div>
                    </div>
                    {isEditing ? (
                        <>
                            <button className={`profile__submit-button${!isValid ? ' profile__submit-button_disabled' : ''}`} type="submit">Сохранить</button>
                        </>
                    ) : (
                        <>
                            <button type="button" className="profile__edit-button" onClick={enableEditing}>Редактировать</button>
                            <button type="button" className="profile__logout-button" onClick={props.onLogout}>Выйти из аккаунта</button>
                        </>
                    )}
                </form>
            </main>
        </>
    )
}
export default Profile;