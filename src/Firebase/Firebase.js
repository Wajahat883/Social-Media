// src/Firebase/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-8f-wbE6GENFGoIq2cvxTwZzZ_aUpWMg",
  authDomain: "socialx-72d30.firebaseapp.com",
  projectId: "socialx-72d30",
  storageBucket: "socialx-72d30.appspot.com",
  messagingSenderId: "380431601346",
  appId: "1:380431601346:web:c545daa75d06b3fab9f55b",
  measurementId: "G-01WRE518CL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // ✅ Storage added
