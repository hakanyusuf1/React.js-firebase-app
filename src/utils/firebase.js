import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeeAkIsROSSUK1KXzbz9R6uS11d77Fjww",
  authDomain: "contactapp-e76d7.firebaseapp.com",
  databaseURL: "https://contactapp-e76d7-default-rtdb.firebaseio.com",
  projectId: "contactapp-e76d7",
  storageBucket: "contactapp-e76d7.appspot.com",
  messagingSenderId: "634863304492",
  appId: "1:634863304492:web:0f1426d6449f7a7bceb689",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
