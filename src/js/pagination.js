import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from './apiService';
import cardsTemplate from '../templates/cards.hbs';
import { galleryContainer } from './refs';
import currentMovies from './currentMovies';

// const Pagination = require('tui-pagination');
// const Pagination = tui.Pagination;

const apiService = new ApiService();

const container = document.getElementById('tui-pagination-container');
// Опции для отрисовки пагинации с документации
const options = {
  totalItems: 1000,
  itemsPerPage: 10,
  visiblePages: 10,
  page: 5,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn  ">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected  ">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

// export { options };
const pagination = new Pagination('#tui-pagination-container', options);

const page = pagination.getCurrentPage();

// Запрос в фетч и рендер карточек
apiService.fetchTrending(1).then(res => {
  console.log(res);
  pagination.reset(res.total_pages);
  console.log(res.total_pages);
  renderGallery(res.results);
  const li = document.querySelectorAll('.gallery__item');
});

// Функция пагинации
pagination.on('afterMove', e => {
  const currentPage = e.page;
  window.scrollTo(scrollX, 0);

  clearGallery();
  apiService.fetchTrending(currentPage).then(res => {
    renderGallery(res.results);
    const li = document.querySelectorAll('.gallery__item');
    currentMovies = cards.results;
  });
});

// Рендер карточки
function renderGallery(data) {
  galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(data));
}

// Очистка галерии
function clearGallery() {
  galleryContainer.innerHTML = '';
}

document;
