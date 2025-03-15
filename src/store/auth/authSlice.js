import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del slice de autenticación
const initialState = {
  status: 'not-authenticated', //'checking', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
};

// Creación del slice de autenticación
export const authSlice = createSlice({
  name: 'auth', // Nombre del slice
  initialState, // Estado inicial
  reducers: {
    // Reducer para el login
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
    },
    // Reducer para el logout
    logout: (state, { payload }) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload;
    },
    // Reducer para verificar credenciales
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

// Exportación de las acciones generadas por el slice
export const { login, logout, checkingCredentials } = authSlice.actions;

// Exportación del reducer del slice (comentado por importación en store ln/7)
// export default authSlice.reducer;