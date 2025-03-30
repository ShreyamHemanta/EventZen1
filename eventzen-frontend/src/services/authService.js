import { authApi } from '../api/axios.js';

export const login = async (credentials) => {
  console.log("Sending login request:", credentials);
  const response = await fetch('http://localhost:5008/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json(); 
    } catch {
      errorData = { message: await response.text() }; 
    }
    throw new Error(errorData.message || 'Login failed');
  }

  return await response.json();
};

export const register = async (userData) => {
  const response = await authApi.post('http://localhost:5008/api/user/register', userData);
  return response.data;
};

export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await authApi.get('http://localhost:5008/api/user/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
