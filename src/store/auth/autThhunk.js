import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";

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

export const creatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkinCredentials());

    const resp = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!resp.ok) return dispatch(logout(resp.errorMessage));

    dispatch(login(resp));
  };
};

export const initLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkinCredentials());

    const resp = await loginWithEmailPassword({ email, password });

    if (!resp.ok) return dispatch(logout(resp.errorMessage));

    dispatch(login(resp));
  };
};

export const initLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  };
};
