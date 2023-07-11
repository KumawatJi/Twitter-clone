import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIBCzhXOmQFpHFk6e8Xmf56yqkiKqmD90",
  authDomain: "twitter-clone-4783d.firebaseapp.com",
  projectId: "twitter-clone-4783d",
  storageBucket: "twitter-clone-4783d.appspot.com",
  messagingSenderId: "407592233108",
  appId: "1:407592233108:web:b462e5caf969a1ab156c81",
  measurementId: "G-Z54FH3ZKDD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;