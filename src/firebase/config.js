import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { collection, addDoc, getDocs, updateDoc, doc} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuxqyrnZCVSQ1wBR9maOTgpmHiK37DXn8",
    authDomain: "senfinance9646e.firebaseapp.com",
    projectId: "senfinance9646e",
    storageBucket: "senfinance9646e.appspot.com",
    messagingSenderId: "626462741821",
    appId: "1:626462741821:web:8ad9df23be0c6eca12a154"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();
const db = getFirestore();
const db1 = getFirestore();

  
export {firebase, auth, db, firebaseConfig, storage, db1};




