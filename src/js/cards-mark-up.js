import refs from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';

const apiService = new ApiService();



apiService.fetchTrending().then(cards => {
    cardsMarkUp(cards)
}); 


function cardsMarkUp (cards) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}