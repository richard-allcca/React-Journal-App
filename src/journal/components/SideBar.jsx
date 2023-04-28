import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import SideBarItem from './SideBarItem';

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector(state => state.auth);
  const { notes } = useSelector(state => state.journal);

  return (
    <Box
      component="nav"
      sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
    >
      <Drawer // component mateial
        variant='permanent'//  ó temporary en caso este component sea condicional
        open={ true } // si nunca va a cambiar no necesita el true
        sx={ {
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        } }
      >
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            textAlign='center'
            className='animate__animated animate__fadeInDown'
          >
            { displayName }
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            notes.map(note => (
              <SideBarItem key={note.id} {...note} />
            ))
          }
        </List>

      </Drawer>
    </Box>
  );
};
