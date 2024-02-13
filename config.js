import { firebase } from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATHJC3Vpk4KKEcpUzOZFDFF6lMCoGkjQk",
    authDomain: "e-clot.firebaseapp.com",
    projectId: "e-clot",
    storageBucket: "e-clot.appspot.com",
    messagingSenderId: "29035152087",
    appId: "1:29035152087:web:472475924d54b93103a692"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export  {firebase};