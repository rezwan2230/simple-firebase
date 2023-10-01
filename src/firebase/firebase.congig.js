// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Q9f34lBBb_ejOISvS9nNn6t8RJLVGxU",
  authDomain: "practice-project-77c1a.firebaseapp.com",
  projectId: "practice-project-77c1a",
  storageBucket: "practice-project-77c1a.appspot.com",
  messagingSenderId: "653544180674",
  appId: "1:653544180674:web:0b44484364b2d0ed88645b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
