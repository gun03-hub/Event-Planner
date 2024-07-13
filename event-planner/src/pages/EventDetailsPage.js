// src/pages/EventDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const { id } = useParams();
  // Fetch event details by ID (mocked here for simplicity)
  const event = { id, title: 'Sample Event', date: '2024-07-12', description: 'This is a sample event description.' };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-bold">{event.title}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetailsPage;
