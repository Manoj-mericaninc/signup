/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0EUwvjQ1b95UTrjPLMVaOtkBoD2tzcLQ",
  authDomain: "login-project-90b8d.firebaseapp.com",
  projectId: "login-project-90b8d",
  storageBucket: "login-project-90b8d.appspot.com",
  messagingSenderId: "280596340290",
  appId: "1:280596340290:web:298ec31dd96ce6902a57db",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
