import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCalc = createAsyncThunk(
  'calculator/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/calculator');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCalories = createAsyncThunk(
  'calculator/addCalories',
  async (
    { height, desiredWeight, age, currentWeight, bloodType },
    thunkAPI
  ) => {
    try {
      const response = await axios.post('/calculator', {
        height,
        desiredWeight,
        age,
        currentWeight,
        bloodType,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.messsage);
    }
  }
);
