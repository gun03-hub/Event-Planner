import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-10 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-5">About Us</h2>
      <p className="text-gray-700 dark:text-gray-300">We are a company dedicated to organizing the best events for you. Our team is passionate about delivering top-notch services and creating memorable experiences.</p>
    </motion.div>
  );
};

export default AboutUs;
