// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoC95ndH3rlOBEDlwq5vw4nafad3wGlRw",
  authDomain: "task-intern-dailymyshopping.firebaseapp.com",
  projectId: "task-intern-dailymyshopping",
  storageBucket: "task-intern-dailymyshopping.appspot.com",
  messagingSenderId: "568485516091",
  appId: "1:568485516091:web:96dc3aff63f0ebb6125d1e",
  measurementId: "G-KL70VRBK8H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
