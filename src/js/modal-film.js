import { galleryContainer, modalContainer, body } from './refs.js';
import modalFilmTemplate from '../templates/modal-film.hbs';
import ApiService from './apiService';
import { watchedBtnLogic, queueBtnLogic } from './localStorageBtns';
import videoTemplate from '../templates/video.hbs'
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
  const filmId = event.target.dataset.id;
  // console.log("filmId", filmId);

  // Запрос по id на сервер
  apiService.fetchMovieDetails(filmId).then((card) => {
  //  console.log(card);
    // Проверяет количество жаров
    if (card.genres.length > 3) {
      card.genres = card.genres.slice(0, 3);
      card.genres.push({ id: 0, name: 'and other' });
    }
    // Проверяет пришол ли постер фильма
    card.poster_path != null
      ? (card.poster_path = 'https://www.themoviedb.org/t/p/w300' + card.poster_path)
      : (card.poster_path =
          'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png');
   // console.log(card.poster_path);
    // Запуск функции рендер модалки
    modalMarkUp(card);
    // Запуск функции открытия модалки
    modalOpenClick();
})  
  
}

// Функция рендеринг модалки
function modalMarkUp(card) {
  modalContainer.insertAdjacentHTML('beforeend', modalFilmTemplate(card));
}

// Функция открытия модалки
function modalOpenClick() {
  // Добавляем стиль is-open
  modalContainer.classList.add('is-open');
  // Добавляем стиль modal-open - блокировка скрола
  body.classList.add('modal-open');
  // Снимаем слушатель с галереи
  galleryContainer.removeEventListener('click', onClick);
  // Ставим слушатель на кнопку Close
  const modalBtnClose = document.querySelector('.close__button');
  modalBtnClose.addEventListener('click', modalClose);
  // Ставим слушатель на Overlay
  const refsOverlay = document.querySelector('.modal__backdrop');
  refsOverlay.addEventListener('click', overlayClick);
  // Ставим слушатель нажатых клавиш
  window.addEventListener('keydown', pressKey);



  watchedBtnLogic();
  queueBtnLogic();
  playMovieMarkUp();
}

// Функция закрытия модалки
function modalClose() {
  // Удаляем стиль is-open
  modalContainer.classList.remove('is-open');
  // Удаляем стиль modal-open
  body.classList.remove('modal-open');
  // Снимаем слушатель с кнопки Close
  const modalBtnClose = document.querySelector('.close__button');
  modalBtnClose.removeEventListener('click', modalClose);
  // Снимаем слушатель overlay
  const refsOverlay = document.querySelector('.modal__backdrop');
  refsOverlay.removeEventListener('click', overlayClick);
  // Снимаем слушатель клавиш
  window.removeEventListener('keydown', pressKey);
  // Ставим слушатель на галерею
  galleryContainer.addEventListener('click', onClick);
  // Чистим модалку
  modalContainer.innerHTML = '';
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




function playMovieMarkUp(event) {
   const watchMovie = document.querySelector('.film__btnQueue');
  watchMovie.addEventListener('click', playMovieMarkUp);

  const movieId = watchMovie.dataset.id
  apiService.fetchVideo(movieId).then((card) => {
    const key = card[0].key;

 
    return key
  }).then(
    key => {
      const modalContainer = document.querySelector('.modal__container');
      modalContainer.insertAdjacentHTML('beforeend', videoTemplate(key));

    }
  
  )
 
}
 



