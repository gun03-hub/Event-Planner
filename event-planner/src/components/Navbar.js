import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`bg-white dark:bg-gray-800 shadow-lg ${theme}`}>
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300">Event Planner</h1>
        <nav className="flex space-x-4">
          <Link to="/" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
          <Link to="/create" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600">Create Event</Link>
          <Link to="/about" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600">About Us</Link>
          <Link to="/more-events" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600">More Events</Link>
          <Link to="/login" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600">Login</Link>
          <Link to="/signup" className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600">Signup</Link>
        </nav>
        <button 
          className="bg-blue-600 dark:bg-blue-300 text-white dark:text-gray-800 px-4 py-2 rounded-md shadow-md"
          onClick={toggleTheme}
        >
          Toggle Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Navbar;
