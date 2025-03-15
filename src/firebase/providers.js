import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

  const googleProvider = new GoogleAuthProvider();

// LOGIN WITH GOOGLE - 278 Auth con google

export const singInWithGoogle = async () => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    // Datos del usuario autenticado
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.(optional)
    const email = error.customData.email;
    // The AuthCredential type that was used. (optional)
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

// LOGIN EMAIL AND PASSWORD

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    // createUserWithEmailAndPassword, crea, logea como usuario actual
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    // Actualizamos el user actual agregando el displayName
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    // console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

// REGISTRO

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    // console.log(resp);

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {

  // este método cierra cualquier authenticación de firebase (twitter,google,face,email...)
  return await FirebaseAuth.signOut();
};
