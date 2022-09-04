import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getCustomersThunk,
  getSingleCustomerThunk

} from './CustomerThunk'

const initialState = {
  isLoading: false,
  customers: [],
  customer: {},
  error: null
}

export const getCustomers = createAsyncThunk(
  'customer/getCustomers',
  async (url, thunkAPI) => {
    return getCustomersThunk("/customers", thunkAPI)
  }
)
export const getSingleCustomer = createAsyncThunk(
  'customer/getSingleCustomer',
  async (id, thunkAPI) => {
    return getSingleCustomerThunk(`/customers/${id}`, thunkAPI)
  }
)

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: {
    [getCustomers.pending]: (state) => {
      state.isLoading = true
    },
    [getCustomers.fulfilled]: (state, { payload }) => {
      state.customers = payload
      state.isLoading = false
      state.error = false

    },
    [getCustomers.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false
      state.error = payload
    },

    [getSingleCustomer.pending]: (state) => {
      state.isLoading = true
    },
    [getSingleCustomer.fulfilled]: (state, { payload }) => {
      state.customer = payload
      state.isLoading = false
      state.error = false
    },
    [getSingleCustomer.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = true
    },
  }


})

export default customerSlice.reducer