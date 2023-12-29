// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ_85p-H3feaSg8qJgMBZQUBBn_X_iI8Y",
  authDomain: "trabalho-next.firebaseapp.com",
  projectId: "trabalho-next",
  storageBucket: "trabalho-next.appspot.com",
  messagingSenderId: "543670278238",
  appId: "1:543670278238:web:f848b9e9ca5bfd4eb53ccf",
  measurementId: "G-D9D6MEFDWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);