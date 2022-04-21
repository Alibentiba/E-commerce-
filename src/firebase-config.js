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
  appId: "1:564032441617:web:ea1d3afac2ad72dc82d0b0",
  measurementId: "G-C78V4S4BK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
