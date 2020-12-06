import firebase from 'firebase/app'

import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyATnSekkXZPpG0tw0fcn9gkPUtLKKbyYes",
  authDomain: "login-with-localstorage.firebaseapp.com",
  projectId: "login-with-localstorage",
  storageBucket: "login-with-localstorage.appspot.com",
  messagingSenderId: "568263028990",
  appId: "1:568263028990:web:59a9de9c9cfa305b82b5af"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db}