// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  getAuth,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADiqdouWhyk-T_XDhHhn8iaujKmeGQzzg",
  authDomain: "prathmeshsadake-twittergram.firebaseapp.com",
  projectId: "prathmeshsadake-twittergram",
  storageBucket: "prathmeshsadake-twittergram.appspot.com",
  messagingSenderId: "289274793224",
  appId: "1:289274793224:web:3c702274be056d4549f0bd",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app).setPersistence(browserLocalPersistence);
export const googleAuthProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const firestore = getFirestore(app);
