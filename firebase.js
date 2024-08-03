// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRX4slLS_vhY3GdghHDD7gRF6YTxXZmXI",
  authDomain: "learn-with-me-cc682.firebaseapp.com",
  projectId: "learn-with-me-cc682",
  storageBucket: "learn-with-me-cc682.appspot.com",
  messagingSenderId: "808974761869",
  appId: "1:808974761869:web:8511388fc689af6be807c4",
  measurementId: "G-DLGNQB87T2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);

export default db;
