import './Promo.css';
import LandingLogo from '../../images/landing-logo.png'

function Promo() {
    return (
        <section className="promo">
            <div className='promo__content'>
                <img className="promo__image" src={LandingLogo} alt="картинка web-планеты" />
                <h1 className="promo__text">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href='#about-project'>
                    <button className="promo__button" type="button">Узнать больше</button>
                </a>
            </div>
        </section>
    )
}
export default Promo;