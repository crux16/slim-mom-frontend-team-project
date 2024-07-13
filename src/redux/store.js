import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import { authReducer } from './auth/authSlice';
import { persistedDailyRateReducer } from './dailyRate/dailyRateSlice';
import { productsReducer } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dailyRate: persistedDailyRateReducer,
    products: productsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
