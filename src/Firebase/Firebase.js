// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr4KWbikWhQu4E0TneJKVNvlrqSH6mVEI",
  authDomain: "career-guide-20bbf.firebaseapp.com",
  projectId: "career-guide-20bbf",
  storageBucket: "career-guide-20bbf.firebasestorage.app",
  messagingSenderId: "473501555050",
  appId: "1:473501555050:web:1394bffb83232c11a4ed13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;