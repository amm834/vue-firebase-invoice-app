import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCie_xGSOSD0sC3SI5jN2K7UZ77jXD3xNQ",
    authDomain: "invoice-c055e.firebaseapp.com",
    projectId: "invoice-c055e",
    storageBucket: "invoice-c055e.appspot.com",
    messagingSenderId: "871948931588",
    appId: "1:871948931588:web:68b0c0f9eaed7a4ea61b51"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {
    db
}
