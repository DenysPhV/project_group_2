import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';
import modalFilmBox from './modal-film';
import currentMovies from './currentMovies.js';

export function cardsMarkUp(cards) {
  // console.log('cards', cards);
  const apiService = new ApiService();

  // проверка есть ли жанры в локал сторедж
  // if (JSON.parse(localStorage.getItem('genres'))) {
  if (localStorage.getItem('genres')) {
    changeCards(cards);
    formationGallery(cards);
    modalFilmBox();
    currentMovies.movies = cards;
  } else {
    // Запрос списка жанров
    apiService.fetchGenre().then((genres) => {
      localStorage.setItem('genres', JSON.stringify(genres));
      changeCards(cards);
      formationGallery(cards);
      modalFilmBox();
      currentMovies.movies = cards;
    });
  }
}

function changeCards(cards) {
  const filmGenres = localStorage.getItem('genres');
  const parsedFilmGenres = JSON.parse(filmGenres);
  cards.forEach((card, i) => {
    // Проверка бага BackEnd в release_date
    if (card.release_date) {
      card.release_date = card.release_date.substring(0, 4);
    } else {
      // console.log(i, card.release_date);
      card.release_date = 'N/A';
    }
    // Проверка бага BackEnd в card.genre_ids
    if (card.genre_ids) {
      if (card.genre_ids.length === 0) {
        card.genre_ids.push('N/A');
      }
      // Обрезаем жанры
      if (card.genre_ids.length > 3) {
        card.genre_ids = card.genre_ids.slice(0, 3);
        card.genre_ids.push(' Other');
      }
      // Подменяем названия в genre_ids

      card.genre_ids.forEach((genre, index) => {
        parsedFilmGenres.forEach((genrCard) => {
          if (genrCard.id === genre) card.genre_ids[index] = ' ' + genrCard.name;
        });
      });
    } else {
      card.genre_ids = ['N/A'];
    }
  });
  // console.log('--->', cards);
  return cards;
}

function formationGallery(cards) {
  // Рендер галереи
  galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}
