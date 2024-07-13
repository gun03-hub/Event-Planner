import React from 'react';

const HomePage = ({ events }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">Welcome to Event Planner</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
        Welcome to Our Event Planner! Planning an event can be overwhelming, but with [Your Event Planner's Name], it's a breeze! Whether you're organizing a corporate conference, a wedding, a birthday party, or any other special occasion, we’re here to help you every step of the way.
        Why Choose Us?
        Easy Event Management: Our intuitive platform lets you create, manage, and track your events with ease.
        Customizable Options: Tailor every aspect of your event to fit your unique needs, from venue selection to guest lists.
        Expert Support: Get access to professional advice and tips to make your event unforgettable.
        Explore our features, from automated reminders to interactive guest management, and start planning your next event with confidence.
        Ready to get started? Sign up and take the first step toward a flawless event!
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">Upcoming Events</h2>
        {events.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">No events found</p>
        ) : (
          <ul>
            {events.map((event, index) => (
              <li key={index} className="mb-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">{event.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{event.date}</p>
                  <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">Get Started</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Sign up today to start creating and managing your events with ease.
        </p>
        <a href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default HomePage;
