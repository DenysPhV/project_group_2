import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';
import modalFilmBox from './modal-film';
import currentMovies from './currentMovies.js';

export function cardsMarkUp(cards) {
  const apiService = new ApiService();
  // Запрос списка жанров
  apiService.fetchGenre().then(genres => {
    cards.forEach((card, i) => {
      card.release_date = card.release_date.substring(0, 4);
      // Обрезаем жанры
      if (card.genre_ids.length > 3) {
        card.genre_ids = card.genre_ids.slice(0, 3);
      }
      // Подменяем названия в genre_ids
      card.genre_ids.forEach((genre, index) => {
        genres.forEach(genrCard => {
          if (genrCard.id === genre) card.genre_ids[index] = " " + genrCard.name; 
        });
      });
    });
    // Рендер галереи
    galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
    modalFilmBox();
    currentMovies.movies = cards;
  });
  // console.log(cards);
}
