import { app } from "./firebaseconfig";
import firebase from "firebase/app"
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile,
} from "firebase/auth";
import Router from 'next/router';

const auth = getAuth(app);

export function createNewAccount(data = {}) {
    console.log('this is data', data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {displayName: `${data.name}`}).then(() => {
          console.log('Account updated')
        }).catch((error) => {
          console.log('error updating account', error)
        });

      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode)
      console.log(errorMessage)
  });
}

export function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Router.replace('/home')
        console.log('this is user',user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
}

export { auth }