import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './features/customer/CustomerSlice';

export const store = configureStore({
  reducer: {
    customer: customerSlice,
  }
});