import axios from 'axios';
import { getTokenFromLocalStorage } from './localStorage';
const baseURL = 'http://localhost:5000/api/v1'
const customAuthFetch = axios.create({
  baseURL
});

customAuthFetch.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default customAuthFetch;