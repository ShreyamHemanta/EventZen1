import { useState } from 'react';
import "../styles/CreateEvent.css";

const CreateEvent = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !date || !location || !description || !organizer) {
            setError('All fields are required');
            return;
        }

        const eventData = { name, date, location, description, organizer };

        try {
            const response = await fetch('http://localhost:5000/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(eventData)
            });

            if (!response.ok) {
                throw new Error('Failed to create event');
            }

            setSuccess('Event created successfully!');
            setName('');
            setDate('');
            setLocation('');
            setDescription('');
            setOrganizer('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="create-event-container">
            <h2 className="create-event-title">Create Event</h2>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <form onSubmit={handleSubmit} className="create-event-form">
                <input
                    type="text"
                    placeholder="Event Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="create-event-input"
                />
                <input
                    type="text"
                    placeholder="Event Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="create-event-input"
                />
                <input
                    type="text"
                    placeholder="Event Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="create-event-input"
                />
                <input
                    type="text"
                    placeholder="Event Organizer"
                    value={organizer}
                    onChange={(e) => setOrganizer(e.target.value)}
                    className="create-event-input"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="create-event-input"
                />
                <button type="submit" className="create-event-button">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
