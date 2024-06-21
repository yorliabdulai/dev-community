import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold">DevCommunity</h2>
            <p className="mt-2">Empowering aspiring developers across Africa.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">Projects</Link>
              </li>
              <li>
                <Link to="/mentors" className="hover:underline">Mentors</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:underline">Jobs</Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">Login</Link>
              </li>
              <li>
                <Link to="/register" className="hover:underline">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
          <p>&copy; 2024 DevCommunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
