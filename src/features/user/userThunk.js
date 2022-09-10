import customAuthFetch from '../../utils/axios'

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customAuthFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const verifyUserThunk = async (url, verificationCode, thunkAPI) => {
  try {
    const resp = await customAuthFetch.post(url, { verificationCode: verificationCode })
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customAuthFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const logoutUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customAuthFetch.post(url)
    return resp.data

  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customAuthFetch.post(url, user)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const updateProfilePhotoThunk = async (url, data, thunkAPI) => {
  try {
    const resp = await customAuthFetch.post(url, data)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

export const getUsersThunk = async (url, thunkAPI) => {
  try {
    const resp = await customAuthFetch.get(url)
    return resp.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}

