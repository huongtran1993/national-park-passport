import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLXyzCi4KZk2oLffSizXx6_zU5BmJDEqs',
  authDomain: 'national-park-passport-731f4.firebaseapp.com',
  projectId: 'national-park-passport-731f4',
  storageBucket: 'national-park-passport-731f4.appspot.com',
  messagingSenderId: '710752415723',
  appId: '1:710752415723:web:6b8b5410e331231745b3ae',
  measurementId: 'G-QMMNBSRELG'
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

export default signInWithEmail;

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     console.log(`User ${uid} is signed in`);
//   } else {
//     // User is signed out
//     console.log('User is signed out');
//   }
// });

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log('Signed in as ', user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(`Error signing up: ${errorCode}: ${errorMessage}`)
//   });



