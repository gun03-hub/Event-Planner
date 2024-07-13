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
      <p className="text-gray-700 dark:text-gray-300">
        At Our Planner, we are passionate about turning your event dreams into reality. Founded by Gunjan Arora in 2024, our mission is to provide a seamless event planning experience that combines innovation, efficiency, and personal touch. <br></br>
        <strong>Our Vision</strong><br></br>
        We believe that every event is unique and deserves a personalized approach. Our vision is to empower individuals and businesses to create memorable events that leave a lasting impression.<br></br>
        <b>Our Team</b><br></br>
        Our dedicated team consists of experienced event planners, designers, and tech experts who work together to ensure your event is nothing short of extraordinary. We pride ourselves on our attention to detail, creativity, and commitment to excellence.<br></br>
        <b>What Sets Us Apart</b>
        <ul>
        <li>Innovative Technology: Our platform is designed with the latest technology to streamline the planning process and enhance your experience.</li>
        <li>Personalized Service: We offer tailored solutions to meet your specific needs and preferences.</li>
        <li>Commitment to Excellence: From concept to execution, we are committed to delivering the highest quality service and results.</li>
        <li>Join Us</li>
        </ul>

Become a part of the Event Planner community and discover how we can help you plan your next event with ease and excellence. Contact Us to learn more about our services or get started today!</p>
    </motion.div>
  );
};

export default AboutUs;
