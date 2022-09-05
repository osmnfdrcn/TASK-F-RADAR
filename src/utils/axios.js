import axios from 'axios';
import { baseURL } from './constants';

const customFetch = axios.create({
  baseURL
});


export default customFetch;