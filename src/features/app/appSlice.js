import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showMainSubMenu: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowMainSubMenu: (state, { payload }) => {
      state.showMainSubMenu = payload
    }
  }
})

export const { setShowMainSubMenu } = appSlice.actions
export default appSlice.reducer