// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9icstx1ORqc9J4DhjMTxIadxJUdWv1u8",
  authDomain: "parperfeito-ae6c8.firebaseapp.com",
  projectId: "parperfeito-ae6c8",
  storageBucket: "parperfeito-ae6c8.appspot.com",
  messagingSenderId: "630104399845",
  appId: "1:630104399845:web:25b5b49af797bbdbc3190c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };