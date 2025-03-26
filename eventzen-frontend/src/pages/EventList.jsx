import { useEffect, useState } from 'react';
import { getEvents } from '../services/eventService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
