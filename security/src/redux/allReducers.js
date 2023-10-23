import {combineReducers} from '@reduxjs/toolkit';
import auth from '../features/auth/slice';
import main from '../features/main/slice';

export const allReducers = combineReducers({
  auth,
  main,
});
