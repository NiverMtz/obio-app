import firebase from "firebase/app";
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyB6fBBBYokB2huGlBX0PPZMIAkJ_-C0r90",
  authDomain: "creec-fd0e3.firebaseapp.com",
  databaseURL: "https://creec-fd0e3-default-rtdb.firebaseio.com",
  projectId: "creec-fd0e3",
  storageBucket: "creec-fd0e3.appspot.com",
  messagingSenderId: "859819677419",
  appId: "1:859819677419:web:c555cdc9ad0609fab210ae"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export {auth};