import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="border border-gray-300 rounded-md p-4 mb-4"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
      <p className="text-gray-700 mb-4">{event.description}</p>
      <p className="text-gray-500">{event.date}</p>
    </motion.div>
  );
};

export default EventCard;
