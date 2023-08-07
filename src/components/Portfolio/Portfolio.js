import './Portfolio.css';

function Portfolio() {
    return (
        <>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__link-container'>
                    <a href='https://v0vansky.github.io/how-to-learn/' className='portfolio__link' target='_blank' rel='noopener noreferrer'>
                        Статичный сайт
                        <span>↗</span>
                    </a>
                </li>
                <li className='portfolio__link-container'>
                    <a href='https://v0vansky.github.io/russian-travel/index.html' className='portfolio__link' target='_blank' rel='noopener noreferrer'>
                        Адаптивный сайт
                        <span>↗</span>
                    </a>
                </li>
                <li className='portfolio__link-container'>
                    <a href='https://mesto.vovansky.nomoredomains.work/' className='portfolio__link' target='_blank' rel='noopener noreferrer'>
                        Одностраничное приложение
                        <span>↗</span>
                    </a>
                </li>
            </ul>
        </>
    )
}
export default Portfolio;