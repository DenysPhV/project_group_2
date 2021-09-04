export default QueueBtnLogic;
import currentMovies from './currentMovies';
const queuedMovies = [];

function QueueBtnLogic() {
  const queuedBtn = document.querySelector('.film__btnQueue');
  queuedBtn.addEventListener('click', onQueuedClick);

  let movies = currentMovies.movies;

  function onQueuedClick() {
    const movieID = queuedBtn.dataset.id;

    queuedMovies.push(
      movies.find(obj => {
        console.log(obj.id, movieID);
        if (obj.id === Number(movieID)) {
          return obj;
        }
      }),
    );
    localStorage.setItem('Queued', JSON.stringify(queuedMovies));
  }
}
