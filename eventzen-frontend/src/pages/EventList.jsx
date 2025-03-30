import React, { useState, useEffect } from 'react';
import '../styles/EventList.css';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editedEvent, setEditedEvent] = useState({});

  useEffect(() => {
    // Fetch all events from backend (replace with actual API endpoint)
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setEvents(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/events/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.ok) {
          setEvents(events.filter(event => event._id !== id));
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  // Handle edit click
  const handleEditClick = (event) => {
    setEditingEvent(event._id);
    setEditedEvent({ ...event });
  };

  // Handle save after editing
  const handleSaveClick = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/events/${editedEvent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(editedEvent),
      });
      if (response.ok) {
        setEvents(events.map(event => event._id === editedEvent._id ? editedEvent : event));
        setEditingEvent(null);
      } else {
        console.error('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  // Handle cancel editing
  const handleCancelClick = () => {
    setEditingEvent(null);
  };

  // Handle input change during editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="event-list-container">
      <h2>Event List</h2>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        events.map(event => (
          <div key={event._id} className="event-item">
            {editingEvent === event._id ? (
              <div>
                <p>Event Name</p>
                <input
                  type="text"
                  name="name"
                  value={editedEvent.name}
                  onChange={handleChange}
                  placeholder="Event Name"
                />
                <p>Event Location</p>
                <input
                  type="text"
                  name="location"
                  value={editedEvent.location}
                  onChange={handleChange}
                  placeholder="Location"
                />
                <p>Event Organizer</p>
                <input
                  type="text"
                  name="organizer"
                  value={editedEvent.organizer}
                  onChange={handleChange}
                  placeholder="Organizer"
                />
                <p>Event Description</p>
                <textarea
                  name="description"
                  value={editedEvent.description}
                  onChange={handleChange}
                  placeholder="Description"
                />
                <div className="event-action">
                  <button onClick={handleSaveClick} className="event-button">Save</button>
                  <button onClick={handleCancelClick} className="event-button">Cancel</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date"><strong>Date:</strong>{new Date(event.date).toLocaleDateString()}</p>
                <p><strong>Name:</strong> {event.name}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Organizer:</strong> {event.organizer}</p>
                <p><strong>Description:</strong>{event.description}</p>
                <div className="event-action">
                  <button className="event-button" onClick={() => handleEditClick(event)}>Edit</button>
                  <button className="event-button" onClick={() => handleDelete(event._id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
