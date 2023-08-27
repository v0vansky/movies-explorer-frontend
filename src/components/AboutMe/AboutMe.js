import './AboutMe.css';
import Describer from '../Describer/Describer';
import Portfolio from '../Portfolio/Portfolio';
import Photo from '../../images/stenin.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <div className='about-me__content'>
                <Describer text="Студент" />
                <div className='about-me__container'>
                    <div className='about-me__info'>
                        <div>
                            <h3 className='about-me__name'>Владимир</h3>
                            <p className='about-me__about'>Фронтенд-разработчик, motion-дизайнер, монтажер, 29 лет</p>
                            <p className='about-me__text'>Я&nbsp;родился и живу в Екатеринбурге. 
                            10 лет работаю в сфере производства видео&#8209;контента. Увлекаюсь музыкой и DJ&#8209;ингом. Могу на коленке собрать качественный ролик. Недавно начал кодить и закончил курс web-разработчик в Практикуме.
                            </p>
                        </div>
                        <a className='about-me__link' href='https://github.com/v0vansky/' target='_blank' rel='noopener noreferrer'>
                            Github
                        </a>
                    </div>
                    <img className='about-me__photo' src={Photo} alt='Фото студента' />
                </div>
                <Portfolio />
            </div>
        </section>
    )
}
export default AboutMe;