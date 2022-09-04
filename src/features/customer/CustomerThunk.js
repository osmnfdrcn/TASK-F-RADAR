import customFetch from '../../utils/axios'

export const getCustomersThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const getSingleCustomerThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}