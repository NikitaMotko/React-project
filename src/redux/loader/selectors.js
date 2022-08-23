import { createSelector } from '@reduxjs/toolkit';

export const selectLoader = (state) => state.loader;

export const selectIsLoading = createSelector(
  selectLoader,
  (loader) => loader.isLoading,
);
