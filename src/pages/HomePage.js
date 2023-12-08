import React from 'react';
import Login from '../components/auth/Login';
import Hrms from '../components/ui/Hrms';
import { Grid } from '@mui/material';

const HomePage = ({isLoggedIn}) => {
  return (
    <Grid container spacing={2} sx={{marginTop:"100px", alignItems:"ceneter"}}>
      <Grid item lg={6} md={6} xs={6}>
        <Hrms />
      </Grid>
      <Grid item lg={6} md={6} xs={6}>
        <Login isLoggedIn={isLoggedIn} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
