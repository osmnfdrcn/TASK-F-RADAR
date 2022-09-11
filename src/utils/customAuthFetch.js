import axios from 'axios';
import { getTokenFromLocalStorage } from './localStorage';
import { authApiUrl } from './constants';

const customAuthFetch = axios.create({
  baseURL: authApiUrl
});

customAuthFetch.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default customAuthFetch;