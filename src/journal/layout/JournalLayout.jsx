
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';
import { Divider, Toolbar } from '@mui/material';

const drawerWidth = 240;//tamaño especifico para sidebar and NavBar

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={ { display: 'flex' } }>

      <NavBar drawerWidth={ drawerWidth } />

      <SideBar drawerWidth={ drawerWidth } />

      <Box
        component="main"
        sx={ { flexGrow: 1, p: 3, mt: 7, backgroundColor: 'lightgray' } }
        className='animate__animated animate__bounceInRight'
      >
        {/* <Toolbar />  comentado por el marginTop de box */ }
        { children }
      </Box>
    </Box>
  );
};
