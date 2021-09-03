import refs from './refs';
import modalFilmTemplate from '../templates/modal-film.hbs';
import ApiService from './apiService';

const apiService = new ApiService()

export default function modalFilmBox() {
refs.galleryContainer.addEventListener('click', onClick);
}

function onClick(event) {
    const filmRef = event.target;
 event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    const filmId = event.target.dataset.id;
  // console.log(event.target.dataset.id);
  apiService.fetchMovieDetails(filmId).then(card => {
    // console.log(card);
    modalMarkUp(card);
    modalOpenClick();
    });
    
}

function modalMarkUp(card) {
  refs.modalContainer.insertAdjacentHTML('beforeend', modalFilmTemplate(card));
}

// Функция открытия модалки
function modalOpenClick() {
  console.log('dsad')
  refs.modalContainer.classList.add("is-open");
}

// Функция закрытия модалки
function modalClose() {
  refs.modalContainer.classList.remove("is-open");
}