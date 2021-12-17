import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore"; 
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCg_xdPSqx7A8s4wjHEuG1zR0vNABHxDFg",
  authDomain: "instagram-clone-development.firebaseapp.com",
  projectId: "instagram-clone-development",
  storageBucket: "instagram-clone-development.appspot.com",
  messagingSenderId: "1010380249620",
  appId: "1:1010380249620:web:613745f3e588defc722501"
};

  const app = initializeApp(firebaseConfig);




const storage = getStorage();
  export const auth = getAuth(app);
  export default getFirestore();
  export {storage}
//background-position: 0 -106px
