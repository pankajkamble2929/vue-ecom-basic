import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAoGi1glp8-UQwm679c6bxYSqxquDUICvc",
    authDomain: "pk-ecommerce-1e56b.firebaseapp.com",
    databaseURL: "https://pk-ecommerce-1e56b-default-rtdb.firebaseio.com/",
    projectId: "pk-ecommerce-1e56b",
    storageBucket: "pk-ecommerce-1e56b.appspot.com",
    messagingSenderId: "875899805062",
    appId: "1:875899805062:web:e2cdf3c6f73262091da007"
};

firebase.initializeApp(firebaseConfig)

// Initialize Firestore and Storage
const db = firebase.firestore()
const storageRef = firebase.storage().ref()