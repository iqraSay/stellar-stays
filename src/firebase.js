import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAyFTMMvKY9dgMfcBNCNlz1nMHXgXxzLvI",
  authDomain: "stellar-stays.firebaseapp.com",
  projectId: "stellar-stays",
  storageBucket: "stellar-stays.firebasestorage.app",
  messagingSenderId: "562842036261",
  appId: "1:562842036261:web:e2a97f1685afe5ecdcf7cc",
  measurementId: "G-4576EKCKQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);