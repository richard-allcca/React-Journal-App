import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   status: 'not-authenticated',
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
      login: (state, action) => {
         // state.status = 
      },
      logout: (state, action) => {

      },
      checkinCredentials: (state) => {
         state.status = 'cheking'
      }
   }
});

export const { login, logout, checkinCredentials } = authSlice.actions;

// NOTE - comentado por uso en store ln/6
// export default authSlice.reducer;