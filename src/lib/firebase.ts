import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6ELP_YfsresisQddHhG9igzG7HHHYbbA",
  authDomain: "cutie6pet-booking.firebaseapp.com",
  projectId: "cutie6pet-booking",
  storageBucket: "cutie6pet-booking.firebasestorage.app",
  messagingSenderId: "711960281904",
  appId: "1:711960281904:web:0c21f0fc1b80c5d9fd3ef5",
  measurementId: "G-H2XYZS4ZEE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

