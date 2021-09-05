// Скрипт отвечает за отрисовку главной страницы по клику на кнопку HOME и ЛОГО

import ApiService from './apiService';
import { homeBtnEl, logoEl, libBtnEl, headerEl, searchForm, galleryContainer } from './refs.js';
import { cardsMarkUp } from './cards-mark-up';
import { renderLibHeaderOnClick } from './libBtnRenderHeader';
import currentMovies from './currentMovies';

const apiService = new ApiService();

export const renderMainPageOnClick = e => {
  galleryContainer.innerHTML = '';
  e.preventDefault();
  homeBtnEl.classList.add('nav-menu__btn_active');
  libBtnEl.classList.remove('nav-menu__btn_active');
  headerEl.classList.replace('header__lib-bg-js', 'header__main-bg-js');
  searchForm.classList.add('input-wrap_searchIcon');

  libBtnEl.classList.add('nav-menu__btn_hover');

  apiService
    .fetchTrending(1)
    .then(data => {
      currentMovies.movies = data.results; //MK
      return data.results;
    })
    .then(cardsMarkUp);

  homeBtnEl.removeEventListener('click', renderMainPageOnClick);
  libBtnEl.addEventListener('click', renderLibHeaderOnClick);
};

export const renderInputOnClick = () => {
  const inputMarkup = '<input class="header__input" type="text" placeholder="Search movies" />';
  searchForm.innerHTML = inputMarkup;
  homeBtnEl.removeEventListener('click', renderInputOnClick);
  logoEl.removeEventListener('click', renderInputOnClick);
};

const resetDefaultSet = e => {
  e.preventDefault();
};

logoEl.addEventListener('click', resetDefaultSet);
logoEl.addEventListener('click', renderMainPageOnClick);
