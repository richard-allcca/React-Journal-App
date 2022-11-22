import { Link as LinkRouter } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from './../layout/AuthLayout';


export const LoginPage = () => {
   return (
      <AuthLayout title="login" >
         <form>
            <Grid container >
               {/* inputs */ }
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
                  <Grid item xs={ 12 } sm={ 6 } >
                     <Button variant="contained" fullWidth >
                        Login
                     </Button>
                  </Grid>

                  <Grid item xs={ 12 } sm={ 6 } >
                     <Button variant="contained" fullWidth >
                        <Google />
                        <Typography sx={ { ml: 1 } } >Google</Typography>
                     </Button>
                  </Grid>
               </Grid>

               <Grid container direction="row" justifyContent="end" >
                  <Link component={ LinkRouter } color="inherit" to="/auth/register" >
                     Crear una cuenta
                  </Link>
               </Grid>

            </Grid>
         </form>
      </AuthLayout>
   )
}
