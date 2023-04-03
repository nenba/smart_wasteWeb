// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database"

// = firebase.initializeApp
const firebaseConfig = {
  apiKey: "AIzaSyA7pWrA3PYQFsHzC5Yp8HMwH60Uz9fzazE",
  authDomain: "wastebindata.firebaseapp.com",
  //databaseURL: "https://wastebindata-default-rtdb.firebaseio.com",
  projectId: "wastebindata",
  storageBucket: "wastebindata.appspot.com",
  messagingSenderId: "293529157067",
  appId: "1:293529157067:web:b586e967598f0d43150a4e",
  //measurementId: "G-XDSTF88V18"
  };

// if (!firebase.apps.length){
//   firebase.initializeApp(firebaseConfig)
// }

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth();
export const storage = getStorage(app);