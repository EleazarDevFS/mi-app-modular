// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANQcK9XKfemdw31oppPBfC_gzx-6-XKTc",
  authDomain: "mi-app-modular-f0bfd.firebaseapp.com",
  projectId: "mi-app-modular-f0bfd",
  storageBucket: "mi-app-modular-f0bfd.firebasestorage.app",
  messagingSenderId: "151998474365",
  appId: "1:151998474365:web:14295a512460fb2bfaa914",
  measurementId: "G-JV3S1RQLPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Hacer que la lista de tareas guarde un historico de las tareas completadas con la fecha de cuando se completaron y tareas eliminadas con la fecha en que se eliminaron.