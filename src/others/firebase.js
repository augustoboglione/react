import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA0cd10gwcowmRHeM7BuG5jfE5TlOGyvWk",
    authDomain: "apple-40d84.firebaseapp.com",
    projectId: "apple-40d84",
    storageBucket: "apple-40d84.appspot.com",
    messagingSenderId: "1052610938016",
    appId: "1:1052610938016:web:c0b1230b9a9a6005eef5c5"
}

export default getFirestore(initializeApp(firebaseConfig))