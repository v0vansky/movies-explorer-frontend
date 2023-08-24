import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { validate } from "react-email-validator";

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [values, setValues] = React.useState({ name: currentUser.name, email: currentUser.email });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [isEditing, setIsEditing] = React.useState(false);
    const [emailTest, setEmailTest] = React.useState(true);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    React.useEffect(() => {
        if (!validate(values.email)) {
            setIsValid(false);
            setEmailTest(false);
        } else if ((values.name === currentUser.name) && (values.email === currentUser.email)) {
            setEmailTest(true);
            setIsValid(false);
        }
        //eslint-disable-next-line
    }, [values]);

    const resetValues = () => {
        setValues({ name: currentUser.name, email: currentUser.email })
        setErrors({})
        setEmailTest(false)
        setIsValid(false)
    }

    const switchEditMode = (e) => {
        e.preventDefault();
        if (isEditing) {
            resetValues()
        }
        setIsEditing(!isEditing);
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
                            <label className="profile__text" htmlFor="name">Имя</label>
                            <input
                                className={`profile__input${errors.name ? ' profile__input_invalid' : ''}`}
                                value={values.name || ''}
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
                            <label className="profile__text" htmlFor="email">E-mail</label>
                            <input
                                className={`profile__input${errors.email || !emailTest ? ' profile__input_invalid' : ''}`}
                                value={values.email || ''}
                                onChange={handleChange}
                                name="email"
                                id="email"
                                type="email"
                                disabled={!isEditing}
                                required
                                autoComplete="off" />
                            <span className="profile__error">{!emailTest ? 'Введите корректный E-Mail' : errors.email}</span>
                        </div>
                    </div>
                    {isEditing ? (
                        <>
                            <button className={`profile__submit-button${!isValid ? ' profile__submit-button_disabled' : ''}`} type="submit">Сохранить</button>
                            <button type="button" className="profile__logout-button" onClick={switchEditMode}>Отмена</button>
                        </>
                    ) : (
                        <>
                            <button type="button" className="profile__edit-button" onClick={switchEditMode}>Редактировать</button>
                            <button type="button" className="profile__logout-button" onClick={props.onLogout}>Выйти из аккаунта</button>
                        </>
                    )}
                </form>
            </main>
        </>
    )
}
export default Profile;