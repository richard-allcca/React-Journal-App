import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link as LinkRouter } from 'react-router-dom';

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from './../layout/AuthLayout';
import { useFrom } from './../../hooks/useForm';

import { creatingUserWithEmailPassword } from './../../store/auth';


const initialState = {
  displayName: '',
  email: '',
  password: '',
};

const inputErrorMessages = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 caracteres'],
  displayName: [(value) => value.length >= 2, 'El nombre es obligatorio'],
};


export const RegisterPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);
	const isAuthentication = useMemo(() => status === "checking", [status]);

  const {
    formState,
    displayName,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid, passwordValid
  } = useFrom(initialState, inputErrorMessages);
    console.log("🚀 ~ RegisterPage ~ isFormValid:", isFormValid)

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!isFormValid) return;

    dispatch(creatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta" >
      <h1>Formulario: { isFormValid ? 'valido' : 'no valido' }</h1>
      <form onSubmit={ onSubmit } >
        <Grid container >

          {/* inputs */ }

          <Grid item xs={ 12 } sx={ { mb: 2 } } >
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              onChange={ onInputChange }
              error={ displayNameValid && isSubmitted }
              helperText={ displayName }
            />
          </Grid>

          <Grid item xs={ 12 } sx={ { mb: 2 } } >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              onChange={ onInputChange }
              error={ emailValid && isSubmitted }
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={ 12 } >
            <TextField
              label="Contraseña"
              type="password"
              placeholder="*****"
              fullWidth
              name='password'
              onChange={ onInputChange }
              error={ passwordValid && isSubmitted }
              helperText={ passwordValid }
            />
          </Grid>

          {/* Buttons */ }

          <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } >

            <Grid
              display={ !!errorMessage ? '' : 'none' }
              item
              xs={ 12 } >
              <Alert severity='error' >{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 } >
              <Button
                disabled={ !isFormValid || isAuthentication }
                type='submit'
                variant="contained"
                fullWidth >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end" >
            <Typography sx={ { mr: 1 } } >
              ¿Ya tienes cuenta?
            </Typography>
            <Link component={ LinkRouter } color="inherit" to="/auth/login" >
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
