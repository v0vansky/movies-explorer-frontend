import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <ul className='footer__container'>
                    <li className='footer__text'>© 2023</li>
                    <li className='footer__text'>
                        <a href='https://praktikum.yandex.ru/' className='footer__link' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</a>
                    </li>
                    <li className='footer__text'>
                        <a href='https://github.com/v0vansky/' className='footer__link' target='_blank' rel='noopener noreferrer'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
      );
}
export default Footer;