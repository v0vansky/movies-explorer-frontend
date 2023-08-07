import { useState } from 'react';
import './MoviesCard.css';

const MoviesCard = ({ name, duration, image, saved, savedPage }) => {
  const [savedMovie, setSavedMovie] = useState(saved);
  return (
    <li className='movies__card'>
      <div className='movies__card-info'>
        <h2 className='movies__card-title'>{name}</h2>
        <p className='movies__card-duration'>{duration}</p>
      </div>
      <img
        className='movies__card-image'
        src={image}
        alt={name}
      />
      {savedPage? (
        <button
          type='button'
          className='movies__card-button movies__card-button_type_delete'/>
      ):(
        <button
          type='button'
          className={`movies__card-button${savedMovie ? ' movies__card-button_type_saved' : ''}`}
          onClick={() => setSavedMovie(!savedMovie)}
        >
          Сохранить
        </button>
      )}
    </li>
  );
};

export default MoviesCard;