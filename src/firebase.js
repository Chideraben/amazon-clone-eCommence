import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASsK39ZucOyHd79dp739hNJOl9_Q5Oink",
    authDomain: "clone-3672d.firebaseapp.com",
    projectId: "clone-3672d",
    storageBucket: "clone-3672d.appspot.com",
    messagingSenderId: "41645332776",
    appId: "1:41645332776:web:d9080684056b06d810d81d",
    measurementId: "G-3F45EP0R0T"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);


export { auth, db };