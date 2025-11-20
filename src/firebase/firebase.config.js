// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyrrnBhTnnJ_8vPWMGi-FGkruD5phgpa8",
  authDomain: "ai-modelhub-authentication.firebaseapp.com",
  projectId: "ai-modelhub-authentication",
  storageBucket: "ai-modelhub-authentication.firebasestorage.app",
  messagingSenderId: "815367134022",
  appId: "1:815367134022:web:499849ea3cf6fa8321e347",
  measurementId: "G-NBZT09PF2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);