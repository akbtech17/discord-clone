import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjjjF1ownPPZoyLJ-64mdbHc5v9HdZFC0",
    authDomain: "discord-clone-5b015.firebaseapp.com",
    databaseURL: "https://discord-clone-5b015.firebaseio.com",
    projectId: "discord-clone-5b015",
    storageBucket: "discord-clone-5b015.appspot.com",
    messagingSenderId: "45568558787",
    appId: "1:45568558787:web:acca9eaf2cf87f3dc44476",
    measurementId: "G-KF0RFN508H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db; 