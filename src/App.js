import React from 'react';
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HRDashboardPage from './pages/HRDashboardPage';

const appBarStyles = {
  root: {
    flexGrow: 1,
  },
};

const menuButtonStyles = {
  marginRight: 2, 
};

const titleStyles = {
  flexGrow: 1,
};

const App = () => {
  return (
      <div style={appBarStyles.root}>
        <CssBaseline />
        <AppBar position="fixed">
          <Container>
            <Toolbar>
              <IconButton
                edge="start"
                style={menuButtonStyles}
                color="inherit"
                aria-label="menu"
              >
              </IconButton>
              <Typography variant="h6" style={titleStyles}>
                HRMS
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
        <BrowserRouter>
          <Routes>
              <Route path="/hr-dashboard" element={<HRDashboardPage />} />            
              <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>

        
        </Container>
      </div>
  );
};

export default App;

