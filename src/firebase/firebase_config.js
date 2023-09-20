import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLPnAp1wK--h8NPc7bBTgJiL8tpcmgxZY",
  authDomain: "to-do-jessie.firebaseapp.com",
  databaseURL: "https://to-do-jessie-default-rtdb.firebaseio.com",
  projectId: "to-do-jessie",
  storageBucket: "to-do-jessie.appspot.com",
  messagingSenderId: "888822584008",
  appId: "1:888822584008:web:f8e37b733deae209c88bfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();