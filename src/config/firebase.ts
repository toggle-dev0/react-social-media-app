// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyMBM5LqyNQbsK5gvh1pY5MTzNamKEPAo",
  authDomain: "social-media-react-proje-6ed03.firebaseapp.com",
  projectId: "social-media-react-proje-6ed03",
  storageBucket: "social-media-react-proje-6ed03.firebasestorage.app",
  messagingSenderId: "803254615614",
  appId: "1:803254615614:web:7a0afd7236f56a9495db6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
