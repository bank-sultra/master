import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  language: 'id',
  theme: 'light',
};

const MainSlice = createSlice({
  initialState,
  name: 'main',
  reducers: {
    setLanguage: (state, {payload}) => {
      state.language = payload;
    },
    setTheme: (state, {payload}) => {
      state.theme = payload;
    },
  },
});

export const {setLanguage, setTheme} = MainSlice.actions;

export default MainSlice.reducer;
