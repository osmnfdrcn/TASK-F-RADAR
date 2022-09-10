
// const baseURL = 'http://localhost:5000/api/v1'


import axios from 'axios';
import { baseURL } from './constants';

const customFetch = axios.create({
  baseURL
});


export default customFetch;