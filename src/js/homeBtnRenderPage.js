// Скрипт отвечает за отрисовку главной страницы по клику на кнопку HOME
console.log('Run myScript');

import ApiService from './apiService';
const apiService = new ApiService();

const homeBtnEl = document.querySelector('.home-btn-js');
const mainPageEl = document.querySelector('.main__page');
const logoEl = document.querySelector('.logo-js');

const onHomeBtnClick = () => {
  console.log('click home-btn');
  homeBtnEl.classList.add('home-btn-active');
  sendRequest();
};

const sendRequest = () => {
  apiService
    .fetchTrending()
    .then(data => {
      console.log(data);
      return data;
    })
    .then(renderMainPage);
};

const renderMainPage = movies => {
  const markup = movies
    .map(movie => {
      return `<img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" /><p>${movie.original_title}</p><p>${movie.genre_ids}</p><p>${movie.release_date}</p>`;
    })
    .join('');
  // mainPageEl.innerHTML = '';
  mainPageEl.insertAdjacentHTML('afterbegin', markup);
};

const resetMainPage = () => {
  mainPageEl.innerHTML = '';
};

homeBtnEl.addEventListener('click', onHomeBtnClick);
logoEl.addEventListener('click', resetMainPage);

// export default function test() {
//   console.log('Run myScript from test function');
// }
