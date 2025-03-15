import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal";

/**
 * customHook to validate state authenticated
 * @returns status, 'not-authenticated' || 'checking' || 'authenticated'
 */

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // observer que comprueba si existe un user
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
      dispatch(startLoadingNotes());
    });
  }, []);

  return {
    status, //'not-authenticated','checking', 'authenticated'
  };
};
