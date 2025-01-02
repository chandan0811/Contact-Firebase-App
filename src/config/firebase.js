// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgNLP0vL8SOE4fjjDJYqcre7kbWC_1f54",
  authDomain: "vite-contact-10.firebaseapp.com",
  projectId: "vite-contact-10",
  storageBucket: "vite-contact-10.firebasestorage.app",
  messagingSenderId: "1070025315441",
  appId: "1:1070025315441:web:fe7d90707ea0195702b7d0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)