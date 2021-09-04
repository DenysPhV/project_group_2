// Скрипт отвечает за отрисовку главной страницы по клику на кнопку HOME и ЛОГО

import ApiService from './apiService';
import { homeBtnEl, logoEl, libBtnEl, headerEl, inputWrapEl } from './refs.js';
import { cardsMarkUp } from './cards-mark-up';
import { renderLibHeaderOnClick } from './libBtnRenderHeader';

const apiService = new ApiService();

export const renderMainPageOnClick = e => {
  e.preventDefault();
  homeBtnEl.classList.add('nav-menu__btn_active');
  libBtnEl.classList.remove('nav-menu__btn_active');
  headerEl.classList.replace('header__lib-bg-js', 'header__main-bg-js');
  inputWrapEl.classList.add('input-wrap_searchIcon');
  homeBtnEl.style.color = '#ffffff';
  apiService.resetPage();
  apiService
    .fetchTrending()
    .then(data => {
      console.log(data);
      return data;
    })
    .then(cardsMarkUp);

  homeBtnEl.removeEventListener('click', renderMainPageOnClick);
  logoEl.removeEventListener('click', renderMainPageOnClick);
  libBtnEl.addEventListener('click', renderLibHeaderOnClick);
};

export const renderInputOnClick = () => {
  const inputMarkup = '<input class="header__input" type="text" placeholder="Search movies" />';
  inputWrapEl.innerHTML = inputMarkup;
  homeBtnEl.removeEventListener('click', renderInputOnClick);
  logoEl.removeEventListener('click', renderInputOnClick);
};

const resetDefaultSet = e => {
  e.preventDefault();
};

const remoldColor = () => {
  homeBtnEl.style.color = '#ffffff';
};

logoEl.addEventListener('click', resetDefaultSet);
homeBtnEl.addEventListener('click', remoldColor);
libBtnEl.addEventListener('click', renderLibHeaderOnClick);
