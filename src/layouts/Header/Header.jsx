import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (url) => {
    navigate(`${url}`);
  };

  const isAdmin = +localStorage.userId === 1 || +localStorage.userId === 2;

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            mr: 1,
          }}
        >
          <Typography
            onClick={() => handleNavigateTo('/')}
            sx={{ cursor: 'pointer' }}
            variant="h6"
            color="inherit"
            component="div"
          >
            GENSHIN-GACHA
          </Typography>
        </Box>
        {isAdmin ? (
          <Box
            onClick={() => handleNavigateTo('/admin')}
            sx={{ display: 'flex' }}
          >
            <Button variant="h6" color="inherit">
              Admin page
              <AdminPanelSettingsIcon sx={{ ml: 0.7 }} />
            </Button>
          </Box>
        ) : null}
        <Box
          onClick={() => handleNavigateTo('/login')}
          sx={{ display: 'flex' }}
        >
          <Button variant="h6" color="inherit">
            Sign out
            <LogoutIcon sx={{ ml: 0.7 }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
