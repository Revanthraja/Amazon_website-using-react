// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxKfjGsWeM_KDx5-4hJm_01saSVQQFr60",
    authDomain: "fir-1bc64.firebaseapp.com",
    projectId: "fir-1bc64",
    storageBucket: "fir-1bc64.appspot.com",
    messagingSenderId: "693086446148",
    appId: "1:693086446148:web:35394a6f790b0ee14e9211",
    measurementId: "G-NXJT7Z625F"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };