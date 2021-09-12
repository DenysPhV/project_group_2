import { initializeApp } from 'firebase/app';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { authInGoogle, authOutGoogle, userName } from './refs';
import { firebaseConfig } from './firebaseConfig';
import { readUserData } from './firebaseData';

initializeApp(firebaseConfig); // Initialize Firebase
authInGoogle.addEventListener('click', signInGoogle);
authOutGoogle.addEventListener('click', signOutGoogle);

function onAuthState() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userName.textContent = user.displayName;
      authInGoogle.style.display = 'none';
      authOutGoogle.style.display = 'inline';
    } 
  });
}

function signInGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      readUserData(user.uid);
      userName.textContent = result.user.displayName;
      authInGoogle.style.display = 'none';
      authOutGoogle.style.display = 'inline';
      window.location.reload(false); 
  })
    .catch((error) => {
      console.error(error);
    });
}

function signOutGoogle() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      userName.textContent = '';
      authInGoogle.style.display = 'inline';
      authOutGoogle.style.display = 'none';
      localStorage.clear();
    window.location.reload(false); 
    })
    .catch((error) => {
      console.error(error);
    });
}

onAuthState();
