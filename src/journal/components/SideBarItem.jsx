import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title;
  }, [title]);

  const onActivateNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  return (
    <ListItem disablePadding onClick={ onActivateNote }>
      <ListItemButton>

        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>

        <Grid container >
          <ListItemText primary={ newTitle || 'Sin titulo' } />
          <ListItemText secondary={ body || 'Magna incididunt eu Lorem' } />
        </Grid>

      </ListItemButton>
    </ListItem>

  );
};

export default SideBarItem;
