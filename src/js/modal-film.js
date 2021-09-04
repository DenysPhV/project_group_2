import refs from './refs';
import modalFilmTemplate from '../templates/modal-film.hbs';
import ApiService from './apiService';

const apiService = new ApiService()

  
export default function modalFilmBox() {
refs.galleryContainer.addEventListener('click', onClick);
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
    // console.log(card);
    // Запуск функции рендер модалки
    modalMarkUp(card);
    // Запуск функции открытия модалки
    modalOpenClick();
    });
    
}

// Функция рендеринг модалки
function modalMarkUp(card) {
  refs.modalContainer.insertAdjacentHTML('beforeend', modalFilmTemplate(card));
}

// Функция открытия модалки
function modalOpenClick() {
  // Добавляем стиль is-open
  refs.modalContainer.classList.add("is-open");
  // Снимаем слушатель с галереи
  refs.galleryContainer.removeEventListener('click', onClick);
  // Ставим слушатель на кнопку Close
  const modalBtnClose = document.querySelector('.close__button');
  modalBtnClose.addEventListener('click', modalClose);
}

// Функция закрытия модалки
function modalClose() {
  // Удаляем стиль is-open
  refs.modalContainer.classList.remove("is-open");
  // Снимаем слушатель с кнопки Close
  const modalBtnClose = document.querySelector('.close__button');
  modalBtnClose.removeEventListener('click', modalClose);
  // Ставим слушатель на галерею
  refs.galleryContainer.addEventListener('click', onClick);
  // Чистим модалку 
  refs.modalContainer.innerHTML = '';
}