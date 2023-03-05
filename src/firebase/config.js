// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Para la authenticación ( manual) 
import { getAuth } from 'firebase/auth';

// Configuración de DDBB 
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAznpptW79OagrQJ-C-BV8_YDYY6DtKIOk",
  authDomain: "react-fer-89c41.firebaseapp.com",
  projectId: "react-fer-89c41",
  storageBucket: "react-fer-89c41.appspot.com",
  messagingSenderId: "527283902451",
  appId: "1:527283902451:web:89cca331be6b93f3b8a486"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Contiene todas las funcionalidades de Autenticación (manual)
export const FirebaseAuth = getAuth(FirebaseApp);

// Configuración de la base de datos (manual)
export const Firebase = getFirestore(FirebaseApp);