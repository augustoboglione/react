import {initializeApp} from 'firebase/app'
import {getFirestore, doc, collection, getDocs, updateDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA0cd10gwcowmRHeM7BuG5jfE5TlOGyvWk",
    authDomain: "apple-40d84.firebaseapp.com",
    projectId: "apple-40d84",
    storageBucket: "apple-40d84.appspot.com",
    messagingSenderId: "1052610938016",
    appId: "1:1052610938016:web:c0b1230b9a9a6005eef5c5"
}

const db = getFirestore(initializeApp(firebaseConfig))

const setStock = stock => getDocs(collection(db, 'items'))
    .then(snapshot => snapshot.docs.forEach(item => updateDoc(doc(db, 'items', item.id), {stock})))

export default db
export {setStock}