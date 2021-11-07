// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_v6jY9NyQgrVxnXq38tW6GUVd49KFTo0",
  authDomain: "starter-d6cc0.firebaseapp.com",
  projectId: "starter-d6cc0",
  storageBucket: "starter-d6cc0.appspot.com",
  messagingSenderId: "769701579868",
  appId: "1:769701579868:web:c7a959096028d72392aa99",
  measurementId: "G-MW57J9Q2SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);