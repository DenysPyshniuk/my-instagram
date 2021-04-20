import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//here i want to import the seed file

const config = {
  apiKey: "AIzaSyBQd_nIJ9ghvNHcJo8Ko9WjYLQMTxBjbrY",
  authDomain: "my-instagram-denyspyshniuk.firebaseapp.com",
  projectId: "my-instagram-denyspyshniuk",
  storageBucket: "my-instagram-denyspyshniuk.appspot.com",
  messagingSenderId: "1009902189750",
  appId: "1:1009902189750:web:89de586b94c0fcdc273a17",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//here is where I want to call the seed file (only ONCE!)
//seedDatabase(firebase)

export { firebase, FieldValue };
