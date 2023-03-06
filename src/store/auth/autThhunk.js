import { registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';

import { checkinCredentials, login, logout } from ".";


export const checkingAuthentication = (email, password) => {

  return async (dispatch) => {
    dispatch(checkinCredentials());
  };
};

export const startGoogleSingIn = (email, password) => {

  return async (dispatch) => {
    dispatch(checkinCredentials());

    const result = await singInWithGoogle();
    // console.log(result);
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

  return async (dispatch) => {

    dispatch(checkinCredentials());

    const resp = await registerUserWithEmailPassword({ email, password, displayName });

    if (!resp.ok) return dispatch(logout(resp.errorMessage));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};