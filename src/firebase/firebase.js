import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp(
//PONER ACA LA INFO DE SU APP
{
    apiKey: "AIzaSyC83CaGLrbH9S8hu8A-JdXfa53tvyojdU4",
    authDomain: "bolucompras-dadb7.firebaseapp.com",
    projectId: "bolucompras-dadb7",
    storageBucket: "bolucompras-dadb7.appspot.com",
    messagingSenderId: "167905106588",
    appId: "1:167905106588:web:c69c3a3eb2154d45036b59",
    measurementId: "G-T5EJ3HR53Q"
  }
);
export function getFirebase(){
    return app;
}
export function getFirestore(){
    return firebase.firestore(app);
}