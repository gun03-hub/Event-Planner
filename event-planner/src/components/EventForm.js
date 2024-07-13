// src/components/EventForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EventForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!title) errors.title = "Title is required.";
    if (!date) errors.date = "Date is required.";
    if (!description) errors.description = "Description is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit({ title, date, description });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-bold mb-6">Create Event</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? 'border-red-500' : ''}`}
          placeholder="Event Title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-medium mb-2">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.date ? 'border-red-500' : ''}`}
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-medium mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.description ? 'border-red-500' : ''}`}
        ></textarea>
        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
      </div>
      <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Submit</button>
    </form>
  );
};

export default EventForm;
