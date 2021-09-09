// Цей скрипт відповідає за добавленя фільмів з перглянутих або тих що в черзі на сторінку

import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import currentMovies from './currentMovies.js';

export { onWatchedBtnClick, onQueueBtnClick, createCards, onEmptyContainer };

function onWatchedBtnClick() {
  let cards = JSON.parse(localStorage.getItem('Watched'));
  if (!cards) {
    cards = [];
  }
  if (cards.length === 0) {
    onEmptyContainer('watched');
  } else {
    createCards(cards);
  }
}

function onQueueBtnClick() {
  let cards = JSON.parse(localStorage.getItem('Queued'));
  if (!cards) {
    cards = [];
  }
  if (cards.length === 0) {
    onEmptyContainer('queue');
  } else {
    createCards(cards);
  }
}

function createCards(cards) {
  galleryContainer.innerHTML = cardsTemplate(cards);
  currentMovies.movies = cards;
}

function onEmptyContainer(buttonNameStr) {
  galleryContainer.innerHTML = `<div class="empty-container-notification"><h2 class="empty-container-suptitle">Whoopse...</h2><h1 class="empty-container-title">There is no movies You added to ${buttonNameStr} yet.</h1></div>`;
}
