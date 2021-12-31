import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDom0N-G4DdWs7Ke5Hn0FYwHtAHAVxHgnA",
  authDomain: "react-guests.firebaseapp.com",
  projectId: "react-guests",
  storageBucket: "react-guests.appspot.com",
  messagingSenderId: "297319685846",
  appId: "1:297319685846:web:ae14a124ea3b1c0c08f377",
  measurementId: "G-DQMPM045RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default getAuth(app);
