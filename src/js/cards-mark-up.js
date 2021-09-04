import refs from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';
import modalFilmBox from './modal-film';

const apiService = new ApiService();



apiService.fetchTrending().then(cards => {
    cardsMarkUp(cards);
    modalFilmBox();
}); 


function cardsMarkUp (cards) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}