import { createSelector } from '@reduxjs/toolkit';

export const selectUser = (state) => state.user;

export const selectLoginError = createSelector(
  selectUser,
  (user) => user.login.errorMessage,
);
export const selectSignUpError = createSelector(
  selectUser,
  (user) => user.signUp.errorMessage,
);
