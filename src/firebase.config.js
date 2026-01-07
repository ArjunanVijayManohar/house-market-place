import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzYM5K2XvGRp2f32H8n_bY_spq1UyollM",
  authDomain: "house-marketplace-1eaa4.firebaseapp.com",
  projectId: "house-marketplace-1eaa4",
  storageBucket: "house-marketplace-1eaa4.firebasestorage.app",
  messagingSenderId: "787852886380",
  appId: "1:787852886380:web:6f2e08f66da5cec68bf349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();