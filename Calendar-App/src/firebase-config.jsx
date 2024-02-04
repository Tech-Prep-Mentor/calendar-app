// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAiVUxiZb90loEBjrhkOfK7fLy6eSCp5xw",
  authDomain: "calendar-organizer-fab63.firebaseapp.com",
  projectId: "calendar-organizer-fab63",
  storageBucket: "calendar-organizer-fab63.appspot.com",
  messagingSenderId: "504275874420",
  appId: "1:504275874420:web:e03b141ec54a18e3375721",
  measurementId: "G-6XK2FK31JR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);

        
    }).catch((error)=>{
        console.log(error);
    })
}