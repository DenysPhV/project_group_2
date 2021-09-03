import './sass/main.scss';
import './js/pagination';



// ============== Импорт на pnotify ===================
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import { error } from '@pnotify/core';

// ================= debounce ==========================
// const debounce = require('lodash.debounce');

import ApiService from './js/apiService';
import cardsTemplate from './templates/cards.hbs';
import refs from './js/refs.js'


const apiService = new ApiService();

apiService.fetchTrending().then(cards => {
    cardsMarkUp(cards)
});


function cardsMarkUp (cards) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}