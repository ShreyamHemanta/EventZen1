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
        <div className="container mx-auto max-w-md py-10">
            <h2 className="text-3xl font-bold mb-6">Create Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Event Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
