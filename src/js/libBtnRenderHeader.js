import { homeBtnEl, logoEl, galleryContainer, libBtnEl, headerEl, inputWrapEl } from './refs.js';
import { renderMainPageOnClick, renderInputOnClick } from './homeBtnRenderPage';

export const renderLibHeaderOnClick = () => {
  console.log('run lib');
  galleryContainer.innerHTML = '';
  libBtnEl.classList.add('nav-menu__btn_active');
  homeBtnEl.classList.remove('nav-menu__btn_active');
  headerEl.classList.replace('header__main-bg-js', 'header__lib-bg-js');
  inputWrapEl.classList.remove('input-wrap_searchIcon');
  libBtnEl.style.color = '#ffffff';
  const markUp =
    '<button class="header__watch-btn" type="button">Watched</button><button class="header__queue-btn" type="button">queue</button>';
  inputWrapEl.innerHTML = markUp;

  libBtnEl.removeEventListener('click', renderLibHeaderOnClick);

  homeBtnEl.addEventListener('click', renderMainPageOnClick);
  logoEl.addEventListener('click', renderMainPageOnClick);
  homeBtnEl.addEventListener('click', renderInputOnClick);
  logoEl.addEventListener('click', renderInputOnClick);
};

libBtnEl.addEventListener('click', renderLibHeaderOnClick);
