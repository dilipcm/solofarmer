
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';
function CurrentLocation(){
    return(
        
            <IconButton
            size="large"
            aria-label="show 3 cart items"
            color="yellow"
            sx={{
            mr: 4
         }}
         >
          <LocationOnIcon  sx = {{color:'green'}}/>

            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                <Typography component='span' fontSize={12}>
                Deliver to Dilip C M
                </Typography>
                 <Typography component='span' fontWeight='bold' fontSize={14}>
                       Bengaluru 560037
                </Typography>
            </Box>          
      </IconButton>
       
        
    )
}

export default CurrentLocation;