import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBknmeDTahqjcq3CaF_vr9IRbDNuC008Lg",
  authDomain: "twitter-clone-c9a91.firebaseapp.com",
  databaseURL: "https://twitter-clone-c9a91.firebaseio.com",
  projectId: "twitter-clone-c9a91",
  storageBucket: "twitter-clone-c9a91.appspot.com",
  messagingSenderId: "164202166443",
  appId: "1:164202166443:web:d0f49e32c8a0ba51c6dfee",
  measurementId: "G-LX1B3P7CGT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;