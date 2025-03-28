import {
  loginWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";

import { checkingCredentials, login, logout } from ".";


export const startGoogleSingIn = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const creatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

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
    dispatch(checkingCredentials());

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
