import { configureStore } from '@reduxjs/toolkit'
import appSlice from './features/app/AppSlice';
import customerSlice from './features/customer/CustomerSlice';

export const store = configureStore({
  reducer: {
    customer: customerSlice,
    app: appSlice
  }
});