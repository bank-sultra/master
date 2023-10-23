import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  isActive: false,
};

const AuthSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setAccessToken: (state, {payload}) => {
      state.accessToken = payload;
    },
    setActivity: (state, {payload}) => {
      state.isActive = payload;
    },
  },
});

export const {setAccessToken, setActivity} = AuthSlice.actions;

export default AuthSlice.reducer;
