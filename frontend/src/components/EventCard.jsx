import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`}>View Details</Link>
    </div>
  );
};

export default EventCard;
