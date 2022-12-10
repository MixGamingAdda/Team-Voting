import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDdyNtRdpImzp9B3hMwQ5xIB1qLFtMbkUQ",
  authDomain: "voting-app-f1419.firebaseapp.com",
  databaseURL: "https://voting-app-f1419-default-rtdb.firebaseio.com",
  projectId: "voting-app-f1419",
  storageBucket: "voting-app-f1419.appspot.com",
  messagingSenderId: "325062819752",
  appId: "1:325062819752:web:5cf63fe8ad47946fa4e79d",
  measurementId: "G-ETK9DEYMT8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();