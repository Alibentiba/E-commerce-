// import firebase from "firebase/app" 

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/auth" 


const firebaseConfig = {
    apiKey: "AIzaSyAhr8zQq7RPvvz6lrFtvNAe6NV5QTeUJfM",
    authDomain: "ecom-5267d.firebaseapp.com",
    projectId: "ecom-5267d",
    storageBucket: "ecom-5267d.appspot.com",
    messagingSenderId: "564032441617",
    appId: "1:564032441617:web:ea1d3afac2ad72dc82d0b0",
    measurementId: "G-C78V4S4BK6"
    
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app)
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  export { auth,provider,storage};
  export default db;
 