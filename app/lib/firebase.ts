// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBINB0iVNyyzbPGQF3Q-eSKJhvWc5DlXVc",
  authDomain: "test-d552c.firebaseapp.com",
  projectId: "test-d552c",
  storageBucket: "test-d552c.appspot.com",
  messagingSenderId: "213326474265",
  appId: "1:213326474265:web:0e3272897ca118589ace88",
};

// Initialize Firebase
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
