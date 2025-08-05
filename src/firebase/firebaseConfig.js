// src/firebase/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config (keep as-is)
const firebaseConfig = {
  apiKey: "AIzaSyAKe37l9o_ifQsgvPtn5OCOA2VwdlcQFxc",
  authDomain: "she-can-intern-portal.firebaseapp.com",
  projectId: "she-can-intern-portal",
  storageBucket: "she-can-intern-portal.firebasestorage.app",
  messagingSenderId: "609450972858",
  appId: "1:609450972858:web:91da0b2e312fb2c67e5483",
  measurementId: "G-MEYRPX3LV5"
};

// ✅ Correct initialization
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 🔁 FIX: This is what you need

export { db, app };
