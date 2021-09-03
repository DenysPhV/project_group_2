import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from './apiService';
import cardsTemplate from '../templates/cards.hbs';
import refs from './refs';

const ref = refs();
const apiService = new ApiService();

// Опции для отрисовки пагинации с документации
const options = {
  total_pages: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
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
export { options };
const pagination = new Pagination('#tui-pagination-container', options);
const page = pagination.getCurrentPage();

apiService.fetchTrending(page).then(res => {
  pagination.reset([1].total_pages);
  renderGallery(res);
  const li = document.querySelectorAll('.gallery__item');
});

pagination.on('afterMove', e => {
  const currentPage = e.page;
  clearGallery();
  apiService.fetchTrending(currentPage).then(res => {
    renderGallery(res);
    const li = document.querySelectorAll('.gallery__item');
  });
});

function renderGallery(data) {
  ref.galleryContainer.insertAdjacentHTML('beforeend', cardsTemplate(data));
}

function clearGallery() {
  ref.galleryContainer.innerHTML = '';
}
