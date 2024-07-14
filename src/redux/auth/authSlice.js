import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
      user: { name: null, email: null },
      token: null,
      isLoggedIn: false,
      isLoading: false,
      isError: false,
      isRefreshing: false,
  },
  reducers: {},
  extraReducers: builder => {
      builder
      .addCase(register.pending, state => {
          state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
          state.user.name = action.payload.data.name;
          state.token = action.payload.data.token;
          state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
          state.isLoggedIn = false;
          state.isError = true;
      })
      .addCase(logIn.pending, state => {
          state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
          state.user.name = action.payload.data.name;
          state.token = action.payload.data.token;
          state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
          state.isLoggedIn = false;
          state.isError = true;
      })
      .addCase(logOut.pending, state => {
          state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
          state.user = null;
          state.token = null;
          state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
          state.isLoggedIn = true;
          state.isError = true;
      })
      .addCase(refreshUser.pending, state => {
          state.isLoading = true;
          state.isRefreshing = true;
          state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.isRefreshing = false;
          state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, state => {
          state.isLoggedIn = false;
          state.isRefreshing = false;
          state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;
