import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDaN3M-tAW41BMydRS-kkb6xU8w6c222H4",
    authDomain: "portfolio-7c337.firebaseapp.com",
    projectId: "portfolio-7c337",
    storageBucket: "portfolio-7c337.appspot.com",
    messagingSenderId: "138368318828",
    appId: "1:138368318828:web:463b42a4721183316b8749",
    measurementId: "G-9YBZWMSDK4"
});

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
// const firebaseConfig = {
//     apiKey: "AIzaSyDaN3M-tAW41BMydRS-kkb6xU8w6c222H4",
//     authDomain: "portfolio-7c337.firebaseapp.com",
//     projectId: "portfolio-7c337",
//     storageBucket: "portfolio-7c337.appspot.com",
//     messagingSenderId: "138368318828",
//     appId: "1:138368318828:web:463b42a4721183316b8749",
//     measurementId: "G-9YBZWMSDK4"
//   };