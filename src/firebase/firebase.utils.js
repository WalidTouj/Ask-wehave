import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyD4yVuXjYjSyUFb7hooJJj8Mpmf20PyVCE",
  authDomain: "ask-wehave.firebaseapp.com",
  projectId: "ask-wehave",
  storageBucket: "ask-wehave.appspot.com",
  messagingSenderId: "1012467356821",
  appId: "1:1012467356821:web:2d4924467669e70bcdf79c",
  measurementId: "G-JWVFZ77Z2R",
};

const app = initializeApp(config);

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

// const provider = new firebase.auth.GoogleAuthProvider();

export const SignInWithGoogle = () => signInWithPopup(auth, provider);
export default auth;
