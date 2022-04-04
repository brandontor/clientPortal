import {collection, addDoc, getDocs, doc, query, where} from 'firebase/firestore'
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

const q =  query(collection(db, "forums"))
export async function getForums() {
    const querySnapshot = await getDocs(q);
    let posts = []
    querySnapshot.forEach((doc) => {
        posts.push(doc.data())
    })

    return posts
}