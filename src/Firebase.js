import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseui from "firebaseui";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyB5l8Lyrn-mqy2LJDPOz_ca5e79qM3qWR8",
    authDomain: "legalease-anshuman.firebaseapp.com",
    projectId: "legalease-anshuman",
    storageBucket: "legalease-anshuman.appspot.com",
    messagingSenderId: "650431518522",
    appId: "1:650431518522:web:f02138340f7d398bda6203",
    measurementId: "G-80F31S2MM6"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}


