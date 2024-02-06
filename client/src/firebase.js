// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-a3204.firebaseapp.com",
  projectId: "real-estate-app-a3204",
  storageBucket: "real-estate-app-a3204.appspot.com",
  messagingSenderId: "821816159494",
  appId: "1:821816159494:web:3814f682afe7e2148ac287"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);