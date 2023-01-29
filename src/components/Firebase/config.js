// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0HoVlrl6U4GQKnMsipdNJ6ozE9LwU7kw",
    authDomain: "jwbportfolio-1c9f6.firebaseapp.com",
    projectId: "jwbportfolio-1c9f6",
    storageBucket: "jwbportfolio-1c9f6.appspot.com",
    messagingSenderId: "143872357401",
    appId: "1:143872357401:web:95aa42817f20ec174c6688",
    measurementId: "G-QJ5YKP3L2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const user = app.currentUser;
export { app, firestore, user, collection };


export default (app, firestore);