import './Main.css';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

function Main({ loggedIn }) {
    return (
        <>
            <Header>
                { loggedIn ? (
                    <Navigation />
                ) : (
                    <nav className='header__menu'>
                        <Link to="/sign-up" className="header__register">Регистрация</Link>
                        <Link to="/sign-in" className="header__login">Войти</Link>
                    </nav>
                )}
            </Header>
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </>
    )
}
export default Main;