import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

// Class - 278 Auth con google

export const singInWithGoogle = async () => {

  try {

    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // REVIEW - Método para obtiener las credentials de google como el  token y hacer más
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    // Datos del usuario authenticado
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName, email, photoURL, uid
    };

  } catch (error) {

    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.(optional)
    const email = error.customData.email;
    // The AuthCredential type that was used. (optional)
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};