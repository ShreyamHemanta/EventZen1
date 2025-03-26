import { authApi } from '../api/axios.js';

export const login = async (credentials) => {
  const response = await authApi.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await authApi.post('/auth/register', userData);
  return response.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await authApi.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
