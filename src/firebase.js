import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB4wpIpu37rJXA_oPgssu5z949rWo_SzH4",
  authDomain: "gallery-557ba.firebaseapp.com",
  projectId: "gallery-557ba",
  storageBucket: "gallery-557ba.appspot.com",
  messagingSenderId: "419516014650",
  appId: "1:419516014650:web:3a62c73685b02c7b095503"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
