// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-extrabold">Event Planner</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/create" className="hover:text-gray-300">Create Event</Link>
        </div>
        <button
          className="md:hidden p-2 rounded-md text-gray-200 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={`absolute top-16 right-0 bg-blue-600 text-white w-full md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center p-4 space-y-2">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/create" className="hover:text-gray-300">Create Event</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
