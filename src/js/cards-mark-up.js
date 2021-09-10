import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';
import modalFilmBox from './modal-film';
import currentMovies from './currentMovies.js';

export function cardsMarkUp(cards) {
  console.log('cards', cards);
  const apiService = new ApiService();

  // const filmGenres = localStorage.getItem('genres');
  // const parsedFilmGenres = JSON.parse(filmGenres);

  // проверка есть ли жанры в локал сторедж
  // if (JSON.parse(localStorage.getItem('genres'))) {
  if (localStorage.getItem('genres')) {
    // cards.forEach((card, i) => {
    //   // Проверка бага BackEnd в release_date
    //   if (card.release_date) {
    //     card.release_date = card.release_date.substring(0, 4);
    //   } else {
    //     // console.log(i, card.release_date);
    //     card.release_date = 'N/A';
    //   }
    //   if (card.genre_ids) {
    //     if (card.genre_ids.length === 0) {
    //       card.genre_ids.push('N/A');
    //     }
    //     // Обрезаем жанры
    //     if (card.genre_ids.length > 3) {
    //       card.genre_ids = card.genre_ids.slice(0, 3);
    //       card.genre_ids.push('other');
    //     }
    //     // Подменяем названия в genre_ids

    //     card.genre_ids.forEach((genre, index) => {
    //       parsedFilmGenres.forEach((genrCard) => {
    //         if (genrCard.id === genre) card.genre_ids[index] = ' ' + genrCard.name;
    //       });
    //     });
    //   } else {
    //     card.genre_ids = ['N/A'];
    //   }
    // });
    zamena(cards);
    // Рендер галереи
    // galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
    renderGallery(cards);
    modalFilmBox();
    currentMovies.movies = cards;
  } else {
    // Запрос списка жанров
    apiService.fetchGenre().then((genres) => {
      cards.forEach((card, i) => {
        // сохраняем в локал сторедж
        localStorage.setItem('genres', JSON.stringify(genres));
        // // форматируем дату
        // card.release_date = card.release_date.substring(0, 4);
        // // Обрезаем жанры
        // if (card.genre_ids.length > 3) {
        //   card.genre_ids = card.genre_ids.slice(0, 3);
        //   card.genre_ids.push('other');
        // }
        // // Подменяем названия в genre_ids
        // card.genre_ids.forEach((genre, index) => {
        //   genres.forEach((genrCard) => {
        //     console.log('genres', genres);
        //     if (genrCard.id === genre) card.genre_ids[index] = ' ' + genrCard.name;
        //   });
        // });
        zamena(cards);
      });
      // // Рендер галереи
      // galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
      renderGallery(cards);
      modalFilmBox();
      currentMovies.movies = cards;
    });
  }
}

function zamena(cards) {
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
    if (card.genre_ids) {
      if (card.genre_ids.length === 0) {
        card.genre_ids.push('N/A');
      }
      // Обрезаем жанры
      if (card.genre_ids.length > 3) {
        card.genre_ids = card.genre_ids.slice(0, 3);
        card.genre_ids.push('other');
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

function renderGallery(cards) {
  // Рендер галереи
  galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
}
