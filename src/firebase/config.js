import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABNieiYcBNpPbeP5qyvtAQ4iuf7u7e35E",
    authDomain: "reactgallery-1729.firebaseapp.com",
    databaseURL: "https://reactgallery-1729.firebaseio.com",
    projectId: "reactgallery-1729",
    storageBucket: "reactgallery-1729.appspot.com",
    messagingSenderId: "95202627308",
    appId: "1:95202627308:web:ed1b1e072f9ad2eef11fc9",
    measurementId: "G-8FN2K2K2QS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage,projectFirestore};