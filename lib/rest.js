import {collection, addDoc} from 'firebase/firestore'
import { db } from './firebaseconfig'

const userRef = collection(db, 'users')

export function addAccountDB(user = {}){
    console.log('adding a user')
    const {email, uid, name} = user
    addDoc(userRef, {
        name: name,
        email: email,
        uid: uid 
    })
    .then(() => {
        alert('Account Created')
    })
    .catch((err) => {
        alert(err.message)
    })

}