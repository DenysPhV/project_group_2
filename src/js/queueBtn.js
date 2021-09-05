// Цей скрипт відповідає за добавлення фільмів у чергу і в local storage

export default queueBtnLogic;
import currentMovies from './currentMovies';
let queuedMovies = null;

function queueBtnLogic() {
  if (localStorage.getItem('Queued')) {
    queuedMovies = JSON.parse(localStorage.getItem('Queued'));
  } else {
    queuedMovies = [];
  }

  const queuedBtn = document.querySelector('.film__btnQueue');
  queuedBtn.addEventListener('click', onQueuedClick);

  let movies = currentMovies.movies;

  function onQueuedClick() {
    const movieID = queuedBtn.dataset.id;

    if (
      !queuedMovies.find(obj => {
        if (obj.id === Number(movieID)) {
          return obj;
        }
      })
    ) {
      queuedMovies.push(
        movies.find(obj => {
          if (obj.id === Number(movieID)) {
            return obj;
          }
        }),
      );
      localStorage.setItem('Queued', JSON.stringify(queuedMovies));
    }
  }
}
