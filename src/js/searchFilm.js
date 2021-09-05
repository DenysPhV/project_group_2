import { inputText, galleryContainer, searchForm, notification } from './refs.js';
import { cardsMarkUp } from './cards-mark-up';
import ApiService from './apiService';
import Pagination from 'tui-pagination';
import { options } from './pagination';
import currentMovies from './currentMovies.js';

const pagination = new Pagination('#tui-pagination-container', options);
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
    apiService.fetchMovies(1).then(res => {
      if (res.total_results === 0) {
        notification.textContent = `No results were found for "${inputFilm}".`;
        inputText.value = '';
        return;
      }
      resetSearch();
      pagination.reset(res.total_pages);
      cardsMarkUp(res.results);
    });
  }
  inputText.value = '';
}

pagination.on('afterMove', e => {
  window.scrollTo(scrollX, 0);
  const currentPage = e.page;
  resetSearch();
  apiService.fetchMovies(currentPage).then(res => {
    cardsMarkUp(res.results);
    currentMovies.movies = res.results;
  });
});

function resetSearch() {
  galleryContainer.innerHTML = '';
}
