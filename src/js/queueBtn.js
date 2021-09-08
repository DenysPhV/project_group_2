// Цей скрипт відповідає за добавлення фільмів у чергу і в local storage

export default queueBtnLogic;
import currentMovies from './currentMovies';
let queuedMovies = null;

function queueBtnLogic() {
  // Витягує з local storage JSON фільмів які вже були додані, перетворює в масив обєктві, і створює перемінну в якій вони будть зберігатись
  if (localStorage.getItem('Queued')) {
    queuedMovies = JSON.parse(localStorage.getItem('Queued'));
  } else {
    queuedMovies = [];
  }

  // Створюєм константу для самої кнопки і ставим на неї listener
  const queuedBtn = document.querySelector('.film__btnQueue');
  queuedBtn.addEventListener('click', onQueuedClick);

  // Записуєм карточки фільмів які є на сторінці в констату
  let movies = currentMovies.movies;

  function onQueuedClick() {
    //Отримуєм ID фільма який відкритий
    const movieID = queuedBtn.dataset.id;

    //Перевіряєм чи цей фільм вже був доданий раніше, якщо так тоді виходим з функції
    if (
      !queuedMovies.find((movie) => {
        if (movie.id === Number(movieID)) {
          return movie;
        }
      })
    ) {
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
    }
  }
}
