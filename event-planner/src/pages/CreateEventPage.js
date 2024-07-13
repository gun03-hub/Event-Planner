import React, { useState } from 'react';

const CreateEventPage = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      date: eventDate,
      description: eventDescription,
    };
    addEvent(newEvent);
    setEventName('');
    setEventDate('');
    setEventDescription('');
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </label>
        <label>
          Event Date:
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </label>
        <label>
          Event Description:
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
