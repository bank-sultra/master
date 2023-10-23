import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  search: '',
};

const ExploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    setSearch: (state, {payload}) => {
      state.search = payload;
    },
  },
});

export const {setSearch} = ExploreSlice.actions;
export default ExploreSlice.reducer;
