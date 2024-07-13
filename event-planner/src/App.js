import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import AboutUs from './pages/AboutUs';
import MoreEvents from './pages/MoreEvents';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [events, setEvents] = useState([
    { name: 'Event 1', date: '2024-07-20', description: 'Description of Event 1' },
    { name: 'Event 2', date: '2024-08-15', description: 'Description of Event 2' },
    { name: 'Event 3', date: '2024-09-10', description: 'Description of Event 3' },
  ]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <Router>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-gradient-light dark:bg-gradient-dark">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage events={events} />} />
              <Route path="/create" element={<CreateEventPage addEvent={addEvent} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/more-events" element={<MoreEvents />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
