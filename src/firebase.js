// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1dunv-oD6LjGH2apTTMcXYuOZXld3xY",
  authDomain: "chat-app-97a53.firebaseapp.com",
  projectId: "chat-app-97a53",
  storageBucket: "chat-app-97a53.appspot.com",
  messagingSenderId: "362833938815",
  appId: "1:362833938815:web:084c7ef997992ad659b24a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
