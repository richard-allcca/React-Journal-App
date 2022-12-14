import { Link as LinkRouter } from 'react-router-dom'

import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined'
import { LogoutOutlined } from '@mui/icons-material'

export const NavBar = ({ drawerWidth = 240 }) => {
   return (
      <AppBar
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

            <Grid container direction='row' justifyContent='space-between' alignItems='center' >
               <Typography viriant='h6' noWrap component='div' >
                  JournalApp
               </Typography>

               <IconButton>
                  <LogoutOutlined />
               </IconButton>

            </Grid>
         </Toolbar>


      </AppBar>
   )
}


   // <div style={ { flex: 1 } } />

   // <Link component={ LinkRouter } color="#fff" underline='none' >
   //    <Typography variant='h6' color="white">Cambiar tema</Typography>
   // </Link>