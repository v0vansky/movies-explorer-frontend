import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__logo" />
            </Link>
            {props.children}
        </header>
    )
}
export default Header;