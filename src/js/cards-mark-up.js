import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';

const apiService = new ApiService();

apiService.fetchTrending().then(cards => {
  cardsMarkUp(cards);
});

export function cardsMarkUp(cards) {
  galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}
