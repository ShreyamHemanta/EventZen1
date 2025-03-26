import axios from 'axios';

export const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const authApi = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_AUTH_API_BASE_URL,
});
