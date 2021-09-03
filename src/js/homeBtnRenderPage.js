// Скрипт отвечает за отрисовку главной страницы по клику на кнопку HOME и ЛОГО
console.log('Run myScript');

import ApiService from './apiService';
import { homeBtnEl, logoEl, galleryContainer } from './refs.js';
import { cardsMarkUp } from './cards-mark-up';

const apiService = new ApiService();

// const libBtnEl = document.querySelector('.lib-btn-js');

const renderMainPageOnClick = e => {
  console.log('click home-btn');
  e.preventDefault();
  homeBtnEl.classList.add('home-btn-active');
  homeBtnEl.style.color = '#ffffff';
  apiService.resetPage();
  apiService
    .fetchTrending()
    .then(data => {
      console.log(data);
      return data;
    })
    .then(cardsMarkUp);
};

// const resetMainPage = e => {
//   galleryContainer.innerHTML = '';
//   homeBtnEl.classList.remove('home-btn-active');
// };

homeBtnEl.addEventListener('click', renderMainPageOnClick);
logoEl.addEventListener('click', renderMainPageOnClick);

// libBtnEl.addEventListener('click', resetMainPage);
