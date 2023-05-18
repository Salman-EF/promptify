import React, {  } from 'react';
import { AppBar, Link, Stack } from '@mui/material';
import logo from '../assets/img/logo.png';
import SearchInput from './SearchInput';

const Navbar: React.FC = () => {

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Stack direction={'row'} alignItems={'center'} spacing={4} justifyContent={'space-evenly'}>
        <img src={logo} alt="Logo" style={{ height: '76px', marginRight: '10px' }} />
        <Link href='#'>Explore</Link>
        <Link href='#'>Learn</Link>
        <SearchInput />
        <Link href='#'>Sign In</Link>
        <Link href='#' className='primary'>Sign Up</Link>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
