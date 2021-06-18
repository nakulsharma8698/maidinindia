import firebase from 'firebase/app';
import 'firebase/auth';
 const config ={
    apiKey: "AIzaSyBaxDikobD16fqVR66C_3LJYUkXIf005ZQ",
    authDomain: "maidinindia-477a0.firebaseapp.com",
    projectId: "maidinindia-477a0",
    storageBucket: "maidinindia-477a0.appspot.com",
    messagingSenderId: "724565367970",
    appId: "1:724565367970:web:dd49a933b593466efe0bfb"
 }
 firebase.initializeApp(config);
 export default firebase;