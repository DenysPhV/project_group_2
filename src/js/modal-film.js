import { galleryContainer, modalContainer, body} from './refs.js';
import modalFilmTemplate from '../templates/modal-film.hbs';
import ApiService from './apiService';

const apiService = new ApiService()

  
export default function modalFilmBox() {
galleryContainer.addEventListener('click', onClick);
}
// Функция отработки нажатия мышки
function onClick(event) {
  
 event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    const filmId = event.target.dataset.id;
  // console.log(filmId);

  // Запрос по id на сервер
  apiService.fetchMovieDetails(filmId).then(card => {
    console.log(card);
    // Проверяет количество жаров 
    if (card.genres.length > 3) {
      card.genres = card.genres.slice(0, 3);
    }

    
    // Запуск функции рендер модалки
    modalMarkUp(card);
    // Запуск функции открытия модалки
    modalOpenClick();
    });
    
}

// Функция рендеринг модалки
function modalMarkUp(card) {
  modalContainer.insertAdjacentHTML('beforeend', modalFilmTemplate(card));
}

// Функция открытия модалки
function modalOpenClick() {
  // Добавляем стиль is-open
  modalContainer.classList.add("is-open");
    // Добавляем стиль modal-open - блокировка скрола
  body.classList.add("modal-open");
  // Снимаем слушатель с галереи
  galleryContainer.removeEventListener('click', onClick);
  // Ставим слушатель на кнопку Close
  const modalBtnClose = document.querySelector('.close__button');
  modalBtnClose.addEventListener('click', modalClose);
}

// Функция закрытия модалки
function modalClose() {
  // Удаляем стиль is-open
  modalContainer.classList.remove("is-open");
    // Удаляем стиль modal-open 
  body.classList.remove("modal-open");
  // Снимаем слушатель с кнопки Close
  const modalBtnClose = document.querySelector('.close__button');
  modalBtnClose.removeEventListener('click', modalClose);
  // Ставим слушатель на галерею
  galleryContainer.addEventListener('click', onClick);
  // Чистим модалку 
  modalContainer.innerHTML = '';
}