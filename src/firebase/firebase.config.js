// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnY9oGp18WcHZJXSXJgYy95POFkzqOP4g",
  authDomain: "coffee-store-32640.firebaseapp.com",
  projectId: "coffee-store-32640",
  storageBucket: "coffee-store-32640.appspot.com",
  messagingSenderId: "570187047149",
  appId: "1:570187047149:web:6d215bc7184cb0838aace4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 