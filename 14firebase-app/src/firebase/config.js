import * as firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDueGTP_UTlBFWNcljDZD_-J1INgdxg70U",
  authDomain: "lexa-auth.firebaseapp.com",
  databaseURL: "https://lexa-auth.firebaseio.com",
  projectId: "lexa-auth",
  storageBucket: "lexa-auth.appspot.com",
  messagingSenderId: "651899831022",
  appId: "1:651899831022:web:e7cbf8cf669538ff0ae9ff",
  measurementId: "G-KL9ERNEB15",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
