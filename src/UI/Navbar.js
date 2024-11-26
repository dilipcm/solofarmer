import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Logo from '../UI/Logo'
import Searchbar  from '../UI/Searchbar'
import Cart from './Cart.js';
import Profile from './Profile.js';
import CurrentLocation from '../UI/CurrentLocation';
function Navbar() {


  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fafaf5' }}>
        <Toolbar variant="dense">
          <Logo />
          <CurrentLocation />
          
          <Searchbar />
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <Cart />
          <Profile />
          </Box>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
