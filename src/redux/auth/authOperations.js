import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL =
  'https://slim-mom-backend-team-project-ik9a.onrender.com/';
// axios.defaults.baseURL = 'http://localhost:3000';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await axios.post('api/users/signup', {
        name,
        email,
        password,
      });
      toast.success('Registration successful');
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error('Registration failed');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await axios.post('api/users/login', { email, password });
      toast.success('Login successful');
      setAuthHeader(res.data.data.token);
      return res.data;
    } catch (error) {
      toast.error('Login failed');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'api/auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('api/users/logout');
      toast.success('Logout successful');
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
