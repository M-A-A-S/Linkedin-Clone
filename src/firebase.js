import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB33H5o6Mz1UhUbQu5dGv2fZPM-xwN2pQs",
  authDomain: "linkedin-clone-67c0d.firebaseapp.com",
  projectId: "linkedin-clone-67c0d",
  storageBucket: "linkedin-clone-67c0d.appspot.com",
  messagingSenderId: "579698444327",
  appId: "1:579698444327:web:158dfb315a7a585ea86602",
  measurementId: "G-SKLY9H9X7B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
