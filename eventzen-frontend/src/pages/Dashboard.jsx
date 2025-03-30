import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const userResponse = await fetch('http://localhost:5008/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const userData = await userResponse.json();

        const eventsResponse = await fetch('http://localhost:5000/api/events', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const eventsData = await eventsResponse.json();

        if (userResponse.ok) setUser(userData);
        if (eventsResponse.ok) setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
  <h2 className="dashboard-title">Welcome, {user.username}</h2>
  <div className="dashboard-card">
    <h3 className="dashboard-card-title">Upcoming Events</h3>
    {events.length === 0 ? (
    <p>No upcoming events</p>
    ) : ( events.map(event => (
    <div key="{event._id}" className="dashboard-card-content">
      <p><strong>{event.title}</strong>
        - {new Date(event.date).toLocaleDateString()}</p>
    </div>
    )) )}
  </div>
</div>
  );
};

export default Dashboard;
