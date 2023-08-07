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
            <div className={`navigation ${isOpen && 'open'}`} onClick={closeMenu}>
                <nav className='navigation__menu' onClick={e => e.stopPropagation()}>
                <div className='navigation__wrapper'>
                    <button type='button' className='navigation__close' onClick={closeMenu}>
                        <span className='navigation__close-icon' />
                    </button>
                    <NavLink
                        to='/'
                        end
                        className={({ isActive }) => `navigation__nav-link navigation__nav-link_type_home ${isActive && 'active'}`}
                        >
                        Главная
                    </NavLink>
                    <NavLink
                        to='/movies'
                        end
                        className={({ isActive }) => `navigation__nav-link ${isActive && 'active'}`}
                        onClick={closeMenu}
                        >
                        Фильмы
                    </NavLink>
                    <NavLink
                        to='/saved-movies'
                        className={({ isActive }) => `navigation__nav-link ${isActive && 'active'}`}
                        onClick={closeMenu}
                        >
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <NavLink
                    to='/profile'
                    className={({ isActive }) => `navigation__nav-link ${isActive && 'active'}`}
                >
                    Аккаунт
                    <span className='navigation__profile' />
                </NavLink>
                </nav>
            </div>
        </>
    );
};

export default Navigation;