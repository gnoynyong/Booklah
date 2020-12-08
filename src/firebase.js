import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCxtx2ZxZInzN7bFVrOIzouvTVfj2F-CSg",
    authDomain: "booklah-db050.firebaseapp.com",
    databaseURL: "https://booklah-db050.firebaseio.com",
    projectId: "booklah-db050",
    storageBucket: "booklah-db050.appspot.com",
    messagingSenderId: "143847281917",
    appId: "1:143847281917:web:d2c01ac244bb4fab965a94"
  };

firebase.initializeApp(firebaseConfig);


//initialize firebase db
const booklahStorage = firebase.storage();
const booklahfirestore = firebase.firestore();

export {booklahStorage,booklahfirestore};