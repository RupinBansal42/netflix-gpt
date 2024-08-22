// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBijtudV3ri6UwjUTOcv3R6gy981ekez8w",
  authDomain: "netflix-gpt-8cad7.firebaseapp.com",
  projectId: "netflix-gpt-8cad7",
  storageBucket: "netflix-gpt-8cad7.appspot.com",
  messagingSenderId: "3178397033",
  appId: "1:3178397033:web:1f71b95d41c6c2984211f8",
  measurementId: "G-FNKCQC8F2B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth()