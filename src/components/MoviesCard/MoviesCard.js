import React from 'react';
import './MoviesCard.css';

function MoviesCard({
  userMovies,
  movie,
  saved,
  isSavedMovies,
  onMovieSave,
  onMovieDelete
}) {
  const image = isSavedMovies ? `${movie.image}` : `https://api.nomoreparties.co${movie.image.url}`;
  
  function handleClick() {
    if (saved) {
      onMovieDelete(userMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onMovieSave(movie);
    }
  }

  function handleDelete() {
      onMovieDelete(movie);
  }

  return (
    <li className='movies__card'>
      <div className='movies__card-info'>
        <h2 className='movies__card-title'>{movie.nameRU}</h2>
        <p className='movies__card-duration'>{`${movie.duration} мин`}</p>
      </div>
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className='movies__card-image'
          src={image}
          alt={movie.nameRU}
        />
      </a>
      {isSavedMovies? (
        <button
          type='button'
          className='movies__card-button movies__card-button_type_delete'
          onClick={handleDelete}/>
      ):(
        <button
          type='button'
          className={`movies__card-button${saved ? ' movies__card-button_type_saved' : ''}`}
          onClick={handleClick}
        >
          Сохранить
        </button>
      )}
    </li>
  );
};

export default MoviesCard;