import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { authInGoogle, authOutGoogle, userName } from './refs';
import { firebaseConfig } from './firebaseConfig';

initializeApp(firebaseConfig); // Initialize Firebase
authInGoogle.addEventListener('click', signInGoogle);
authOutGoogle.addEventListener('click', signOutGoogle);

function signInGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      userName.textContent = result.user.displayName;
      authInGoogle.style.display = 'none';
      authOutGoogle.style.display = 'inline';
      // console.log(result.user.displayName);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}
function signOutGoogle() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      userName.textContent = '';
      authInGoogle.style.display = 'inline';
      authOutGoogle.style.display = 'none';
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
function onAuthState() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      userName.textContent = user.displayName;
      authInGoogle.style.display = 'none';
      authOutGoogle.style.display = 'inline';
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
onAuthState();
