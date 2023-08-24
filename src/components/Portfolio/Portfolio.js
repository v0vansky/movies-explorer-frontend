import './Portfolio.css';

function Portfolio() {
    return (
        <>
            <h4 className='about-me__portfolio-title'>Портфолио</h4>
            <ul className='about-me__portfolio-list'>
                <li className='about-me__portfolio-link-container'>
                    <a href='https://v0vansky.github.io/how-to-learn/' className='about-me__portfolio-link' target='_blank' rel='noopener noreferrer'>
                        Статичный сайт
                        <span>↗</span>
                    </a>
                </li>
                <li className='about-me__portfolio-link-container'>
                    <a href='https://v0vansky.github.io/russian-travel/index.html' className='about-me__portfolio-link' target='_blank' rel='noopener noreferrer'>
                        Адаптивный сайт
                        <span>↗</span>
                    </a>
                </li>
                <li className='about-me__portfolio-link-container'>
                    <a href='https://mesto.vovansky.nomoredomains.work/' className='about-me__portfolio-link' target='_blank' rel='noopener noreferrer'>
                        Одностраничное приложение
                        <span>↗</span>
                    </a>
                </li>
                <li className='about-me__portfolio-link-container'>
                    <a href='https://www.youtube.com/playlist?list=PLcqj1VGA8xz0e3OP-AjEVeZuRiqZfLThb' className='about-me__portfolio-link' target='_blank' rel='noopener noreferrer'>
                        Видео-портфолио на YouTube
                        <span>↗</span>
                    </a>
                </li>
            </ul>
        </>
    )
}
export default Portfolio;