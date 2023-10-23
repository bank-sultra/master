import {configureStore} from '@reduxjs/toolkit';
import {allReducers} from './allReducers';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: allReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
