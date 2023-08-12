import React from "react";
import './Register.css';
import { Link } from "react-router-dom";

function Register(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
/*         props.onRegister(name, email, password); */
    }

    return (
        <>
            <main className='register'>
                <div className="register__container">
                    <Link to="/" className="register__logo" />
                    <h1 className='register__title'>Добро пожаловать!</h1>
                    <form className="register__form" onSubmit={handleSubmit}>
                        <div className="register__inputs">
                            <label className="register__input-label" for="name">Имя</label>
                            <div className="register__input-container">
                                <input
                                    className="register__input"
                                    value={name || ""}
                                    onChange={(e) => {setName(e.target.value)}}
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="off" />
                            </div>
                            <label className="register__input-label">E-mail</label>
                            <div className="register__input-container">
                                <input
                                    className="register__input"
                                    value={email || ""}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="off" />
                            </div>
                            <label className="register__input-label">Пароль</label>
                            <div className="register__input-container">
                                <input
                                    className="register__input"
                                    value={password || ""}
                                    onChange={(e) => {setPassword(e.target.value)}}
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="off" />
                                <span className="register__error register__error_type_password-input-error">Что-то пошло не так...</span>
                            </div>
                        </div>
                        <button className="register__submit-button" type="submit" >Зарегистрироваться</button>
                    </form>
                    <p className="register__link-text">Уже зарегистрированы? <Link to="/sign-in" className="register__link">Войти</Link></p>
                </div>
            </main>
        </>
    )
}
export default Register;