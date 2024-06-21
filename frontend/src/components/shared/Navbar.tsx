import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800">DevCommunity</Link>
            </div>
            <div className="hidden md:flex md:space-x-8 ml-10">
              <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/projects" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              <Link to="/mentors" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Mentors</Link>
              <Link to="/jobs" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Jobs</Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            <Link to="/login" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
            <Link to="/register" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/projects" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
          <Link to="/mentors" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Mentors</Link>
          <Link to="/jobs" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Jobs</Link>
          <Link to="/login" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
          <Link to="/register" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
