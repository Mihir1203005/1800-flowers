// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQVvVUIKgLRqZgeGiKac4DSg93VSnCtw",
  authDomain: "flowerslogin-f4de6.firebaseapp.com",
  projectId: "flowerslogin-f4de6",
  storageBucket: "flowerslogin-f4de6.appspot.com",
  messagingSenderId: "561622247043",
  appId: "1:561622247043:web:905f867d17374ae28a9db6",
  measurementId: "G-FD18DSDZ6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const firebaseConfig2 = {
  apiKey: "AIzaSyByAzFhAqN_WN_jVvJ7Dh4pHhwLt2LbqJY",
  authDomain: "flower-sign-in-method.firebaseapp.com",
  projectId: "flower-sign-in-method",
  storageBucket: "flower-sign-in-method.appspot.com",
  messagingSenderId: "712843341236",
  appId: "1:712843341236:web:82a7eb81dde827748a96e1",
  measurementId: "G-L3481RLRLS",
};

// Initialize Firebase
const app2 = initializeApp(firebaseConfig2, "secondary");
const analytics2 = getAnalytics(app2);
export const auth2 = getAuth(app2);
export const provider2 = new GoogleAuthProvider();