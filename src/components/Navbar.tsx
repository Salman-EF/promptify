import React, {  } from 'react';
import { AppBar, Button, Stack } from '@mui/material';
import logo from '../assets/img/logo.png';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Stack direction={'row'} alignItems={'center'} spacing={4} justifyContent={'space-evenly'}>
        <img src={logo} alt="Logo" style={{ height: '76px', marginRight: '10px' }} />
        <Button>Explore</Button>
        <Button>Learn</Button>
        <SearchInput />
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
