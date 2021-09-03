import refs from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';

const apiService = new ApiService();



// apiService.fetchTrending().then(cards => {
//     const newCards = cards.map(card => card.release_date = card.release_date.substring(0, 4))
//     cardsMarkUp(cards);
// });

// apiService.fetchTrending().then(cards => {
//     cards.map(card => card.release_date = card.release_date.substring(0, 4));
//    return cardsMarkUp(cards);
// });


apiService.fetchTrending().then(cards => {
    cards.map(card => card.release_date = card.release_date.substring(0, 4));
    cardsMarkUp(cards);
});



function cardsMarkUp (cards) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}

