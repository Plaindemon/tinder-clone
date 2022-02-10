import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKpcMopF51MXxGmfSg-cBJrSRpxS7bwes",
    authDomain: "tinder-clone-246e7.firebaseapp.com",
    projectId: "tinder-clone-246e7",
    storageBucket: "tinder-clone-246e7.appspot.com",
    messagingSenderId: "903304592206",
    appId: "1:903304592206:web:81bf5e9d23e309cb637c1f",
    measurementId: "G-49QS810BDN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;