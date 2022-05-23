import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/storage'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const config = {
    apiKey: "AIzaSyDEIrx97vCIHjOLQ5HEtt8LT5PlYoJLPLE",
    authDomain: "platinum-kennels-5eaba.firebaseapp.com",
    projectId: "platinum-kennels-5eaba",
    storageBucket: "platinum-kennels-5eaba.appspot.com",
    messagingSenderId: "551647871139",
    appId: "1:551647871139:web:2b473d5e17d4fd80913f16"
};
  
const App = firebase.initializeApp(config)
const db = getFirestore(App);
const storage = getStorage(App);
//used to obtain the firestore database
export { db, storage } ;