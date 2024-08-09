import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRX4slLS_vhY3GdghHDD7gRF6YTxXZmXI",
  authDomain: "learn-with-me-cc682.firebaseapp.com",
  projectId: "learn-with-me-cc682",
  storageBucket: "learn-with-me-cc682.appspot.com",
  messagingSenderId: "808974761869",
  appId: "1:808974761869:web:8511388fc689af6be807c4",
  measurementId: "G-DLGNQB87T2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
