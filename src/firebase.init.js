// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIWOmQ-NLKWtmRUiA-OisUrgOVjv55BvU",
  authDomain: "ema-jhon-simple-f9426.firebaseapp.com",
  projectId: "ema-jhon-simple-f9426",
  storageBucket: "ema-jhon-simple-f9426.appspot.com",
  messagingSenderId: "26229186284",
  appId: "1:26229186284:web:6aa2253fd25409086b0fc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 