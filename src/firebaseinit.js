import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.app().storage('gs://fixr-3b596.appspot.com/');

export {db, storage} ;
