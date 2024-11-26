

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';

function Cart(){
    return (
      <IconButton
        size="large"
        aria-label="show 3 cart items"
        color="yellow"
      >
        <Badge badgeContent={3} color="error">
          <LocalMallIcon />
        </Badge>
      </IconButton>
    )
}

export default Cart;