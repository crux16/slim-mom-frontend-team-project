import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null, id: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: {
    register: false,
    logIn: false,
    logOut: false,
    refresh: false,
    isRefreshing: false,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading.register = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.username = payload.user.username;
        state.user.email = payload.user.email;
        state.user.id = payload.user.id;

        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;

        state.isLoggedIn = true;
        state.loading.register = false;
      })
      .addCase(register.rejected, state => {
        state.loading.register = false;
      })

      .addCase(logIn.pending, state => {
        state.loading.logIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user.username = payload.user.username;
        state.user.email = payload.user.email;
        state.user.id = payload.user.id;

        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;

        state.isLoggedIn = true;
        state.loading.logIn = false;
      })
      .addCase(logIn.rejected, state => {
        state.loading.logIn = false;
      })

      .addCase(logOut.pending, state => {
        state.loading.logOut = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user.username = initialState.user.username;
        state.user.email = initialState.user.email;
        state.user.id = initialState.user.id;

        state.accessToken = initialState.accessToken;
        state.refreshToken = initialState.refreshToken;
        state.sid = initialState.sid;

        state.isLoggedIn = initialState.isLoggedIn;
        state.loading.logOut = false;
      })
      .addCase(logOut.rejected, state => {
        state.loading.logOut = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
