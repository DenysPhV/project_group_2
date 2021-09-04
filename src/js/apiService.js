const API_KEY = '1c92945d7b9e8de66cf2b53b0344c946';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
  }
  // это fetch для запроса популярных фильмов  на главную страницу
  fetchTrending(page) {
    return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`)
      .then(r => r.json())
      .then(data => {
        return data;
      })
      .catch(error => console.log(error));
  }

  //это fetch для запроса детальной инфо о фильме
  fetchMovieDetails(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(r => r.json())
      .then(data => {
        return data;
      })
      .catch(error => console.log(error));
  }

  //это fetch для поиска фильмов по названию
  fetchMovies() {
    return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.searchQuery}`)
      .then(r => r.json())
      .then(data => {
        return data.results;
      })
      .catch(error => console.log(error));
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
