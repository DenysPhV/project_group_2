import { inputText, galleryContainer, searchForm, notification } from './refs.js';
import ApiService from './apiService';
import { cardsMarkUp } from './cards-mark-up';
import currentMovies from './currentMovies.js';

const apiService = new ApiService();

searchForm.addEventListener('submit', searchMovie);

function searchMovie(event) {
  let inputFilm = '';
  event.preventDefault();
  const inputValue = inputText.value;
  inputFilm = inputValue.replace(/\s+/g, ' ').trim();

  if (inputFilm.length === 0) {
    return (notification.textContent =
      'No matches found for your query. Enter the correct movie name.');
  }

  apiService.query = inputFilm;

  if (inputFilm) {
    notification.textContent = '';
    apiService
      .fetchMovies()
      .then(data => {
        console.log(data);
        if (data.length === 0) {
          notification.textContent = `No results were found for "${inputFilm}".`;
          inputText.value = '';
          return;
        }
        resetSearch();
        currentMovies.movies = data;
        return data;
      })
      .then(cardsMarkUp);
  }
  inputText.value = '';
}

function resetSearch() {
  galleryContainer.innerHTML = '';
}
