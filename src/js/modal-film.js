import { galleryContainer, modalContainer, body } from './refs.js';
import modalFilmTemplate from '../templates/modal-film.hbs';
import ApiService from './apiService';
import { watchedBtnLogic, queueBtnLogic } from './localStorageBtns';
import videoTemplate from '../templates/video.hbs';
import currentMovies from './currentMovies.js';

const apiService = new ApiService();

export default function modalFilmBox() {
  galleryContainer.addEventListener('click', onClick);
}
// Функция отработки нажатия мышки
function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  galleryContainer.removeEventListener('click', onClick); // Снимаем слушатель с галереи
  const filmId = event.target.dataset.id;
  // console.log("filmId", filmId);

  // Запрос по id на сервер
  apiService.fetchMovieDetails(filmId).then((card) => {
    //  console.log(card);
    // Проверяет количество жаров
    if (card.genres.length > 3) {
      card.genres = card.genres.slice(0, 3);
      card.genres.push({ id: 0, name: ' Other' });
    }
    // Проверяет пришол ли постер фильма
    card.poster_path != null
      ? (card.poster_path = 'https://www.themoviedb.org/t/p/w300' + card.poster_path)
      : (card.poster_path =
          'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png');
    // console.log(card.poster_path);
    modalMarkUp(card); // Запуск функции рендер модалки
    modalOpenClick(); // Запуск функции открытия модалки
  });
}

// Функция рендеринг модалки
function modalMarkUp(card) {
  modalContainer.insertAdjacentHTML('beforeend', modalFilmTemplate(card));
}

// Функция открытия модалки
function modalOpenClick() {
  modalContainer.classList.add('is-open'); // Добавляем стиль is-open
  body.classList.add('modal-open'); // Добавляем стиль modal-open - блокировка скрола

  const modalBtnClose = document.querySelector('.close__button'); // Ставим слушатель на кнопку Close
  modalBtnClose.addEventListener('click', modalClose);

  const refsOverlay = document.querySelector('.modal__backdrop'); // Ставим слушатель на Overlay
  refsOverlay.addEventListener('click', overlayClick);

  window.addEventListener('keydown', pressKey); // Ставим слушатель нажатых клавиш

  const movieId = document.querySelector('.film__btnQueue').dataset.id;
  const moviePoster = document.querySelector('.film__imgBox'); //MK
  moviePoster.addEventListener('click', playMovieMarkUp); //MK

  apiService.fetchVideo(movieId).then((card) => {
    if (card.length === 0) {
      document.querySelector('.image__playIcon').remove();
      moviePoster.removeEventListener('click', playMovieMarkUp);
      moviePoster.style.cursor = 'unset';
    }
  });

  watchedBtnLogic();
  queueBtnLogic();

  function playMovieMarkUp() {
    moviePoster.removeEventListener('click', playMovieMarkUp);
    apiService
      .fetchVideo(movieId)
      .then((card) => {
        const key = card[0].key;
        return key;
      })
      .then((key) => {
        const modalContainer = document.querySelector('.modal__container');
        modalContainer.insertAdjacentHTML('beforeend', videoTemplate(key));
        modalContainer.lastElementChild.scrollIntoView({
          behavior: 'smooth',
        });
      });
  }
}

// Функция закрытия модалки
function modalClose() {
  modalContainer.classList.remove('is-open'); // Удаляем стиль is-open
  body.classList.remove('modal-open'); // Удаляем стиль modal-open

  const modalBtnClose = document.querySelector('.close__button'); // Снимаем слушатель с кнопки Close
  modalBtnClose.removeEventListener('click', modalClose);

  const refsOverlay = document.querySelector('.modal__backdrop'); // Снимаем слушатель overlay
  refsOverlay.removeEventListener('click', overlayClick);

  window.removeEventListener('keydown', pressKey); // Снимаем слушатель клавиш
  galleryContainer.addEventListener('click', onClick); // Ставим слушатель на галерею

  modalContainer.innerHTML = ''; // Чистим модалку
}

// Функция обработки Click на оверлей
function overlayClick(event) {
  if (event.currentTarget === event.target) {
    modalClose();
  }
}

// Фукция обработки нажатых клавиш
function pressKey(event) {
  if (event.key === 'Escape') {
    modalClose();
  }
}
