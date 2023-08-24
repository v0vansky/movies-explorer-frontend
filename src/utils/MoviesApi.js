class MoviesApi {
  constructor(options) {
    this._url = options.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies(){
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => this._checkResponse(res));
  }
}

export const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co",
})