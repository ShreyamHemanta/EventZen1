import { useState } from 'react';
import "../styles/CreateEvent.css"

const CreateEvent = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send create event request to Node.js backend
        console.log('Event Created:', { name, date });
    };

    return (
        <div className="create-event-container">
            <h2 className="create-event-title">Create Event</h2>
            <form onSubmit={handleSubmit} className="create-event-form">
                <input
                    type="text"
                    placeholder="Event Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
