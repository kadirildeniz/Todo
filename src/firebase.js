import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZQ_FPvMthxEgMk8OvwaCdpkIkWRgmU8I",
    authDomain: "react-todo-app-b38ae.firebaseapp.com",
    projectId: "react-todo-app-b38ae",
    storageBucket: "react-todo-app-b38ae.appspot.com",
    messagingSenderId: "679362295405",
    appId: "1:679362295405:web:d2fec6b2639bb03f917164"
  };

  initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore()
  
  export {auth, provider , db}
