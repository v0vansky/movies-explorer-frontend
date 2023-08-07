import './AboutProject.css';
import Describer from '../Describer/Describer';

function AboutProject() {
    return (
        <section className="project" id='project'>
            <Describer text="О проекте" />
            <div className='project__info-container'>
                <div className='project__info'>
                    <h3 className='project__info-text'>Дипломный проект включал 5&nbsp;этапов</h3>
                    <p className='project__info-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='project__info'>
                    <h3 className='project__info-text'>На выполнение диплома ушло 5&nbsp;недель</h3>
                    <p className='project__info-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='project__timeline'>
                <p className='project__timeline-time'>1 неделя</p>
                <p className='project__timeline-time'>4 недели</p>
                <p className='project__timeline-result'>Back-end</p>
                <p className='project__timeline-result'>Front-end</p>
            </div>
        </section>
    )
}
export default AboutProject;