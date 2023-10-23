import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {allReducers} from './allReducers';
import createSensitiveStorage from 'redux-persist-sensitive-storage';
import logger from 'redux-logger';

const storage = createSensitiveStorage({
  keychainService: 'sultra',
  sharedPreferencesName: 'sultra',
});

const options = {
  key: 'security',
  storage,
};

const persistedReducer = persistReducer(options, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: gDm => gDm().concat(logger),
});

export const persistedStore = persistStore(store);
