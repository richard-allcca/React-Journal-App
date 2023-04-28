import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

const LoadingAuth = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction='column'
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      sx={ { minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 } }
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
        item
        sx={ {
          width: { sm: 450 },
        } }
      >
        <CircularProgress color='warning' />

      </Grid>
    </Grid>
  );
};

export default LoadingAuth;