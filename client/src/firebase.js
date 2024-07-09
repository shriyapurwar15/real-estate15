// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'realestate-7bd68.firebaseapp.com',
  projectId: 'realestate-7bd68',
  storageBucket: 'realestate-7bd68.appspot.com',
  messagingSenderId: '178777701756',
  appId: '1:178777701756:web:2c92ad24da2e67be4eb8f9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
