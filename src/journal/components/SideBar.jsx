import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const SideBar = ({ drawerWidth = 240 }) => {
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
          >
            Richard Allca
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (

              <ListItem key={ text } disablePadding>
                <ListItemButton>

                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>

                  <Grid container >
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Magna incididunt eu Lorem' } />
                  </Grid>

                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>
    </Box>
  );
};
