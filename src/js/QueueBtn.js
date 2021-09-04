// Цей скрипт відповідає за добавлення фільмів у чергу і в local storage

export default queueBtnLogic;
import currentMovies from './currentMovies';
const queuedMovies = [];

function queueBtnLogic() {
  const queuedBtn = document.querySelector('.film__btnQueue');
  queuedBtn.addEventListener('click', onQueuedClick);

  let movies = currentMovies.movies;

  function onQueuedClick() {
    const movieID = queuedBtn.dataset.id;

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
