import React from 'react';
import './assets/styles';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Header, Footer } from './layouts';

const App = () => {
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          flex: '1 0 auto',
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '15px',
        }}
      >
        <Outlet />
      </Grid>
      <Footer />
    </>
  );
};

export default App;
