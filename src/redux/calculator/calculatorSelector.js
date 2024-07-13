import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filterSelector';

export const selectCalculator = state => state.calculator.items;
export const selectError = state => state.calculator.error;
export const selectIsLoading = state => state.calculator.isLoading;

export const selectFilteredCalculator = createSelector(
  [selectCalculator, selectFilter],
  (calculator, filter) => {
    return calculator.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
