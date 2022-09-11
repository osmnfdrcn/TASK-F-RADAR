import customFetch from '../../utils/customFetch'

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

export const deleteCustomerThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const createCustomerThunk = async (url, customerData, thunkAPI) => {
  try {
    console.log(customerData);
    const resp = await customFetch.post(url, customerData)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}
export const updateCustomerThunk = async (url, customerData, thunkAPI) => {
  try {
    console.log(customerData);
    const resp = await customFetch.put(url, customerData)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

