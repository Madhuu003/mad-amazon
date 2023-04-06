
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5NDD92XbAIZzJgnio6PQrcnLkVtbV-T4",
  authDomain: "madhu-11d3f.firebaseapp.com",
  projectId: "madhu-11d3f",
  storageBucket: "madhu-11d3f.appspot.com",
  messagingSenderId: "58002609973",
  appId: "1:58002609973:web:5fdf1b7e6d06f22d65de7c",
  measurementId: "G-2B09T59MH9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
