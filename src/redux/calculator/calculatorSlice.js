import { createSlice } from '@reduxjs/toolkit';
import { fetchCalc, addCalories } from './calculatorOperation';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchCalc.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCalc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCalc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addCalories.pending, state => {
        state.isLoading = true;
      })
      .addCase(addCalories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
