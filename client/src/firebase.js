// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urbanedge-b5c7d.firebaseapp.com",
  projectId: "urbanedge-b5c7d",
  storageBucket: "urbanedge-b5c7d.firebasestorage.app",
  messagingSenderId: "852042500993",
  appId: "1:852042500993:web:9455abea1f1d8cc0e5f680"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);