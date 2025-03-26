import axios from 'axios';

export const loginUser = async (email, password) => {
  const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
  localStorage.setItem('token', data.token);
  return data.user;
};

export const registerUser = async (userData) => {
  const { data } = await axios.post('http://localhost:5000/api/auth/register', userData);
  return data;
};
