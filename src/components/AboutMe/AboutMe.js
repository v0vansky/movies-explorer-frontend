import './AboutMe.css';
import Describer from '../Describer/Describer';
import Portfolio from '../Portfolio/Portfolio';
import Photo from '../../images/student-photo.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <Describer text="Студент" />
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <div>
                        <h3 className='about-me__name'>Виталий</h3>
                        <p className='about-me__about'>Фронтенд-разработчик, 30 лет</p>
                        <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                        У&nbsp;меня есть жена и дочь. Я&nbsp;люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                        С&nbsp;2015 года работал в компании «СКБ Контур». После&nbsp;того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                    </div>
                    <a className='about-me__link' href='https://github.com/v0vansky/' target='_blank' rel='noopener noreferrer'>
                        Github
                    </a>
                </div>
                <img className='about-me__photo' src={Photo} alt='Фото студента' />
            </div>
            <Portfolio />
        </section>
    )
}
export default AboutMe;