import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

   try {

      const result = await signInWithPopup(FirebaseAuth, googleProvider);

      // REVIEW - de esta forma se obtienen las credentials como el access token y mas
      // const credentials = GoogleAuthProvider.credentialFromResult(result);

      // Aquí se obtiene los datos del usuario authenticado
      const { displayName, email, photoURL, uid } = result.user

      return {
         ok: true,
         // User info
         displayName, email, photoURL, uid
      }

   } catch (error) {

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      return {
         ok: false,
         errorCode,
         errorMessage,
      }
   }
}