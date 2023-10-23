import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  person: '',
  isLoading: false,
  isSuccess: false,
  data: [],
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setToken: (state, {type, payload}) => {
      state.accessToken = payload.accessToken;
    },
    setPerson: (state, {payload}) => {
      state.person = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, (state, {payload}) => {
        state.isLoading = true;
      })
      .addCase(getUser.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(getUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      });
  },
});

export const getUser = createAsyncThunk('getUser', async () => {
  try {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = request.json();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const {setToken, setPerson} = AuthSlice.actions;

export default AuthSlice.reducer;
