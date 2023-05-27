import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQD7LbwC4mW_YiemKKwswIr58k9t9IAe4",
  authDomain: "snapshot-805c1.firebaseapp.com",
  projectId: "snapshot-805c1",
  storageBucket: "snapshot-805c1.appspot.com",
  messagingSenderId: "301848968015",
  appId: "1:301848968015:web:345a2459ba400701eea33a",
  measurementId: "G-7BBEZJY12W"
};

// Initialize Firebase


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();



