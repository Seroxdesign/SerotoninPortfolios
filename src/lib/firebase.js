import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdCeLiEdP_kzvF44UfoHXoxG0PsUSNnq8",
  authDomain: "michaellinesdesign-f75e7.firebaseapp.com",
  projectId: "michaellinesdesign-f75e7",
  storageBucket: "michaellinesdesign-f75e7.appspot.com",
  messagingSenderId: "523494310984",
  appId: "1:523494310984:web:8bf522fa6aca14bd40847d",
  measurementId: "G-8ERTXGYQ6W"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const emailAuthProvider = new firebase.auth.EmailAuthProvider();
export const firestore = firebase.firestore();