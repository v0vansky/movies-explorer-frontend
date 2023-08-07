import './Header.css';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo" />
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