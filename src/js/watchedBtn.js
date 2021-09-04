// Цей скрипт відповідає за добавлення переглянутих фільмів у local storage

export default watchedBtnLogic;
import currentMovies from './currentMovies';
const watchedMovies = [];

function watchedBtnLogic() {
  const watchedBtn = document.querySelector('.film__btnWatched');
  watchedBtn.addEventListener('click', onWatchedClick);

  let movies = currentMovies.movies;

  function onWatchedClick() {
    const movieID = watchedBtn.dataset.id;

    watchedMovies.push(
      movies.find(obj => {
        if (obj.id === Number(movieID)) {
          return obj;
        }
      }),
    );
    localStorage.setItem('Watched', JSON.stringify(watchedMovies));
  }
}
