import { api } from '../api/axios.js';

export const getEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

export const createEvent = async (eventData) => {
  const token = localStorage.getItem('token');
  const response = await api.post('/events', eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
