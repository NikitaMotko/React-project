import React, { useState, useEffect } from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useDispatch, useSelector } from 'react-redux';
import LoginPageTextField from '../../../../components/LoginPageTextField';
import {
  REGEX_USERNAME,
  REGEX_EMAIL,
  REGEX_PASSWORD,
} from '../../../../constants';
import { signUpRequest } from '../../../../redux/user/actions/signUpActions';
import { selectSignUpError } from '../../../../redux/user/selectors.js';

const SignUpForm = ({ changeForm, contentText }) => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const errorMessage = useSelector(selectSignUpError);

  const handleChangeValues = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (errorMessage) {
      setErrors({ ...errors, email: errorMessage });
    }
  }, [errorMessage]);

  const validate = (values) => {
    const regUsername = REGEX_USERNAME.test(values.username);
    const regEmail = REGEX_EMAIL.test(values.email);
    const regPassword = REGEX_PASSWORD.test(values.password);

    setErrors({
      username: regUsername ? null : 'Username invalid',
      email: regEmail ? null : 'Email invalid',
      password: regPassword
        ? null
        : 'Password should contain only latin characters, at least 1 upper and lower case symbol and 1 number, minimal size of password: 8, maximum: 20',
    });

    return regUsername && regEmail && regPassword;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = validate(formValues);

    if (isValidated) {
      dispatch(signUpRequest(formValues, changeForm));
    }
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
        <HowToRegIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <LoginPageTextField
        onChange={handleChangeValues}
        label="Username"
        name="username"
        type="text"
        error={Boolean(errors.username)}
        helperText={errors.username}
        autoFocus
      />
      <LoginPageTextField
        onChange={handleChangeValues}
        label="Email"
        name="email"
        type="email"
        error={Boolean(errors.email)}
        helperText={errors.email}
        autoComplete="email"
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
        Sign Up
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

export default SignUpForm;
