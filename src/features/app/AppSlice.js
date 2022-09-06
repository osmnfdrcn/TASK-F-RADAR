import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayConfirmModal: false,
  displayCreateCustomerModal: false,
  displayUpdateCustomerModal: false,

}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showConfirmModal: (state, { payload }) => {
      state.displayConfirmModal = payload
    },
    showCreateCustomerModal: (state, { payload }) => {
      state.displayCreateCustomerModal = payload
    },
    showUpdateCustomerModal: (state, { payload }) => {
      state.displayUpdateCustomerModal = payload
    },

  }
})

export const { showConfirmModal, showCreateCustomerModal, showUpdateCustomerModal } = appSlice.actions
export default appSlice.reducer