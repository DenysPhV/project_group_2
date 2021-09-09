// comment ??????
import {
  homeBtnEl,
  logoEl,
  libBtnEl,
  headerEl,
  searchForm,
  notification,
  paginationReset,
} from './refs.js';
import { renderMainPageOnClick, renderInputOnClick } from './homeBtnRenderPage';
import { onWatchedBtnClick, onQueueBtnClick } from './myLibraryBtns.js'; //MK
import Notiflix from 'notiflix';

// comment ??????
export const renderLibHeaderOnClick = () => {
  libBtnEl.classList.add('nav-menu__btn_active');
  homeBtnEl.classList.add('nav-menu__btn_hover');
  homeBtnEl.classList.remove('nav-menu__btn_active');
  headerEl.classList.replace('header__main-bg-js', 'header__lib-bg-js');
  searchForm.classList.remove('input-wrap_searchIcon');
  notification.textContent = '';
  searchForm.innerHTML =
    '<div class="header__btn-box"><button class="header__watch-btn " type="button" >Watched</button><button class="header__queue-btn" type="button">queue</button></div>';

  // searchForm.innerHTML =
  //   '<div class="header__btn-box"><button class="header__watch-btn " type="button" >Watched</button><button class="header__queue-btn" type="button">queue</button></div>';

  libBtnEl.removeEventListener('click', renderLibHeaderOnClick);

  homeBtnEl.addEventListener('click', renderMainPageOnClick);
  logoEl.addEventListener('click', renderMainPageOnClick);
  homeBtnEl.addEventListener('click', renderInputOnClick);
  logoEl.addEventListener('click', renderInputOnClick);
  paginationReset.innerHTML = '';
  changeBgcLibBtn();
};

// comment ??????
const changeBgcLibBtn = () => {
  const watchBtnEl = document.querySelector('.header__watch-btn');
  const queueBtnEl = document.querySelector('.header__queue-btn');

  const onWatchClick = () => {
    paginationReset.innerHTML = '';
    watchBtnEl.classList.add('header__watch-btn_active');
    queueBtnEl.classList.remove('header__queue-btn_active');

    onWatchedBtnClick(); //MK

    watchBtnEl.removeEventListener('click', onWatchClick);
    queueBtnEl.addEventListener('click', onQueueClick);
  };

  const onQueueClick = () => {
    paginationReset.innerHTML = '';
    queueBtnEl.classList.add('header__queue-btn_active');
    watchBtnEl.classList.remove('header__watch-btn_active');
    onQueueBtnClick(); //MK
    watchBtnEl.addEventListener('click', onWatchClick);
    queueBtnEl.removeEventListener('click', onQueueClick);

    watchBtnEl.classList.remove('activeBtn');
  };

  watchBtnEl.addEventListener('click', onWatchClick);
  queueBtnEl.addEventListener('click', onQueueClick);
  libBtnEl.addEventListener('click', watchBtnEl.classList.add('activeBtn'));
};

libBtnEl.addEventListener('click', renderLibHeaderOnClick);
