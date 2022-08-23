import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import user from '../user/reducers';
import loader from '../loader/reducers';
import admin from '../admin/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user,
  loader,
  admin,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
