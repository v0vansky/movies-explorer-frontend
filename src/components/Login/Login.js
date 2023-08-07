import React from "react";
import '../Register/Register.css';
import { Link } from "react-router-dom";

function Login(props) {
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
                    <h1 className='register__title'>Рады видеть!</h1>
                    <form className="register__form" onSubmit={handleSubmit}>
                        <div className="register__inputs">
                            <span className="register__input-span">E-mail</span>
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
                            <span className="register__input-span">Пароль</span>
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
                        <button className="register__submit-button" type="submit" >Войти</button>
                    </form>
                    <p className="register__link-text">Ещё не зарегистрированы? <Link to="/sign-up" className="register__link">Регистрация</Link></p>
                </div>
            </main>
        </>
    )
}
export default Login;