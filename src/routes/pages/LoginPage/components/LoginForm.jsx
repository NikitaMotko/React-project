import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Avatar, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginPageTextField from '../../../../components/LoginPageTextField';
import { loginRequest } from '../../../../redux/user/actions/loginActions';
import { selectLoginError } from '../../../../redux/user/selectors.js';

const LoginForm = ({ changeForm, contentText }) => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorMessage = useSelector(selectLoginError);

  const handleChangeValues = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (errorMessage) {
      switch (errorMessage) {
        case 'Cannot find user':
        case 'Email format is invalid':
        case 'Email and password are required':
          setErrors({ ...formValues, email: errorMessage, password: '' });
          break;
        case 'Incorrect password':
          setErrors({ ...formValues, email: '', password: errorMessage });
          break;
        default:
          console.log(errorMessage);
      }
    } else {
      setErrors({ email: '', password: '' });
    }
  }, [errorMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginRequest(formValues, navigate));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginPageTextField
        onChange={handleChangeValues}
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        error={Boolean(errors.email)}
        helperText={errors.email}
        autoFocus
      />
      <LoginPageTextField
        onChange={handleChangeValues}
        label="Password"
        name="password"
        type="password"
        error={Boolean(errors.password)}
        helperText={errors.password}
      />
      <Button sx={{ mt: 2 }} type="submit" fullWidth variant="contained">
        Sign In
      </Button>
      <Typography
        onClick={changeForm}
        sx={{
          mt: 2,
          color: 'blue',
          textDecoration: 'underline',
        }}
      >
        {contentText}
      </Typography>
    </Box>
  );
};

export default LoginForm;
