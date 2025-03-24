import axios from "axios";

export const getEvents = () => axios.get("/api/events").then(res => res.data);
export const getEventById = (id) => axios.get(`/api/events/${id}`).then(res => res.data);
