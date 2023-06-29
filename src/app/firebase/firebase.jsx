/** @format */
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAqqQfZplHebAkct8ra0xgk8623fKrnAc",
  authDomain: "finalproject-33325.firebaseapp.com",
  projectId: "finalproject-33325",
  storageBucket: "finalproject-33325.appspot.com",
  messagingSenderId: "587627037187",
  appId: "1:587627037187:web:fc56883f3eadf7bf268436",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fire = getFirestore(app);
