import { configureStore } from '@reduxjs/toolkit'
import customerSlice from './features/customer/CustomerSlice';
import userSlice from './features/user/userSlice';
import appSlice from './features/app/appSlice'
import i18nSlice from './features/i18n/i18nSlice'

export const store = configureStore({
  reducer: {
    customer: customerSlice,
    user: userSlice,
    app: appSlice,
    i18n: i18nSlice,
  }
});

