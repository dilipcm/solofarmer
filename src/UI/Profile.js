import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';


function Profile(){
    const [anchorEl, setAnchorEl] = React.useState(null);

    const menuId = 'primary-search-account-menu';
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    return (
        <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="yellow"
        >
            <AccountCircle />
        </IconButton>
    );
}

export default Profile;