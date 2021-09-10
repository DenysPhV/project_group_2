import { onWatchedBtnClick, createCards } from './myLibraryBtns.js';
import ApiService from './apiService.js';
import { libBtnEl } from './refs';

const apiService = new ApiService();

function renderWatchCard() {
  let arrWatchId = [];

  if (onWatchedBtnClick('watched')) {
    arrWatchId = onWatchedBtnClick('watched');
  }

  const arrAllId = [...arrWatchId];

  for (let id of arrAllId) {
    apiService.fetchMovieDetails(id).then((data) => {
      // console.log(id);
      createCards(data);
    });
  }
}

libBtnEl.addEventListener('click', renderWatchCard);
