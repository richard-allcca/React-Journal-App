import { Link as LinkRouter } from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from './../layout/AuthLayout';


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta" >
      <form>
        <Grid container >

          {/* inputs */ }

          <Grid item xs={ 12 } sx={ { mb: 2 } } >
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={ { mb: 2 } } >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } >
            <TextField
              label="Contraseña"
              type="password"
              placeholder="*****"
              fullWidth
            />
          </Grid>

          {/* Buttons */ }

          <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } } >
            <Grid item xs={ 12 } >
              <Button variant="contained" fullWidth >
                Crear
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
