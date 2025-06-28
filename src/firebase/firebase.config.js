// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDu9veNXo0FjnIGdaIi8rkcn69Tqz_-ZU",
  authDomain: "thenovotimes.firebaseapp.com",
  projectId: "thenovotimes",
  storageBucket: "thenovotimes.firebasestorage.app",
  messagingSenderId: "549584166015",
  appId: "1:549584166015:web:8285022f523ffacf61734a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;