// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ8XDkUsJJ5XARC_Xu1QXcWxjbMkydWQE",
    authDomain: "app-06-cfdb4.firebaseapp.com",
    databaseURL: "https://app-06-cfdb4-default-rtdb.firebaseio.com",
    projectId: "app-06-cfdb4",
    storageBucket: "app-06-cfdb4.firebasestorage.app",
    messagingSenderId: "355757912929",
    appId: "1:355757912929:web:8e05e4d2d7022392034b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);