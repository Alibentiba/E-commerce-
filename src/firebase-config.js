// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhr8zQq7RPvvz6lrFtvNAe6NV5QTeUJfM",
  authDomain: "ecom-5267d.firebaseapp.com",
  projectId: "ecom-5267d",
  storageBucket: "ecom-5267d.appspot.com",
  messagingSenderId: "564032441617",
  appId: "1:564032441617:web:5f51a8bc4f9c2a4e82d0b0",
  measurementId: "G-TRZKM47F1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);