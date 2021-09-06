import { galleryContainer } from './refs.js';
import cardsTemplate from '../templates/cards.hbs';
import ApiService from './apiService';
import modalFilmBox from './modal-film';
import currentMovies from './currentMovies.js';

// const apiService = new ApiService();

// apiService.fetchTrending(1).then(cards => {
//   cards.results.map(card => (card.release_date = card.release_date.substring(0, 4)));
//   cardsMarkUp(cards.results);

//   modalFilmBox();

//   currentMovies.movies = cards.results;
// });
// function renderGallery(data) {
//   galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(data));
// }

export function cardsMarkUp(cards) {
  const apiService = new ApiService();

  apiService.fetchGenre().then(genres => {
    // console.log(genres);
    localStorage.setItem('genres', JSON.stringify(genres));
  });
  // Читаем из локал сторадж
  const savedSettings = localStorage.getItem('genres');
  const parsedSettings = JSON.parse(savedSettings);
  console.log(cards);
  cards.forEach((card, i) => {
    card.release_date = card.release_date.substring(0, 4);
    // Обрезаем жанры
    if (card.genre_ids.length > 3) {
      card.genre_ids = card.genre_ids.slice(0, 3);
    }

    card.genre_ids.forEach((genre, index) => {
      parsedSettings.forEach(genrCard => {
        if (genrCard.id === genre) card.genre_ids[index] = genrCard.name;
      });
    });
  });
  galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(cards));
  modalFilmBox();
  currentMovies.movies = cards;
}
