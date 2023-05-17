import React, {  } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import logo from '../assets/img/logo.png';

const Navbar: React.FC = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ height: '76px', marginRight: '10px' }} />
        <Button>Explore</Button>
        <Button>Learn</Button>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
