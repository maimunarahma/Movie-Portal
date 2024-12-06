// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZIga5MGSNAdk7ACeLX19jVDi0SiPyt0",
  authDomain: "movie-portal-159c3.firebaseapp.com",
  projectId: "movie-portal-159c3",
  storageBucket: "movie-portal-159c3.firebasestorage.app",
  messagingSenderId: "146063731727",
  appId: "1:146063731727:web:b5c3b667d939c32458477a",
  measurementId: "G-L80VCE65C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)


















// apiKey:import.meta.env.VITE_apiKey,
// authDomain:import.meta.env.VITE_authDomain, 
// projectId:import.meta.env.VITE_projectId, 
// storageBucket:import.meta.env.VITE_storageBucket, 
// messagingSenderId:import.meta.env.VITE_messagingSenderId,
// appId:import.meta.env.VITE_appId, 
// measurementId:import.meta.env.VITE_measurementId, 