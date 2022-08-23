import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  };

  return (
    <AppBar
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      <Toolbar variant="dense">
        <Box
          sx={{
            display: 'flex',
            mr: 2,
            flexGrow: 1,
          }}
        >
          <Typography sx={{ ml: 3 }} variant="h6" color="inherit">
            Admin Panel
          </Typography>
        </Box>
        <Box onClick={handleHomePage} sx={{ display: 'flex' }}>
          <Button variant="h6" color="inherit">
            Home page
            <HomeIcon sx={{ ml: 0.7 }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
