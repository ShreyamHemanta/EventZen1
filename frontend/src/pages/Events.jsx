import React, { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
