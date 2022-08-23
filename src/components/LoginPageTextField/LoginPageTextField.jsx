import React from 'react';
import { TextField } from '@mui/material';

const LoginPageTextField = ({ ...props }) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      {...props}
    />
  );
};

export default LoginPageTextField;
