import { getDatabase, ref, set, child, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';

function writeUserData() {
  const auth = getAuth();
  const db = getDatabase();
  const user = auth.currentUser;
  if (!user) {
    return;
  };
  const userId = user.uid;
  const name = user.displayName;
  const email = user.email;
  const imageUrl = user.photoURL;
  let queued = localStorage.getItem('Queued');
  let watched = localStorage.getItem('Watched');
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
    local_storage: {
      Queued: JSON.parse(queued),
      Watched: JSON.parse(watched),
    },
  });
}

function readUserData(userId) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`))
    .then((data) => {
      let locStor = data.val().local_storage;
      if (!locStor) {
        return;
      };
      if (data.exists()) {
        if (locStor.Queued) {
          localStorage.setItem('Queued', JSON.stringify(locStor.Queued));
        }
        if (locStor.Watched) {
          localStorage.setItem('Watched', JSON.stringify(locStor.Watched));
        }
      } 
    })
    .catch((error) => {
      console.error(error);
    });
}
export { writeUserData, readUserData };