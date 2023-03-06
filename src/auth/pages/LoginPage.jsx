import { useDispatch, useSelector } from 'react-redux';

import { Link as LinkRouter } from 'react-router-dom';
import { useFrom } from '../../hooks';

import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from './../layout/AuthLayout';


import { checkingAuthentication, startGoogleSingIn } from './../../store/auth';
import { useMemo } from 'react';



export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status } = useSelector(state => state.auth);
  // Desactiva los botones mientras esta authenticando
  const isAuthentication = useMemo(() => status === 'cheking', [status]);

  const { email, password, onInputChange } = useFrom({
    email: "richard_allcca_llano@hotmail.com",
    password: "123456"
  });


  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication());
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
            />
          </Grid>

          {/* SECTION - Buttons */ }

          <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } >

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
