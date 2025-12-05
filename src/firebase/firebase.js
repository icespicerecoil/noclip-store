// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt_VV5T9RWTSnFj8lu44rJhf4maX3FZA8",
  authDomain: "noclip-5e693.firebaseapp.com",
  projectId: "noclip-5e693",
  storageBucket: "noclip-5e693.firebasestorage.app",
  messagingSenderId: "118578192724",
  appId: "1:118578192724:web:f8041538ea5a85777728c1",
  measurementId: "G-NHDBNPH36Z"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
