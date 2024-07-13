import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import axios from 'axios';
import Notiflix from 'notiflix';

// Set base URL for axios

axios.defaults.baseURL = 'https://slim-mom-backend-team-project-ik9a.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:8000/api';
// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {

    try {
      // Register user
      await axios.post('/users/signup', { name, email, password });

      // Login user immediately after registration
      const loginResponse = await axios.post('/users/login', { email, password });
      const { data } = loginResponse;
      // token.set(data.accessToken); // Assuming token.set is defined elsewhere
      // setAuthHeader(res.data.token);

      // Check if user has already submitted a form
      if (thunkAPI.getState().dailyRate.dataUser) {
        const dataUser = thunkAPI.getState().dailyRate.dataUser;
        const userID = data.user.id;
        await axios.post(`daily-rate/${userID}`, dataUser);
      }

      // Return data from login response
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    const { email, password } = credential;

    try {
      // Login user
      const loginResponse = await axios.post('/users/login', { email, password });
      const { data } = loginResponse;
      Notiflix.Report.success('Success', 'Welcome to Slimmom', 'OK');
      setAuthHeader(loginResponse.data.token);
      // token.set(data.accessToken); // Assuming token.set is defined elsewhere

      // Return data from login response
      return data;
    } catch (error) {
      // Notify.failure(error.message);
      Notiflix.Report.warning('Warning', 'Email or Password in token does not match', 'OK');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      // Logout user
      await axios.post('users/logout');
      clearAuthHeader();
      // token.unset(); // Assuming token.unset is defined elsewhere
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
 async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
      
    }

    // Set refreshToken for request
    // token.set(refreshToken); // Assuming token.set is defined elsewhere

    try {
       // If there is a token, add it to the HTTP header and perform the request
      
       setAuthHeader(persistedToken);
       const res = await axios.get('/users/current');
       return res.data;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
