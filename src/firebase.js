import * as firebase from "firebase";
let firebaseConfig = {
    apiKey: "AIzaSyBKFXyJFQMBZmMLbmN8K9nm5ex3xu1LrdE",
    authDomain: "reactnote-1e397.firebaseapp.com",
    databaseURL: "https://reactnote-1e397.firebaseio.com",
    projectId: "reactnote-1e397",
    storageBucket: "reactnote-1e397.appspot.com",
    messagingSenderId: "930428790221",
    appId: "1:930428790221:web:335f06a2a034dca4a99084"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export const database=firebase.database().ref("/usernotes");

  export const auth=firebase.auth();
  export const googleProvider=new firebase.auth.GoogleAuthProvider();