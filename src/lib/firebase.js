import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAGbNPAhrfB3cBJCE67LWLigVFrmltlfgs",

  authDomain: "portfolioio-d9a91.firebaseapp.com",

  projectId: "portfolioio-d9a91",

  storageBucket: "portfolioio-d9a91.appspot.com",

  messagingSenderId: "151368453881",

  appId: "1:151368453881:web:5fd3b67c1e28aa6cbd1c28",

  measurementId: "G-J4YM3XFBKN"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();
export const firestore = firebase.firestore();