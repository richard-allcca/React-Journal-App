import { Link as LinkRouter } from 'react-router-dom'

import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuOutlineIcon from '@mui/icons-material/MenuOutlined'
import { Box } from '@mui/system'


export const JournalLayout = ({ children }) => {
   return (
      <>
         <AppBar position="sticky" elevation={ 0 } >
            <Toolbar>
               <IconButton
                  size='large'
                  edge='start'
                  color='info'
               >
                  <MenuOutlineIcon />
               </IconButton>

               <div style={ { flex: 1 } } />

               <Link component={ LinkRouter } color="#fff" underline='none' >
                  <Typography variant='h6' color="white">Cambiar tema</Typography>
               </Link>
            </Toolbar>
         </AppBar>

         <Box component="main" sx={ { flexGrow: 1, p: 3 } } >
            { children }
         </Box>
      </>
   )
}
