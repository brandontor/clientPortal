// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    
    apiKey: "AIzaSyDk4XhJ3xybfGhyYnWziDhdcMKCrEUbwI4",
    authDomain: "btayoan-5757a.firebaseapp.com",
    projectId: "btayoan-5757a",
    storageBucket: "btayoan-5757a.appspot.com",
    messagingSenderId: "979861727460",
    appId: "1:979861727460:web:66240af2c9b3b7d76024f1",
    measurementId: "G-4FJHPY2NZF"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



if (app.name && typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
}

export { app, db };