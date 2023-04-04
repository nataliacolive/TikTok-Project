
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCktIEXDVmir6dYQc9RUt0oq1rsLX93m9o",
  authDomain: "tiktok---jornadadev-66314.firebaseapp.com",
  projectId: "tiktok---jornadadev-66314",
  storageBucket: "tiktok---jornadadev-66314.appspot.com",
  messagingSenderId: "226246695474",
  appId: "1:226246695474:web:1e3d7fc4804c900dc03a2b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
