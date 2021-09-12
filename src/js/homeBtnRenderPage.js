// Скрипт отвечает за отрисовку главной страницы по клику на кнопку HOME и ЛОГО

import ApiService from './apiService';
import { homeBtnEl, logoEl, libBtnEl, headerEl, searchForm, galleryContainer } from './refs.js';
import { cardsMarkUp } from './cards-mark-up';
import { renderLibHeaderOnClick } from './libBtnRenderHeader';
import currentMovies from './currentMovies';
import Pagination from 'tui-pagination';
import { options } from './pagination';
import { target, spinner } from './spinner.js';

const pagination = new Pagination('#tui-pagination-container', options);
const apiService = new ApiService();

export const renderMainPageOnClick = (e) => {
  galleryContainer.innerHTML = '';
  spinner.spin(target);
  e.preventDefault();
  homeBtnEl.classList.add('nav-menu__btn_active');
  libBtnEl.classList.remove('nav-menu__btn_active');
  headerEl.classList.replace('header__lib-bg-js', 'header__main-bg-js');
  searchForm.classList.add('input-wrap_searchIcon');

  libBtnEl.classList.add('nav-menu__btn_hover');

  apiService
    .fetchTrending(1)
    .then((data) => {
      currentMovies.movies = data.results; //MK
      pagination.reset(data.total_pages);
      return data.results;
    })
    .then(cardsMarkUp)
    .then(() => {
      spinner.stop();
    });

  pagination.on('afterMove', (e) => {
    spinner.spin(target);
    const currentPage = e.page;
    window.scrollTo(scrollX, 0);
    galleryContainer.innerHTML = '';
    apiService.fetchTrending(currentPage).then((data) => {
      cardsMarkUp(data.results);
      currentMovies.movies = data.results;
      setTimeout(() => spinner.stop(), 1000);
    });
  });

  homeBtnEl.removeEventListener('click', renderMainPageOnClick);
  libBtnEl.addEventListener('click', renderLibHeaderOnClick);
};

export const renderInputOnClick = () => {
  searchForm.innerHTML = '<input class="header__input" type="text" placeholder="Search movies" />';
  homeBtnEl.removeEventListener('click', renderInputOnClick);
  logoEl.removeEventListener('click', renderInputOnClick);
  searchIconShowToggle();
};

logoEl.addEventListener('click', renderMainPageOnClick);
searchIconShowToggle();

// Функция скрывает/отображает иконку поиска при событиях фокуса и потери фокуса соответственно
function searchIconShowToggle() {
  const inputEl = document.querySelector('.header__input');
  const clearSearchIcon = () => {
    searchForm.classList.remove('input-wrap_searchIcon');
  };
  const addSearchIcon = () => {
    searchForm.classList.add('input-wrap_searchIcon');
  };

  inputEl.addEventListener('focus', clearSearchIcon);
  inputEl.addEventListener('blur', addSearchIcon);
}
