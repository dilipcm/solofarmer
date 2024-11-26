import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/solofarmer-svg-logo.svg';

function Navbar() {
  return (
          
          <IconButton edge="start" color="inherit" aria-label="Solofarmer Logo" style ={{
            height: '50px', 
            width: '200px',  
            overflow: 'hidden', 
            position: 'relative' 
          }}>
            <img 
              src={logo} 
              alt="Solo Farmer Logo" 
              style={{ 
                height:'50px',
                width:'500px'
            }} 
            />
          </IconButton>
  );
}

export default Navbar;
