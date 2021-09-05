// Цей скрипт відповідає за добавлення переглянутих фільмів у local storage

export default watchedBtnLogic;
import currentMovies from './currentMovies';
let watchedMovies = null;

function watchedBtnLogic() {
  if (localStorage.getItem('Watched')) {
    watchedMovies = JSON.parse(localStorage.getItem('Watched'));
  } else {
    watchedMovies = [];
  }

  const watchedBtn = document.querySelector('.film__btnWatched');
  watchedBtn.addEventListener('click', onWatchedClick);

  let movies = currentMovies.movies;

  function onWatchedClick() {
    const movieID = watchedBtn.dataset.id;

    if (
      !watchedMovies.find(obj => {
        if (obj.id === Number(movieID)) {
          return obj;
        }
      })
    ) {
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
}
