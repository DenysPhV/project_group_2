import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
// import ApiService from './apiService';
import modalFilmBox from './modal-film';
import currentMovies from './currentMovies.js';

// const apiService = new ApiService();

// apiService.fetchTrending(1).then(cards => {
//   cards.results.map(card => (card.release_date = card.release_date.substring(0, 4)));
//   cardsMarkUp(cards.results);

//   modalFilmBox();

//   currentMovies.movies = cards.results;
// });
// function renderGallery(data) {
//   galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(data));
// }
export function cardsMarkUp(cards) {
  cards.map(card => (card.release_date = card.release_date.substring(0, 4)));
  galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
  modalFilmBox();

  currentMovies.movies = cards;
}
