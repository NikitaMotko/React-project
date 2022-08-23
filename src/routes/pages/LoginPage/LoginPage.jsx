import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/LoginForm.jsx';
import CustomImage from '../../../assets/images/background.jpg';
import SignUpForm from './components/SignUpForm.jsx';
import { resetErrorRequest } from '../../../redux/user/actions/resetErrorsActions';
import Loader from '../../../components/Loader';
import { selectIsLoading } from '../../../redux/loader/selectors';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetErrorRequest());
    localStorage.setItem('token', '');
    localStorage.setItem('userId', '');
  }, []);

  const changeFormView = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      {isLoading && <Loader loading />}
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          backgroundImage: `url(${CustomImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          sm={7}
          md={3}
          component={Paper}
          sx={{
            borderRadius: '30px',
            padding: '25px',
            margin: '80px',
            justifyContent: 'center',
            boxShadow: 10,
          }}
        >
          {isSignUp ? (
            <SignUpForm
              changeForm={changeFormView}
              contentText="Already have account? Please sign in"
            />
          ) : (
            <LoginForm
              changeForm={changeFormView}
              contentText="Don't have an account? Sign Up"
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
