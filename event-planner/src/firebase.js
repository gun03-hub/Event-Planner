import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2lwDMuok2hIuNoFah--JIwpFVYwlpDI",
  authDomain: "event-planner-e9745.firebaseapp.com",
  projectId: "event-planner-e9745",
  storageBucket: "event-planner-e9745.appspot.com",
  messagingSenderId: "649726470838",
  appId: "1:649726470838:web:4132ecfbf173c749b99417",
  measurementId: "G-1NQTXQZWQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };