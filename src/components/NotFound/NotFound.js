import './NotFound.css';

function NotFound({ goBack }) {
    return (
        <main className="not-found">
            <div className='not-found__container'>
                <p className="not-found__number">404</p>
                <p className="not-found__info">Страница не найдена</p>
                <button onClick={goBack} className="not-found__link">Назад</button>
            </div>
        </main>
    )
}
export default NotFound;