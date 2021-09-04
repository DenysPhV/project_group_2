export default WatchedBtnLogic;
import currentMovies from './currentMovies';
const watchedMovies = [];

function WatchedBtnLogic() {
  const watchedBtn = document.querySelector('.film__btnWatched');
  watchedBtn.addEventListener('click', onWatchedClick);

  let movies = currentMovies.movies;
  console.log(currentMovies.movies);

  function onWatchedClick() {
    const movieID = watchedBtn.dataset.id;

    watchedMovies.push(
      movies.find(obj => {
        console.log(obj.id, movieID);
        if (obj.id === Number(movieID)) {
          return obj;
        }
      }),
    );
    localStorage.setItem('Watched', JSON.stringify(watchedMovies));
  }
}
