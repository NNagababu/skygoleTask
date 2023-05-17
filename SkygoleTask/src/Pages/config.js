
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';


const config = {
    apiKey: "AIzaSyAkhnLTfRSPZ73C58jCj-sTBkiDmL-NQQM",
    authDomain: "loginpg-86dfe.firebaseapp.com",
    projectId: "loginpg-86dfe",
    storageBucket: "loginpg-86dfe.appspot.com",
    messagingSenderId: "640290488035",
    appId: "1:640290488035:web:be02bb4ab9451ee6bdcfd6",
    measurementId: "G-CTFFMP05C1"
  
  }

  const ap = initializeApp(config)
  export const auth = getAuth(ap)
