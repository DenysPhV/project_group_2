// Цей скрипт відповідає за добавлення переглянутих фільмів у local storage

export default watchedBtnLogic;
import currentMovies from './currentMovies';
let watchedMovies = null;

function watchedBtnLogic() {
  // Витягує з local storage JSON фільмів які вже були додані, перетворює в масив обєктві, і створює перемінну в якій вони будть зберігатись
  if (localStorage.getItem('Watched')) {
    watchedMovies = JSON.parse(localStorage.getItem('Watched'));
  } else {
    watchedMovies = [];
  }

  // Створюєм константу для самої кнопки і ставим на неї listener
  const watchedBtn = document.querySelector('.film__btnWatched');
  watchedBtn.addEventListener('click', onWatchedClick);

  // Записуєм карточки фільмів які є на сторінці в констату
  const movies = currentMovies.movies;

  function onWatchedClick() {
    //Отримуєм ID фільма який відкритий
    const movieID = watchedBtn.dataset.id;

    //Перевіряєм чи цей фільм вже був доданий раніше, якщо так тоді виходим з функції
    if (
      !watchedMovies.find((movie) => {
        if (movie.id === Number(movieID)) {
          return movie;
        }
      })
    ) {
      // Додаєм фільм до константи в якій фільми які ми витянули з local storage
      watchedMovies.push(
        movies.find((movie) => {
          if (movie.id === Number(movieID)) {
            return movie;
          }
        }),
      );

      // Переписуєм local storage
      localStorage.setItem('Watched', JSON.stringify(watchedMovies));
    }
  }
}
