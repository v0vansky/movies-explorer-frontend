import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <main className="notfound">
            <div className='notfound__container'>
                <p className="notfound__number">404</p>
                <p className="notfound__info">Страница не найдена</p>
                <Link to="/" className="notfound__link">Назад</Link>
            </div>
            
        </main>
    )
}
export default NotFound;