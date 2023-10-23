import {combineReducers} from '@reduxjs/toolkit';
import auth from '../features/auth/slice';
import explore from '../features/explore/slice';

export const allReducers = combineReducers({
  auth: auth,
  explore,
});
