import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import {
  getCustomersThunk,
  getSingleCustomerThunk,
  deleteCustomerThunk,
  createCustomerThunk,
  updateCustomerThunk

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
  end: 15,
  displaySuccessAlert: false,
  displayErrorAlert: false,
  displayDeleteConfirmModal: false,
  displayCreateCustomerModal: false,
  displayUpdateCustomerModal: false,

  // true => ascending sort
  // false => descending sort
  // default is false so that first sorting can be ascending.
  sortStatus: {
    companyName: false,
    taxNumber: false,
    taxOffice: false,
    invoiceCount: false,
    contactNumber: false,
    province: false
  }
}

export const getCustomers = createAsyncThunk(
  'customer/getCustomers',
  async (thunkAPI) => {
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

export const createCustomer = createAsyncThunk(
  'customer/createCustomer',
  async (customerData, thunkAPI) => {
    return createCustomerThunk('/customers', customerData, thunkAPI)
  }
)

export const updateCustomer = createAsyncThunk(
  'customer/updateCustomer',
  async (customerData, thunkAPI) => {
    return updateCustomerThunk(`/customers/${customerData.id}`, customerData, thunkAPI)
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

    // taxNumber and invoiceCount must be sorting as number and others as string
    sortCustomers: (state, { payload }) => {
      const isNumber = payload === "taxNumber" || payload === "invoiceCount"

      if (state.sortStatus[`${payload}`] === false) {
        state.searchResults = state.searchResults.sort((a, b) => {
          if (isNumber
            ? Number(a[`${payload}`]) < Number(b[`${payload}`])
            : String(a[`${payload}`]) < String(b[`${payload}`])
          ) {
            return -1;
          }
          if (isNumber
            ? Number(a[`${payload}`]) > Number(b[`${payload}`])
            : String(a[`${payload}`]) > String(b[`${payload}`])
          ) {
            return 1;
          }
          return 0;
        })
        state.sortStatus[`${payload}`] = true
      } else {
        state.searchResults = state.searchResults.sort((a, b) => {
          if (isNumber
            ? Number(a[`${payload}`]) > Number(b[`${payload}`])
            : String(a[`${payload}`]) > String(b[`${payload}`])
          ) {
            return -1;
          }
          if (isNumber
            ? Number(a[`${payload}`]) < Number(b[`${payload}`])
            : String(a[`${payload}`]) < String(b[`${payload}`])
          ) {
            return 1;
          }
          return 0;
        })
        state.sortStatus[`${payload}`] = false
      }

    },
    resetCustomer: (state, { payload }) => {
      state.customer = {}
    },
    showDeleteConfirmModal: (state, { payload }) => {
      state.displayDeleteConfirmModal = payload
    },
    showCreateCustomerModal: (state, { payload }) => {
      state.displayCreateCustomerModal = payload
    },
    showUpdateCustomerModal: (state, { payload }) => {
      state.displayUpdateCustomerModal = payload
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
      state.customers = state.customers.filter((c) => c.id !== payload.id)
      state.searchResults = state.customers
      state.customer = {}
      state.isLoading = false
      state.error = false
      state.showSuccessAlert = true
    },
    [deleteCustomer.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = true
    },
    [createCustomer.pending]: (state) => {
      state.isLoading = true
    },
    [createCustomer.fulfilled]: (state, { payload }) => {
      state.customers = [...state.customers, payload]
      state.searchResults = state.customers
      state.isLoading = false
      state.error = false
      state.displaySuccessAlert = true
      state.displayCreateCustomerModal = false
    },
    [createCustomer.rejected]: (state, { payload }) => {
      console.log(payload);
      state.isLoading = false
      state.error = true
    },
    [updateCustomer.pending]: (state) => {
      state.isLoading = true
    },
    [updateCustomer.fulfilled]: (state, { payload }) => {
      state.customer = payload
      state.isLoading = false
      state.error = false
      state.displaySuccessAlert = true
      state.displayUpdateCustomerModal = false
    },
    [updateCustomer.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = payload

    }
  }


})
export const { updateSearchString, updatePage, sortCustomers, resetCustomer, showDeleteConfirmModal, showCreateCustomerModal, showUpdateCustomerModal } = customerSlice.actions
export default customerSlice.reducer

