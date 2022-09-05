import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getCustomersThunk,
  getSingleCustomerThunk,
  deleteCustomerThunk

} from './CustomerThunk'

const initialState = {
  isLoading: false,
  customers: [],
  searchResults: [],
  customer: {},
  error: null,
  total_pages: 1,
  recordsPerPage: 15,
  currentPage: 1,
  start: 0,
  skip: 15,
  end: 15
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

export const deleteCustomer = createAsyncThunk(
  'customer/deleteCustomer',
  async (id, thunkAPI) => {
    return deleteCustomerThunk(`/customers/${id}`, thunkAPI)
  }
)

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    updateSearchString: (state, { payload }) => {
      const searchString = payload + ""
      state.searchResults = state.customers.filter((customer) => (customer.companyName + String(customer.taxNumber)).toLowerCase().includes(searchString.toLowerCase()))
      state.total_pages = Math.ceil(state.searchResults.length / state.recordsPerPage)
    },


  },
  extraReducers: {
    [getCustomers.pending]: (state) => {
      state.isLoading = true
    },
    [getCustomers.fulfilled]: (state, { payload }) => {
      state.customers = payload
      state.searchResults = payload
      state.total_pages = Math.ceil(state.searchResults.length / state.recordsPerPage)
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
    [deleteCustomer.pending]: (state) => {
      state.isLoading = true
    },
    [deleteCustomer.fulfilled]: (state, { payload }) => {
      state.customer = payload
      state.isLoading = false
      state.error = false
    },
    [deleteCustomer.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = true
    },
  }


})
export const { updateSearchString, updatePage } = customerSlice.actions
export default customerSlice.reducer

