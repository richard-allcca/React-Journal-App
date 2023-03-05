import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'not-authenticated',//'cheking', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticaded',
        state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticaded',
        state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkinCredentials: (state) => {
      state.status = 'cheking';
    }
  }
});

export const { login, logout, checkinCredentials } = authSlice.actions;

// NOTE - comentado por importación en store ln/7
// export default authSlice.reducer;