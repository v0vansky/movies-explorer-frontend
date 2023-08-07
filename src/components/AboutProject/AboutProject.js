import './AboutProject.css';
import Describer from '../Describer/Describer';

function AboutProject() {
    return (
        <section className="about-project" id='about-project'>
            <div className='about-project__content'>
                <Describer text="О проекте" />
                <div className='about-project__info-container'>
                    <div className='about-project__info'>
                        <h3 className='about-project__info-text'>Дипломный проект включал 5&nbsp;этапов</h3>
                        <p className='about-project__info-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='about-project__info'>
                        <h3 className='about-project__info-text'>На выполнение диплома ушло 5&nbsp;недель</h3>
                        <p className='about-project__info-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className='about-project__timeline'>
                    <p className='about-project__timeline-time'>1 неделя</p>
                    <p className='about-project__timeline-time'>4 недели</p>
                    <p className='about-project__timeline-result'>Back-end</p>
                    <p className='about-project__timeline-result'>Front-end</p>
                </div>
            </div>
        </section>
    )
}
export default AboutProject;