// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Added for Firebase Storage

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY', // Replace with your actual API key
  authDomain: 'YOUR_AUTH_DOMAIN', // Replace with your actual auth domain
  projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
  storageBucket: 'YOUR_STORAGE_BUCKET', // Replace with your actual storage bucket
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID', // Replace with your actual messaging sender ID
  appId: 'YOUR_APP_ID' // Replace with your actual app ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // Export storage
export const provider = new GoogleAuthProvider();
