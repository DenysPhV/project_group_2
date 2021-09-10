// Цей скрипт відповідає за добавлення фільмів у чергу і в local storage

export { watchedBtnLogic, queueBtnLogic };
import currentMovies from './currentMovies';
import { onWatchedBtnClick, onQueueBtnClick } from './myLibraryBtns';
import Notiflix from 'notiflix';
let queuedMovies = null;
let watchedMovies = null;

// Queue

function queueBtnLogic() {
  const queuedBtn = document.querySelector('.film__btnQueue');
  // Витягує з local storage JSON фільмів які вже були додані, перетворює в масив обєктві, і створює перемінну в якій вони будть зберігатись
  if (localStorage.getItem('Queued')) {
    queuedMovies = JSON.parse(localStorage.getItem('Queued'));
  } else {
    queuedMovies = [];
  }
  if (localStorage.getItem('Watched')) {
    watchedMovies = JSON.parse(localStorage.getItem('Watched'));
  } else {
    watchedMovies = [];
  }

  // Записуєм карточки фільмів які є на сторінці в констату
  let movies = currentMovies.movies;

  //Отримуєм ID фільма який відкритий
  const movieID = queuedBtn.dataset.id;

  // Ставим на кнопку listener
  queuedBtn.addEventListener('click', onQueuedClick);

  // Міняєм текст кнопки якщо вона вже була додана
  if (findMovie(queuedMovies, movieID)) {
    queuedBtn.textContent = 'Remove from queue';
  }

  // Перевіряє чи фільм вже є у переглянутих, якщо так то блокує кнопку
  if (findMovie(watchedMovies, movieID)) {
    queuedBtn.disabled = true;
  } else {
    queuedBtn.disabled = false;
  }

  function onQueuedClick() {
    //Перевіряєм чи цей фільм вже був доданий раніше, якщо так тоді виходим з функції
    if (!findMovie(queuedMovies, movieID)) {
      // Додаєм фільм до константи в якій фільми які ми витянули з local storage
      queuedMovies.push(
        movies.find((movie) => {
          if (movie.id === Number(movieID)) {
            return movie;
          }
        }),
      );

      // Переписуєм local storage
      localStorage.setItem('Queued', JSON.stringify(queuedMovies));
      // Міняєм текст кнопки
      queuedBtn.textContent = 'Remove from queue';
      Notiflix.Notify.success('The movie was successfully added to the library');
      // queuedBtn.classList.add('film__button--disabled');
    } else {
      // Шукаєм фільм який потрібно видалити
      [...queuedMovies].find((movie, i) => {
        // Якщо знайшли то видаляєм
        if (movie.id === Number(movieID)) {
          queuedMovies.splice(i, 1);
        }
      });
      // Переписуєм local storage
      localStorage.setItem('Queued', JSON.stringify(queuedMovies));
      // Міняєм текст кнопки
      queuedBtn.textContent = 'Add to queue';
      Notiflix.Notify.warning('You have deleted your movie from the library!');
    }
    // Перемальовуєм картки фільмів
    reMarkupCards();
  }
}

// Watched

function watchedBtnLogic() {
  const watchedBtn = document.querySelector('.film__btnWatched');
  const queuedBtn = document.querySelector('.film__btnQueue');
  // Витягує з local storage JSON фільмів які вже були додані, перетворює в масив обєктві, і створює перемінну в якій вони будть зберігатись
  if (localStorage.getItem('Watched')) {
    watchedMovies = JSON.parse(localStorage.getItem('Watched'));
  } else {
    watchedMovies = [];
  }

  const movies = currentMovies.movies; // Записуєм карточки фільмів які є на сторінці в констату
  const movieID = watchedBtn.dataset.id; //Отримуєм ID фільма який відкритий

  watchedBtn.addEventListener('click', onWatchedClick); // Ставим на кнопку listener
  // Міняєм текст кнопки якщо вона вже була додана
  if (findMovie(watchedMovies, movieID)) {
    watchedBtn.textContent = 'Remove from watched';
  }

  function onWatchedClick() {
    //Перевіряєм чи цей фільм вже був доданий раніше, якщо так тоді виходим з функції
    if (!findMovie(watchedMovies, movieID)) {
      // Додаєм фільм до константи в якій фільми які ми витянули з local storage
      watchedMovies.push(
        movies.find((movie) => {
          if (movie.id === Number(movieID)) {
            return movie;
          }
        }),
      );

      localStorage.setItem('Watched', JSON.stringify(watchedMovies)); // Переписуєм local storage
      // Міняєм текст кнопки
      watchedBtn.textContent = 'Remove from watched';
      Notiflix.Notify.success('The movie was successfully added to the library');
      // Блокуєм кнопку черги
      queuedBtn.disabled = true;
      // подмена стилей которая работает
      queuedBtn.classList.add('film__button--disabled'); //высокотехнологический костыль
      queuedBtn.classList.remove('film__button');

      // Перевіряєм чи фільм був у черзі
      [...queuedMovies].find((movie, i) => {
        // Якщо знайшли то видаляєм
        if (movie.id === Number(movieID)) {
          queuedMovies.splice(i, 1);
        }
      });
      localStorage.setItem('Queued', JSON.stringify(queuedMovies));
      queuedBtn.textContent = 'Add to queue';
    } else {
      // Шукаєм фільм який потрібно видалити
      [...watchedMovies].find((movie, i) => {
        // Якщо знайшли то видаляєм
        if (movie.id === Number(movieID)) {
          watchedMovies.splice(i, 1);
        }
      });
      // Переписуєм local storage
      localStorage.setItem('Watched', JSON.stringify(watchedMovies));
      // Міняєм текст кнопки
      watchedBtn.textContent = 'Add to watched';
      Notiflix.Notify.warning('You have deleted your movie from the library!');
      // Не Блокуєм кнопку черги
      queuedBtn.disabled = false;
      // подмена стилей которая работает
      queuedBtn.classList.add('film__button');
      queuedBtn.classList.remove('film__button--disabled'); //высокотехнологический костыль
    }
    // Перемальовуєм картки фільмів
    reMarkupCards();
  }
}

function reMarkupCards() {
  const watchedBtn = document.querySelector('.header__watch-btn');
  const queuedBtn = document.querySelector('.header__queue-btn');
  if (watchedBtn || queuedBtn) {
    if (
      watchedBtn.classList.contains('activeBtn') ||
      watchedBtn.classList.contains('header__watch-btn_active')
    ) {
      onWatchedBtnClick();
    } else if (
      queuedBtn.classList.contains('activeBtn') ||
      queuedBtn.classList.contains('header__queue-btn_active')
    ) {
      onQueueBtnClick();
    }
  }
}

function findMovie(allMovies, movieToFindID) {
  return allMovies.find((movie) => {
    if (movie.id === Number(movieToFindID)) {
      return movie;
    }
  });
}

//  queuedBtn.classList.add('film__button--disabled');
//  queuedBtn.classList.add('film__button');
//  queuedBtn.classList.remove('film__button--disabled');
//  queuedBtn.classList.remove('film__button');
