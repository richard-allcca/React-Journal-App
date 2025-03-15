import { useDispatch, useSelector } from 'react-redux';

import { Link as LinkRouter } from 'react-router-dom';
import { useFrom } from '../../hooks';

import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from './../layout/AuthLayout';

import { initLoginWithEmailPassword, startGoogleSingIn } from './../../store/auth';
import { useMemo, useState } from 'react';

const initialState = {
  displayName: '',
  email: '',
  password: '',
};

const validationsInput = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 caracteres'],
};

export const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);

  // Desactiva los botones mientras esta autenticando
  const isAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, email, password, onInputChange,
    isFormValid, emailValid, passwordValid,
  } = useFrom(initialState, validationsInput);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!isFormValid) return;

    dispatch(initLoginWithEmailPassword(formState));

  };

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn');

    dispatch(startGoogleSingIn());
  };

  return (
    <AuthLayout title="login" >

      <form onSubmit={ onSubmit } >

        <Grid container >

          {/* SECTION - inputs */ }

          <Grid item xs={ 12 } sx={ { mb: 2 } } >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
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
              value={ password }
              onChange={ onInputChange }
              error={ passwordValid && isSubmitted }
            />
          </Grid>

          {/* SECTION - Buttons */ }

          <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } >

            <Grid
              display={ !!errorMessage ? '' : 'none' }
              item
              xs={ 12 }
            >
              <Alert severity='error' >{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } >
              <Button
                disabled={ isAuthentication }
                type='submit' //! importante para el onSubmit
                variant="contained"
                fullWidth >
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 } >
              <Button
                disabled={ isAuthentication }
                variant="contained"
                fullWidth
                onClick={ onGoogleSingIn }
              >
                <Google />
                <Typography sx={ { ml: 1 } } >Google</Typography>
              </Button>
            </Grid>
          </Grid>

          {/* SECTION - crear cuenta */ }

          <Grid container direction="row" justifyContent="end" >
            <Link component={ LinkRouter } color="inherit" to="/auth/register" >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>

      </form>

    </AuthLayout>
  );
};
