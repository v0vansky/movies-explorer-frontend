import React from "react";
import '../Register/Register.css';
import { Link } from "react-router-dom";
import { validate } from "react-email-validator";

function Login(props) {
    const [values, setValues] = React.useState({ email: '' });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
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
        if (!validate(values.email) && (values.email.length > 0)) {
            setIsValid(false);
            setEmailTest(false);
        } else if ((values.email.length === 0) || (validate(values.email))) {
            setEmailTest(true);
        }
    }, [values.email]);

    const resetForm = React.useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
            setEmailTest(true);
        },
        [setValues, setErrors, setIsValid]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogin(values.email, values.password);
        resetForm();
    }

    return (
        <>
            <main className='register'>
                <div className="register__container">
                    <Link to="/" className="register__logo" />
                    <h1 className='register__title'>Рады видеть!</h1>
                    <form className="register__form" onSubmit={handleSubmit}>
                        <div className="register__inputs">
                            <label className="register__input-label" htmlFor="email">E-mail</label>
                            <div className="register__input-container">
                                <input
                                    className={`register__input${errors.email || !emailTest ? ' register__input_invalid' : ''}`}
                                    value={values.email || ""}
                                    onChange={handleChange}
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="off" />
                                    <span className="register__error">{!emailTest ? 'Введите корректный E-Mail' : errors.email}</span>
                            </div>
                            <label className="register__input-label" htmlFor="password">Пароль</label>
                            <div className="register__input-container">
                                <input
                                    className={`register__input${errors.password ? ' register__input_invalid' : ''}`}
                                    value={values.password || ""}
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="off" />
                                <span className="register__error">{errors.password}</span>
                            </div>
                        </div>
                        <button className={`register__submit-button${!isValid ? ' register__submit-button_disabled' : ''}`} type="submit" >Войти</button>
                    </form>
                    <p className="register__link-text">Ещё не зарегистрированы? <Link to="/sign-up" className="register__link">Регистрация</Link></p>
                </div>
            </main>
        </>
    )
}
export default Login;