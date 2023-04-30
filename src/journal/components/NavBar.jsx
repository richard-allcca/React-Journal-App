import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined';
import { LogoutOutlined } from '@mui/icons-material';
import { initLogout } from './../../store/auth/autThhunk';
import { useDispatch } from 'react-redux';


export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  function onLogout() {
    // console.log('logout');
    dispatch(initLogout());
  }

  return (
    <AppBar // component material
      position="fixed"
      elevation={ 0 }
      sx={ {
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      } }
    >

      <Toolbar>

        <IconButton
          // size='large'
          edge='start'
          color='inherit'
          sx={ { mr: 2, display: { sm: 'none' } } }
        >
          <MenuOutlineIcon />
        </IconButton>

        <Grid
          container direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography viriant='h6' noWrap component='div' >
            JournalApp
          </Typography>

          <IconButton
            onClick={ onLogout }
            color='error'  >
            <LogoutOutlined />
          </IconButton>

        </Grid>

      </Toolbar>

    </AppBar>
  );
};


   // <div style={ { flex: 1 } } />

   // <Link component={ LinkRouter } color="#fff" underline='none' >
   //    <Typography variant='h6' color="white">Cambiar tema</Typography>
   // </Link>