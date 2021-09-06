// Цей скрипт відповідає за добавленя фільмів з перглянутих або тих що в черзі на сторінку

import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import currentMovies from './currentMovies.js';

export { onWatchedBtnClick, onQueueBtnClick, createCards };

function onWatchedBtnClick() {
  const cards = JSON.parse(localStorage.getItem('Watched'));
  createCards(cards);
}

function onQueueBtnClick() {
  const cards = JSON.parse(localStorage.getItem('Queued'));
  createCards(cards);
}

function createCards(cards) {
  galleryContainer.innerHTML = cardsTemplate(cards);
  currentMovies.movies = cards;
}
