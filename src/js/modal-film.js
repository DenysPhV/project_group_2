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

    apiService.fetchMovieDetails(filmId).then(card => {
    modalMarkUp(card)
    });
    
}

function modalMarkUp() {
refs.galleryContainer.insertAdjacentHTML('beforeend', modalFilmTemplate(card));
}