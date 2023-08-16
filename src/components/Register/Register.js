import React from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { EMAIL_REGEX } from "../../utils/constants";

function Register(props) {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setIsValid(target.closest("form").checkValidity());
        if (!EMAIL_REGEX.test(values.email)) {
            setErrors({...errors, email: 'Введите корректный E-Mail' })
            setIsValid(false);
        }
        setErrors({...errors, [name]: target.validationMessage });
    };

    const resetForm = React.useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onRegister(values.name, values.email, values.password);
        resetForm();
    }

    return (
        <>
            <main className='register'>
                <div className="register__container">
                    <Link to="/" className="register__logo" />
                    <h1 className='register__title'>Добро пожаловать!</h1>
                    <form className="register__form" onSubmit={handleSubmit}>
                        <div className="register__inputs">
                            <label className="register__input-label" htmlFor="name">Имя</label>
                            <div className="register__input-container">
                                <input
                                    className={`register__input${errors.name ? ' register__input_invalid' : ''}`}
                                    value={values.name || ""}
                                    onChange={handleChange}
                                    name="name"
                                    id="name"
                                    type="text"
                                    minLength={2}
                                    maxLength={30}
                                    required
                                    autoComplete="off" />
                                    <span className="register__error">{errors.name}</span>
                            </div>
                            <label className="register__input-label" htmlFor="email">E-mail</label>
                            <div className="register__input-container">
                                <input
                                    className={`register__input${errors.email ? ' register__input_invalid' : ''}`}
                                    value={values.email || ""}
                                    onChange={handleChange}
                                    name="email"
                                    id="email"
                                    type="email"
                                    required
                                    autoComplete="off" />
                                    <span className="register__error">{errors.email}</span>
                            </div>
                            <label className="register__input-label" htmlFor="password">Пароль</label>
                            <div className="register__input-container">
                                <input
                                    className={`register__input${errors.password ? ' register__input_invalid' : ''}`}
                                    value={values.password || ""}
                                    onChange={handleChange}
                                    name="password"
                                    id="password"
                                    type="password"
                                    required
                                    autoComplete="off" />
                                <span className="register__error">{errors.password}</span>
                            </div>
                        </div>
                        <button className={`register__submit-button${!isValid ? ' register__submit-button_disabled' : ''}`} type="submit" >Зарегистрироваться</button>
                    </form>
                    <p className="register__link-text">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
                </div>
            </main>
        </>
    )
}
export default Register;