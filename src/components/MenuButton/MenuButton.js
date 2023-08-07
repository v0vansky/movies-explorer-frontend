import './MenuButton.css';

function MenuButton({handleClick}) {
    return (
        <button className='header__menu-button' onClick={handleClick} type='button'>
            <span className='header__menu-button-icon' />
        </button>
    );
};

export default MenuButton;