import './Navigation.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuButton from '../MenuButton/MenuButton';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <MenuButton handleClick={() => setIsOpen(true)} />
            <div className={`header__navigation${isOpen ? ' header__navigation_open' : ''}`} onClick={closeMenu}>
                <nav className='header__nav-menu' onClick={e => e.stopPropagation()}>
                <div className='header__nav-wrapper'>
                    <button type='button' className='header__nav-close' onClick={closeMenu}>
                        <span className='header__nav-close-icon' />
                    </button>
                    <NavLink
                        to='/'
                        end
                        className={({ isActive }) => `header__nav-link header__nav-link_type_home${isActive ? ' header__nav-link_active' : ''}`}
                        >
                        Главная
                    </NavLink>
                    <NavLink
                        to='/movies'
                        end
                        className={({ isActive }) => `header__nav-link${isActive ? ' header__nav-link_active' : ''}`}
                        onClick={closeMenu}
                        >
                        Фильмы
                    </NavLink>
                    <NavLink
                        to='/saved-movies'
                        className={({ isActive }) => `header__nav-link${isActive ? ' header__nav-link_active' : ''}`}
                        onClick={closeMenu}
                        >
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <NavLink
                    to='/profile'
                    className={({ isActive }) => `header__nav-link${isActive ? ' header__nav-link_active' : ''}`}
                >
                    Аккаунт
                    <span className='header__nav-profile' />
                </NavLink>
                </nav>
            </div>
        </>
    );
};

export default Navigation;