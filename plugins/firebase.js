import firebase from '@firebase/app'
require('@firebase/auth')

// Your web app's Firebase configuration
const  firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_SENDERID,
    appId: process.env.FIREBASE_APP_ID
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()

export default firebase