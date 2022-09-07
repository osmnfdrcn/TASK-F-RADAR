import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './features/customer/CustomerSlice';
import userSlice from './features/user/UserSlice';

export const store = configureStore({
  reducer: {
    customer: customerSlice,
    user: userSlice
  }
});