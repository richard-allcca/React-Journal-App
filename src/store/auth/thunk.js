import { checkinCredentials } from "./";
import { singInWithGoogle } from './../../firebase/providers';


export const checkingAuthentication = (email, password) => {

  return async (dispatch) => {
    dispatch(checkinCredentials());
  };
};

export const startGoogleSingIn = (email, password) => {

  return async (dispatch) => {
    dispatch(checkinCredentials());

    const result = await singInWithGoogle();
    console.log(result);
  };
};