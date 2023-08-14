class MainApi {
  constructor(options) {
    this._url = options.url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkResponse(res));
  }

  signin(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    }).then((res) => this._checkResponse(res));
  }

  checkToken(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => this._checkResponse(res));
  }

  getMovies() {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  saveMovie(data) {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: 'https://api.nomoreparties.co' + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteMovie(movieId) {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  getUserInfo() {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  patchUserInfo(name, email) {
    const jwt = localStorage.getItem("jwt");
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }).then((res) => this._checkResponse(res));
  }
}

export const mainApi = new MainApi({
  url: "https://api.vsmovies.nomoredomains.xyz",
});
