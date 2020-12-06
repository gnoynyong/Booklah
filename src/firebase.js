import firebase from "firebase/app"
import "firebase/auth"


//initialize firebase 
const app = firebase.initializeApp({
    apikey: process.env.REACT_FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
})

export const auth = app.auth()
export default app