import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';
import modalFilmBox from './modal-film';

const apiService = new ApiService();

apiService.fetchTrending(1).then(cards => {
  cards.results.map(card => (card.release_date = card.release_date.substring(0, 4)));
  cardsMarkUp(cards.results);
  modalFilmBox();
});

export function cardsMarkUp(cards) {
  galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}
