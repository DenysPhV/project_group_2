import { inputText, galleryContainer, searchForm } from './refs.js';
import ApiService from './apiService';
import { cardsMarkUp } from './cards-mark-up';

const apiService = new ApiService();

searchForm.addEventListener('submit', searchMovie);

function searchMovie(event) {
  let inputFilm = '';
  event.preventDefault();
  const inputValue = inputText.value;
  inputFilm = inputValue.replace(/\s+/g, ' ').trim();

  if (inputFilm.length === 0) {
    return alert('No matches found for your query. Enter the correct movie name.');
  }

  apiService.query = inputFilm;

  if (inputFilm) {
    apiService
      .fetchMovies()
      .then(data => {
        console.log(data);
        if (data.length === 0) {
          alert(`No results were found for "${inputFilm}".`);
          inputText.value = '';
          return;
        }
        resetSearch();
        return data;
      })
      .then(cardsMarkUp);
  }
  inputText.value = '';
}

function resetSearch() {
  galleryContainer.innerHTML = '';
}
