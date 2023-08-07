import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <main className="not-found">
            <div className='not-found__container'>
                <p className="not-found__number">404</p>
                <p className="not-found__info">Страница не найдена</p>
                <Link to="/" className="not-found__link">Назад</Link>
            </div>
        </main>
    )
}
export default NotFound;