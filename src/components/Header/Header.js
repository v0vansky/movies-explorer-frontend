import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__logo" />
            </Link>
            {props.children}
{/*             <nav className='header__menu'>
                {props.loggedIn
                ? <>
                        <Link to="/movies" className="header__movies">Фильмы</Link>
                        <Link to="/saved-movies" className="header__saved">Сохранённые фильмы</Link>
                        <Link to="/profile" className="header__user">Аккаунт
                            <div className="header__user-icon"></div>
                        </Link>
                    </>
                : <>
                        <Link to="/sign-up" className="header__register">Регистрация</Link>
                        <Link to="/sign-in">
                            <button type="button" className="header__button">Войти</button>
                        </Link>
                    </>
                }
            </nav> */}
        </header>
    )
}
export default Header;