import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './features/customer/CustomerSlice';
import userSlice from './features/user/userSlice';
import appSlice from './features/app/appSlice'

export const store = configureStore({
  reducer: {
    customer: customerSlice,
    user: userSlice,
    app: appSlice
  }
});